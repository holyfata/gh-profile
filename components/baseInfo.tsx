import FollowMe from "@/components/followMe";
import FollowInfo from "@/components/followInfo";

interface BaseInfoProps {
  data: {
    login: string;
    avatar_url: string;
    name: string;
    bio: string;
    followers: number;
    following: number;
  };
}

/**
 * BaseInfo component displays the user's avatar, name, username, bio,
 * a follow button, and follower/following information.
 */
const BaseInfo: React.FC<BaseInfoProps> = async ({ data }) => {
  const { login, avatar_url, name, bio, followers, following } = data;
  return (
    <>
      <img alt="avatar" src={avatar_url} className="size-74 rounded-full" />
      <div className="pt-4 pb-4">
        <div className="text-2xl leading-[1.25] font-medium">{name}</div>
        <div className="text-xl text-gray-700 leading-6 font-light">
          {login}
        </div>
      </div>
      <FollowMe />
      <div className="text-base mb-4">{bio}</div>
      <FollowInfo followerData={followers} followingData={following} />
    </>
  );
};

export default BaseInfo;
