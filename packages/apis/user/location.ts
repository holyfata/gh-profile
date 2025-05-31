import { ScrapeOptionType, type ScrapeOptions } from "spider";

const location: ScrapeOptions = {
    name: "location",
    type: ScrapeOptionType.Text,
    selector: "li[itemprop='homeLocation']"
}

export default location;
