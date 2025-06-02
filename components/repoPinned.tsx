import { fetchApi } from "@/lib/fetch";
import RepoCard from "@/components/repoCard";

/**
 * RepoPinned component displays a grid of pinned repositories.
 * Repository data is imported from a local mock JSON file.
 */
const RepoPinned: React.FC = async () => {
  const data: Array<{
    author: string;
    name: string;
    description: string;
    language: string;
    languageColor: string;
    stars: number;
    forks: number;
  }> = await fetchApi("/repo/pinned");
  const repositories: Array<{
    name: string;
    description: string;
    topProgrammingLanguage: {
      name: string;
      color: string;
    };
  }> = data.map((item) => {
    return {
      name: item.name,
      description: item.description,
      topProgrammingLanguage: {
        name: item.language,
        color: item.languageColor,
      },
    };
  });

  return (
    <div className="mt-4">
      <div className="pb-2">Pinned</div>
      <div className="grid grid-cols-2 gap-4">
        {repositories.map((repo, index) => (
          <RepoCard key={index} {...repo} />
        ))}
      </div>
    </div>
  );
};

export default RepoPinned;
