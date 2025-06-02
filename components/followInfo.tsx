import { IconUserStroked } from "@douyinfe/semi-icons";

/**
 * Props for the FollowInfo component.
 * @property followerData - Number of followers.
 * @property followingData - Number of users being followed.
 */
interface FollowInfoProps {
  followerData: number;
  followingData: number;
}

/**
 * FollowInfo component displays follower and following counts with an icon.
 *
 * @param followerData - Number of followers.
 * @param followingData - Number of users being followed.
 */
const FollowInfo: React.FC<FollowInfoProps> = ({
  followerData,
  followingData,
}) => (
  <div className="flex text-sm text-gray-500 mb-4">
    <div className="flex items-center">
      <IconUserStroked />
      <span className="ml-1 text-black font-medium">{followerData}</span>
      <span className="ml-1">followers</span>
    </div>
    <span className="mx-2">·</span>
    <div className="flex items-center">
      <span className="text-black font-medium">{followingData}</span>
      <span className="ml-1">following</span>
    </div>
  </div>
);

export default FollowInfo;
