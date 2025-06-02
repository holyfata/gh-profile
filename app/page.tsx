import { fetchDataV2 } from "@/lib/fetch";
import MdRender from "@/components/mdRender";
import Calendar from "@/components/calendar";
import RepoPinned from "@/components/repoPinned";
import BaseInfo from "@/components/baseInfo";
import SocialLinkList from "@/components/socialLinkList";

export default async function Home() {
  const readmeData = await fetchDataV2("readme");

  return (
    <div>
      <header className="h-18 border-b border-solid border-gray-300 rounded-md"></header>
      <main className="flex justify-center">
        <div className="-m-8 mr-6">
          <BaseInfo />
          <SocialLinkList />
        </div>
        <div className="w-224 ml-6">
          <MdRender content={readmeData} />
          <RepoPinned />
          <Calendar />
        </div>
      </main>
      <footer className="gh-footer"></footer>
    </div>
  );
}
