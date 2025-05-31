import { ScrapeOptionType, type ScrapeOptions } from '@gh-profile/spider';

const location: ScrapeOptions = {
  name: 'location',
  type: ScrapeOptionType.Text,
  selector: "li[itemprop='homeLocation']",
};

export default location;
