import { headers } from 'next/headers';
import { IconUserStroked, IconBriefStroked, IconMapPinStroked, IconStopwatchStroked, IconChainStroked } from '@douyinfe/semi-icons';

export default async function Home() {

  const host = (await headers()).get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const apiUrl = `${protocol}://${host}/api/v1`;

  // 获取接口数据
  const avatarData = await (
    await fetch(`${apiUrl}/user/avatar`, { cache: 'no-store' })
  ).json();

  const socialLinks = [{
    icon: <IconBriefStroked />,
    text: "JD.COM"
  }, {
    icon: <IconMapPinStroked />,
    text: "China Beijing"
  }, {
    icon: <IconStopwatchStroked />,
    text: "18:40"
  }, {
    icon: <IconChainStroked />,
    text: "holyfata.com"
  }]

  return (
    <div>
      <header className="gh-header"></header>
      <main className="gh-main flex justify-center">
        <div className="gh-sider">
          <img 
            alt="avatar" 
            src={avatarData || "https://avatars.githubusercontent.com/u/156598583?v=4"} 
            className="size-74 rounded-full"
          />
          <div className="pt-4 pb-4">
            <div className="text-2xl leading-[1.25] font-medium">HolyFata</div>
            <div className="text-xl text-gray-700 leading-6 font-light">holyfata</div>
          </div>
          <div className="flex justify-center items-center border border-solid bg-gray-100 border-gray-300 rounded-md text-sm leading-7.5 font-medium box-border mb-4">
            Follow
          </div>
          <div className="text-base mb-4">
            Software Engineer @jdf2e
          </div>
          <div className="flex text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <IconUserStroked />
              &nbsp;
              <span className="text-black font-medium">5</span>
              &nbsp;followers
            </div>
            &nbsp;·&nbsp;
            <div>
              <span className="text-black font-medium">68</span>
              &nbsp;following
            </div>
          </div>
          <ul className="flex flex-col gap-1">
            {socialLinks.map((item, index) => {
              return (
                <li key={index} className="flex items-center text-sm pt-1">
                  {item.icon}
                  &nbsp;&nbsp;
                  {item.text}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="gh-content">HH</div>
      </main>
      <footer className="gh-footer"></footer>
    </div>
  );
}
