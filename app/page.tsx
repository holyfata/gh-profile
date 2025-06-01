import {
  IconUserStroked,
  IconBriefStroked,
  IconMapPinStroked,
  IconStopwatchStroked,
  IconChainStroked,
} from "@douyinfe/semi-icons";
import fetchData from "@/lib/fetch";
import Image from "next/image";

export default async function Home() {
  const {
    avatarData,
    bioData,
    companyData,
    followerData,
    followingData,
    locationData,
    timezoneData,
    nameData,
    websiteData,
  } = await fetchData();

  const socialLinks = [
    {
      icon: <IconBriefStroked />,
      text: companyData,
    },
    {
      icon: <IconMapPinStroked />,
      text: locationData,
    },
    {
      icon: <IconStopwatchStroked />,
      text: timezoneData,
    },
    {
      icon: <IconChainStroked />,
      text: websiteData,
    },
  ];

  return (
    <div>
      <header className="gh-header"></header>
      <main className="gh-main flex justify-center">
        <div className="gh-sider">
          <img
            alt="avatar"
            src={
              avatarData ||
              "https://avatars.githubusercontent.com/u/156598583?v=4"
            }
            className="size-74 rounded-full"
          />
          <div className="pt-4 pb-4">
            <div className="text-2xl leading-[1.25] font-medium">
              {nameData}
            </div>
            <div className="text-xl text-gray-700 leading-6 font-light">
              holyfata
            </div>
          </div>
          <div className="flex justify-center items-center border border-solid bg-gray-100 border-gray-300 rounded-md text-sm leading-7.5 font-medium box-border mb-4">
            Follow
          </div>
          <div className="text-base mb-4">{bioData}</div>
          <div className="flex text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <IconUserStroked />
              &nbsp;
              <span className="text-black font-medium">{followerData}</span>
              &nbsp;followers
            </div>
            &nbsp;·&nbsp;
            <div>
              <span className="text-black font-medium">{followingData}</span>
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
              );
            })}
          </ul>
        </div>
        <div className="gh-content">HH</div>
      </main>
      <footer className="gh-footer"></footer>
    </div>
  );
}
