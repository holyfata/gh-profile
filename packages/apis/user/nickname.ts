import { ScrapeOptionType, type ScrapeOptions } from '@gh-profile/spider';

const nickname: ScrapeOptions = {
  name: 'nickname',
  type: ScrapeOptionType.Text,
  selector: "span[itemprop='name']",
};

export default nickname;
