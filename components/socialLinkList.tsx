import SocialLink from "@/components/socialLink";
import socialLinks from "@/mocks/socialLinks.json";

/**
 * SocialLinkList component renders a list of social links using the SocialLink component.
 * Social link data is imported from a local mock JSON file.
 */
const SocialLinkList: React.FC = () => (
  <ul className="flex flex-col gap-1">
    {socialLinks.socialLinks.map((item, index) => (
      <SocialLink key={item.icon + item.text || index} {...item} />
    ))}
  </ul>
);

export default SocialLinkList;
