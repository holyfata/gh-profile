import { ScrapeOptionType, type ScrapeOptions } from 'spider';

const company: ScrapeOptions = {
  name: 'company',
  type: ScrapeOptionType.Text,
  selector: "li[itemprop='worksFor']",
};

export default company;
