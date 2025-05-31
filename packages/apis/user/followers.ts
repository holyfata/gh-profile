import { ScrapeOptionType, type ScrapeOptions } from "spider";

const followers: ScrapeOptions = {
    name: "followers",
    type: ScrapeOptionType.Text,
    selector: "a[href='https://github.com/holyfata?tab=followers']" ,
    handler: (value) => value?.replace("followers", "").trim() || null
}

export default followers;
