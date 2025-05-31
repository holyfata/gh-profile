import { describe, it, expect } from "bun:test"

import Spider, { ScrapeOptionType, type ScrapeOptions } from "."

// Spider 爬虫功能测试
describe("Spider", async () => {
    // 预先获取目标页面的 Spider 实例
    const spider = (await Spider.fetchHtml("https://github.com/holyfata"))!

    // 测试：获取昵称
    it("should fetch nickname (HolyFata)", async () => {
        const nickname: ScrapeOptions = {
            name: "nickname",
            type: ScrapeOptionType.Text,
            selector: "span[itemprop='name']" // 选择器定位昵称
        }
        const value = await spider.scrape(nickname)
        expect(value).toEqual({ nickname: "HolyFata" })
    })

    // 测试：获取粉丝数
    it("should fetch follower number (5)", async () => {
        const followerNum: ScrapeOptions = {
            name: "followerNum",
            type: ScrapeOptionType.Text,
            selector: "a[href='https://github.com/holyfata?tab=followers']", // 选择器定位粉丝链接
            handler: (value) => value?.replace("followers", "").trim() || null // 去除文本中的"followers"并去空格
        }
        const value = await spider.scrape(followerNum)
        expect(value).toEqual({ followerNum: "5" })
    })

    // 测试：获取时区
    it("should fetch timezone (8.0)", async () => {
        const timezone: ScrapeOptions = {
            name: "timezone",
            type: ScrapeOptionType.Attr,
            selector: "profile-timezone", // 选择器定位时区元素
            attribute: "data-hours-ahead-of-utc" // 目标属性
        }
        const value = await spider.scrape(timezone)
        expect(value).toEqual({ timezone: "8.0" })
    })
})
