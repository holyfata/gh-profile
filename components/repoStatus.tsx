import classNames from "classnames";

/**
 * RepoStatus component displays the repository's status (Public/Private)
 * with different styles based on whether the repo is archived.
 *
 * Props:
 * - status: 'Public' | 'Private' - The visibility status of the repository.
 * - isArchived: boolean - Indicates if the repository is archived.
 */
const RepoStatus: React.FC<{
  status: "Public" | "Private";
  isArchived: boolean;
}> = ({ status, isArchived }) => {
  // Dynamically set class names based on archived status
  const statusClass = classNames(
    "px-[6px] border border-solid rounded-full ml-2",
    isArchived
      ? "text-[#9A6700] border-gray-[#9A6700]"
      : "text-[#59636E] border-gray-300",
  );

  return <span className={statusClass}>{status}</span>;
};

export default RepoStatus;
