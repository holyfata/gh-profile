import { ScrapeOptionType, type ScrapeOptions } from 'spider';

const avatar: ScrapeOptions = {
  name: 'avatar',
  type: ScrapeOptionType.Attr,
  selector: 'img.avatar.avatar-user',
  attribute: 'src',
};

export default avatar;
