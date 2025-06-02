import { IconBookStroked } from "@douyinfe/semi-icons";
import RepoStatus from "./repoStatus";

/**
 * RepoCardProps interface defines the props for the RepoCard component.
 *
 * @property name - The name of the repository.
 * @property description - The description of the repository.
 * @property status - An object containing visibility and archive status.
 * @property status.isPublic - Indicates if the repository is public.
 * @property status.isArchived - Indicates if the repository is archived.
 * @property topProgrammingLanguage - An object containing the main language info.
 * @property topProgrammingLanguage.name - The main programming language name.
 * @property topProgrammingLanguage.color - The color associated with the main language.
 */
interface RepoCardProps {
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
 * @param name - The name of the repository.
 * @param description - The description of the repository.
 * @param status - The visibility and archive status of the repository.
 * @param topProgrammingLanguage - The main programming language and its color.
 */
const RepoCard: React.FC<RepoCardProps> = ({
  name,
  description,
  status: { isPublic, isArchived },
  topProgrammingLanguage: { name: languageName, color },
}) => {
  return (
    <div className="p-4 border border-solid border-gray-300 rounded-md flex flex-col">
      {/* Header: Repository icon, name, and status */}
      <div className="text-sm font-medium shrink-0 flex flex-row items-center h-[21px] text-[#3178c6]">
        <IconBookStroked className="text-black mr-2 size-4" />
        {name}
        {/* Display repository status (Public/Private, Archived/Active) */}
        <RepoStatus
          status={isPublic ? "Public" : "Private"}
          isArchived={isArchived}
        />
      </div>
      {/* Repository description */}
      <div className="text-xs text-gray-500 grow leading-[1.5] mt-2">
        {description}
      </div>
      {/* Programming language indicator */}
      <div className="text-xs flex flex-row items-center shrink-0 mt-2 h-4.5">
        {/* Colored dot representing the main programming language */}
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
