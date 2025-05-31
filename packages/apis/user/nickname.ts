import { ScrapeOptionType, type ScrapeOptions } from 'spider';

const nickname: ScrapeOptions = {
  name: 'nickname',
  type: ScrapeOptionType.Text,
  selector: "span[itemprop='name']",
};

export default nickname;
