import { ScrapeOptionType, type ScrapeOptions } from '@gh-profile/spider';

const company: ScrapeOptions = {
  name: 'company',
  type: ScrapeOptionType.Text,
  selector: "li[itemprop='worksFor']",
};

export default company;
