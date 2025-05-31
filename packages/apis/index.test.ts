import { describe, it, expect } from 'bun:test';
import { get, APIs } from '.';

describe('APIs', () => {
  it('should fetch avatar', async () => {
    const value = await get(APIs.USER_AVATAR);
    expect(value).toEqual({
      avatar: 'https://avatars.githubusercontent.com/u/206218794?v=4',
    });
  });
  it('should fetch status', async () => {
    const value = await get(APIs.USER_STATUS);
    expect(value).toEqual({ status: 'Working from home' });
  });
  it('should fetch nickname', async () => {
    const value = await get(APIs.USER_NICKNAME);
    expect(value).toEqual({ nickname: 'HolyFata' });
  });
  it('should fetch biography', async () => {
    const value = await get(APIs.USER_BIOGRAPHY);
    expect(value).toEqual({ biography: 'Software Engineer @jdf2e' });
  });
  it('should fetch followers', async () => {
    const value = await get(APIs.USER_FOLLOWERS);
    expect(value).toEqual({ followers: '5' });
  });
  it('should fetch following', async () => {
    const value = await get(APIs.USER_FOLLOWING);
    expect(value).toEqual({ following: '68' });
  });
  it('should fetch company', async () => {
    const value = await get(APIs.USER_COMPANY);
    expect(value).toEqual({ company: 'JD.COM' });
  });
  it('should fetch location', async () => {
    const value = await get(APIs.USER_LOCATION);
    expect(value).toEqual({ location: 'China Beijing' });
  });
  it('should fetch timezone', async () => {
    const value = await get(APIs.USER_TIMEZONE);
    expect(value).toEqual({ timezone: '8.0' });
  });
  it('should fetch website', async () => {
    const value = await get(APIs.USER_WEBSITE);
    expect(value).toEqual({ website: 'holyfata.com' });
  });
});
