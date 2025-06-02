import { fetchApi } from "@/lib/fetch";
import OctokitSingleton from "@/lib/octokit";

const MdRender: React.FC = async () => {
  const readme = await fetchApi("/repo/readme");

  const readmeData = readme.content
    ? Buffer.from(readme.content, "base64").toString("utf-8")
    : "";

  const htmlData = await OctokitSingleton.post<{ text: string }>("/markdown", {
    text: readmeData,
  });

  return (
    <div
      className="p-6 border border-solid border-gray-300 rounded-md mt-4"
      dangerouslySetInnerHTML={{ __html: htmlData }}
    />
  );
};

export default MdRender;
