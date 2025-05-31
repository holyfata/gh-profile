import { ScrapeOptionType, type ScrapeOptions } from '@gh-profile/spider';

const biography: ScrapeOptions = {
  name: 'biography',
  type: ScrapeOptionType.Text,
  selector: 'div.user-profile-bio',
};

export default biography;
