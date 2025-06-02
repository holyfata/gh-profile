import { IconUserStroked } from "@douyinfe/semi-icons";
import MarkdownRenderer from "./mdrender";
import GitHubCalendar from "react-github-calendar";
import fetchDataV1, { fetchDataV2 } from "@/lib/fetch";
import RepoCard from "@/components/repoCard";
import SocialLink from "@/components/socialLink";
import repoPinned from "@/mocks/repoPinned.json";
import socialLinks from "@/mocks/socialLinks.json";

export default async function Home() {
  const { avatarData, bioData, followerData, followingData, nameData } =
    await fetchDataV1();

  const readmeData = await fetchDataV2("readme");

  return (
    <div>
      <header className="h-18 border-b border-solid border-gray-300 rounded-md"></header>
      <main className="flex justify-center">
        <div className="-m-8 mr-6">
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
            {socialLinks.socialLinks.map((item, index) => (
              <SocialLink key={index} {...item} />
            ))}
          </ul>
        </div>
        <div className="w-224 ml-6">
          <div className="p-6 border border-solid border-gray-300 rounded-md mt-4">
            <MarkdownRenderer content={readmeData} />
          </div>
          <div className="mt-4">
            <div className="pb-2">Pinned</div>
            <div className="grid grid-cols-2 gap-4">
              {repoPinned.repositories.map((repo, index) => (
                <RepoCard key={index} {...repo} />
              ))}
            </div>
          </div>
          <div className="mt-4">
            <div className="pb-2">181 contributions in the last year</div>
            <div className="p-6 border border-solid border-gray-300 rounded-md mt-4">
              <GitHubCalendar username="holyfata" />
            </div>
          </div>
        </div>
      </main>
      <footer className="gh-footer"></footer>
    </div>
  );
}
