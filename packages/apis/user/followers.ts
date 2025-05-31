import { ScrapeOptionType, type ScrapeOptions } from '@gh-profile/spider';
import { URL } from '@gh-profile/shared';

const followers: ScrapeOptions = {
  name: 'followers',
  type: ScrapeOptionType.Text,
  selector: `a[href='${URL}?tab=followers']`,
  handler: (value) => value?.replace('followers', '').trim() || null,
};

export default followers;
