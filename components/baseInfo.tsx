import baseInfo from "@/mocks/baseInfo.json";
import FollowMe from "@/components/followMe";
import FollowInfo from "@/components/followInfo";
import followInfo from "@/mocks/followInfo.json";

/**
 * BaseInfo component displays the user's avatar, name, username, bio,
 * a follow button, and follower/following information.
 */
const BaseInfo: React.FC = () => {
  const { avatarData, bioData, nameData } = baseInfo.baseInfo;

  return (
    <>
      <img
        alt="avatar"
        src={
          avatarData || "https://avatars.githubusercontent.com/u/156598583?v=4"
        }
        className="size-74 rounded-full"
      />
      <div className="pt-4 pb-4">
        <div className="text-2xl leading-[1.25] font-medium">{nameData}</div>
        <div className="text-xl text-gray-700 leading-6 font-light">
          holyfata
        </div>
      </div>
      <FollowMe />
      <div className="text-base mb-4">{bioData}</div>
      <FollowInfo {...followInfo.followInfo} />
    </>
  );
};

export default BaseInfo;
