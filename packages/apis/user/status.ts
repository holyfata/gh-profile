import { ScrapeOptionType, type ScrapeOptions } from "spider";

const status: ScrapeOptions = {
    name: "status",
    type: ScrapeOptionType.Text,
    selector: "div.user-status-message-wrapper>div",
    handler: (value) => {
        // 去重处理：如果字符串前半部分和后半部分相同，则只返回一半
        if (typeof value === "string" && value.length % 2 === 0) {
            const half = value.length / 2;
            if (value.slice(0, half) === value.slice(half)) {
                return value.slice(0, half);
            }
        }
        return value;
    } 
}

export default status;
