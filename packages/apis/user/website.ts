import { ScrapeOptionType, type ScrapeOptions } from 'spider';

const website: ScrapeOptions = {
  name: 'website',
  type: ScrapeOptionType.Text,
  selector: "li[itemprop='url']",
};

export default website;
