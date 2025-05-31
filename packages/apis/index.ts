import Spider, { type ScrapeOptions } from 'spider';
import { URL } from 'shared';

// 当前 API 版本号
const version = 'v1';

// API 路径枚举，统一管理所有可用接口
export enum APIs {
  USER_AVATAR = 'v1/user/avatar',
  USER_STATUS = 'v1/user/status',
  USER_NICKNAME = 'v1/user/nickname',
  USER_BIOGRAPHY = 'v1/user/biography',
  USER_FOLLOWERS = 'v1/user/followers',
  USER_FOLLOWING = 'v1/user/following',
  USER_COMPANY = 'v1/user/company',
  USER_LOCATION = 'v1/user/location',
  USER_TIMEZONE = 'v1/user/timezone',
  USER_WEBSITE = 'v1/user/website',
}

/**
 * 根据指定 API 路径获取数据，自动处理异常
 * @param url APIs 枚举中的路径，如 'v1/user/nickname'
 * @returns 爬取到的数据
 * @throws 如果 API 路径或格式无效，或爬取失败，则抛出异常
 */
export const get = async (url: APIs) => {
  try {
    // 校验传入的 url 是否为合法 API 路径
    if (!Object.values(APIs).includes(url)) {
      throw new Error(`Invalid API path: ${url}`);
    }

    // 拆分 url，校验格式是否为 'v1/模块/字段'
    const urlParts = url.split('/');
    if (urlParts.length !== 3 || urlParts[0] !== version) {
      throw new Error('Invalid URL format');
    }

    // 动态导入对应的爬虫配置文件（如 ./user/nickname.ts）
    const spiderConfig = (await import(`./${urlParts[1]}/${urlParts[2]}.ts`))
      .default as ScrapeOptions;

    // 获取目标页面 HTML，并实例化 Spider
    const spider = await Spider.fetchHtml(URL);
    if (!spider) {
      throw new Error('Failed to fetch HTML content');
    }

    // 执行爬虫，返回结果
    return await spider.scrape(spiderConfig);
  } catch (error) {
    // 统一异常处理，便于日志记录和调试
    console.error('get error:', error);
    throw error;
  }
};
