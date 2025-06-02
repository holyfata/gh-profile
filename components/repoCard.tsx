import { IconBookStroked } from "@douyinfe/semi-icons";
import RepoStatus from "./repoStatus";

/**
 * IRepoInfo interface defines the structure of repository information.
 *
 * Properties:
 * - name: string - The name of the repository.
 * - description: string - The description of the repository.
 * - status: {
 *     isPublic: boolean - Indicates if the repository is public.
 *     isArchived: boolean - Indicates if the repository is archived.
 *   }
 * - topProgrammingLanguage: {
 *     name: string - The main programming language name.
 *     color: string - The color associated with the main programming language.
 *   }
 */
interface IRepoInfo {
  name: string; // Repository name
  description: string; // Repository description
  status: {
    isPublic: boolean; // Whether the repository is public
    isArchived: boolean; // Whether the repository is archived
  };
  topProgrammingLanguage: {
    name: string; // Main programming language name
    color: string; // Main programming language color
  };
}

/**
 * RepoCard component displays a card with repository information.
 *
 * Props:
 * - name: string - The name of the repository.
 * - description: string - The description of the repository.
 * - status: { isPublic: boolean; isArchived: boolean } - The visibility and archive status.
 * - topProgrammingLanguage: { name: string; color: string } - Main language and its color.
 */
const RepoCard: React.FC<IRepoInfo> = ({
  name,
  description,
  status: { isPublic, isArchived },
  topProgrammingLanguage: { name: languageName, color },
}) => {
  return (
    <div className="p-4 border border-solid border-gray-300 rounded-md flex flex-col">
      {/* Header: Repo icon, name, and status */}
      <div className="text-sm font-medium shrink-0 flex flex-row items-center h-[21px] text-[#3178c6]">
        <IconBookStroked className="text-black mr-2 size-4" />
        {name}
        <RepoStatus
          status={isPublic ? "Public" : "Private"}
          isArchived={isArchived}
        />
      </div>
      {/* Description */}
      <div className="text-xs text-gray-500 grow leading-[1.5] mt-2">
        {description}
      </div>
      {/* Programming language indicator */}
      <div className="text-xs flex flex-row items-center shrink-0 mt-2 h-4.5">
        <span
          className="rounded-full size-3 mr-1"
          style={{ backgroundColor: color }}
        ></span>
        {languageName}
      </div>
    </div>
  );
};

export default RepoCard;
