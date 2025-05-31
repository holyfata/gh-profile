import { ScrapeOptionType, type ScrapeOptions } from '@gh-profile/spider';
import { URL } from '@gh-profile/shared';

const following: ScrapeOptions = {
  name: 'following',
  type: ScrapeOptionType.Text,
  selector: `a[href='${URL}?tab=following']`,
  handler: (value) => value?.replace('following', '').trim() || null,
};

export default following;
