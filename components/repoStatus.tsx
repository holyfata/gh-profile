import classNames from "classnames";

/**
 * RepoStatusProps interface defines the props for the RepoStatus component.
 *
 * @property status - The visibility status of the repository. "Public" means visible to everyone, "Private" means restricted access.
 * @property isArchived - Indicates if the repository is archived. true means the repository is read-only and cannot be modified.
 */
interface RepoStatusProps {
  status: "Public" | "Private"; // Repository visibility
  isArchived: boolean; // Whether the repository is archived
}

/**
 * RepoStatus component displays the repository's status (Public/Private)
 * with different styles based on whether the repo is archived.
 *
 * @param status - The visibility status of the repository.
 * @param isArchived - Indicates if the repository is archived.
 */
const RepoStatus: React.FC<RepoStatusProps> = ({ status, isArchived }) => {
  // Set class names dynamically based on archived status
  const statusClass = classNames(
    "px-[6px] border border-solid rounded-full ml-2",
    isArchived
      ? "text-[#9A6700] border-gray-[#9A6700]" // Style for archived repos
      : "text-[#59636E] border-gray-300", // Style for active repos
  );

  return <span className={statusClass}>{status}</span>;
};

export default RepoStatus;
