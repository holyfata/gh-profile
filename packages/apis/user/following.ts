import { ScrapeOptionType, type ScrapeOptions } from 'spider';
import { URL } from 'shared';

const following: ScrapeOptions = {
  name: 'following',
  type: ScrapeOptionType.Text,
  selector: `a[href='${URL}?tab=following']`,
  handler: (value) => value?.replace('following', '').trim() || null,
};

export default following;
