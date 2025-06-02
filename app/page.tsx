import Info from "@/components/info";
import MdRender from "@/components/mdRender";
import Calendar from "@/components/calendar";
import RepoPinned from "@/components/repoPinned";

export default async function Home() {
  return (
    <div>
      <header className="h-18 border-b border-solid border-gray-300 rounded-md"></header>
      <main className="flex justify-center">
        <Info />
        <div className="w-224 ml-6">
          <MdRender />
          <RepoPinned />
          <Calendar />
        </div>
      </main>
      <footer className="gh-footer"></footer>
    </div>
  );
}
