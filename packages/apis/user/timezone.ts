import { ScrapeOptionType, type ScrapeOptions } from '@gh-profile/spider';

const timezone: ScrapeOptions = {
  name: 'timezone',
  type: ScrapeOptionType.Attr,
  selector: 'profile-timezone',
  attribute: 'data-hours-ahead-of-utc',
};

export default timezone;
