import { fetchApi } from "@/lib/fetch";
import BaseInfo from "@/components/baseInfo";
import SocialLinkList from "@/components/socialLinkList";

const SideInfo = async () => {
  const data = await fetchApi("/user");
  return (
    <div className="-m-8 mr-6">
      <BaseInfo data={data} />
      <SocialLinkList data={data} />
    </div>
  );
};

export default SideInfo;
