import { ScrapeOptionType, type ScrapeOptions } from "spider";

const following: ScrapeOptions = {
    name: "following",
    type: ScrapeOptionType.Text,
    selector: "a[href='https://github.com/holyfata?tab=following']" ,
    handler: (value) => value?.replace("following", "").trim() || null
}

export default following;
