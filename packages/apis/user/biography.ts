import { ScrapeOptionType, type ScrapeOptions } from "spider";

const biography: ScrapeOptions = {
    name: "biography",
    type: ScrapeOptionType.Text,
    selector: "div.user-profile-bio" 
}

export default biography;
