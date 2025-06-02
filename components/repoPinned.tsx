import repoPinned from "@/mocks/repoPinned.json";
import RepoCard from "@/components/repoCard";

/**
 * RepoPinned component displays a grid of pinned repositories.
 * Repository data is imported from a local mock JSON file.
 */
const RepoPinned: React.FC = () => (
  <div className="mt-4">
    <div className="pb-2">Pinned</div>
    <div className="grid grid-cols-2 gap-4">
      {repoPinned.repositories.map((repo, index) => (
        <RepoCard key={index} {...repo} />
      ))}
    </div>
  </div>
);

export default RepoPinned;
