import * as cheerio from 'cheerio';

/**
 * 枚举：爬取类型
 * 用于指定爬取内容是文本还是属性
 */
export enum ScrapeOptionType {
  Text = 'text', // 文本内容
  Attr = 'attr', // 属性值
}

/**
 * 单项爬取配置接口
 * 用于描述每一项需要爬取的数据及其处理方式
 */
export interface ScrapeOptions {
  name: string; // 字段名称，结果对象的 key
  type: ScrapeOptionType; // 爬取类型（文本或属性）
  selector: string; // 选择器，定位目标元素
  attribute?: string; // 属性名，仅 type 为 attr 时需要
  handler?: (value: string | null) => string | null; // 结果处理函数，可对爬取结果做二次处理
}

/**
 * Spider 爬虫类
 * 封装了基于 cheerio 的网页爬取能力
 */
export default class Spider {
  private $: cheerio.CheerioAPI; // cheerio 实例，用于解析和操作 HTML

  /**
   * 构造函数私有化，防止外部直接实例化
   * @param $ cheerio 实例
   */
  private constructor($: cheerio.CheerioAPI) {
    this.$ = $;
  }

  /**
   * 静态方法：根据 URL 获取 HTML 并返回 Spider 实例
   * @param url 目标网页地址
   * @returns Spider 实例或 null（发生异常时）
   */
  static async fetchHtml(url: string) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const html = await response.text();
      const $ = cheerio.load(html);
      return new Spider($);
    } catch (error) {
      // 网络请求或解析 HTML 失败时，输出错误并返回 null
      console.error('fetchHtml error:', error);
      return null;
    }
  }

  /**
   * 单项爬取
   * @param options 爬取配置
   * @returns 以 name 为 key 的结果对象，如 { title: "xxx" }
   *          若发生异常，则返回 { name: null }
   */
  async scrape(options: ScrapeOptions) {
    const { name, type, selector, attribute, handler } = options;
    let result: string | null = null;
    try {
      switch (type) {
        case ScrapeOptionType.Text:
          // 获取指定选择器的文本内容，去除首尾空白
          result = this.$(selector).text().trim() || null;
          break;
        case ScrapeOptionType.Attr:
          // 获取指定选择器的属性值
          result = this.$(selector).attr(attribute || '') || null;
          break;
        default:
          // 未知类型直接返回 null
          return { [name]: null };
      }
      // 如果有自定义处理函数，则对结果进行处理
      if (handler && typeof handler === 'function') {
        result = handler(result);
      }
      return { [name]: result };
    } catch (error) {
      // 捕获异常，输出错误信息，返回 null 结果
      console.error('scrape error:', error, options);
      return { [name]: null };
    }
  }

  /**
   * 批量爬取
   * @param options 多项爬取配置
   * @returns Promise，包含所有爬取结果的对象数组
   *          若发生异常，所有字段均为 null
   */
  async scrapeAll(options: ScrapeOptions[]) {
    try {
      // 并发执行所有爬取任务
      return await Promise.all(options.map((option) => this.scrape(option)));
    } catch (error) {
      // 捕获异常，输出错误信息，返回所有字段均为 null 的对象数组
      console.error('scrapeAll error:', error);
      return options.map((opt) => ({ [opt.name]: null }));
    }
  }
}
