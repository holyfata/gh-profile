import { ScrapeOptionType, type ScrapeOptions } from "spider";
import { URL } from "shared";

const followers: ScrapeOptions = {
    name: "followers",
    type: ScrapeOptionType.Text,
    selector: `a[href='${URL}?tab=followers']` ,
    handler: (value) => value?.replace("followers", "").trim() || null
}

export default followers;
