import SocialLink from "@/components/socialLink";

interface SocialLinkProps {
  data: {
    company: string;
    location: string;
    email: string;
    blog: string;
  };
}

/**
 * SocialLinkList component renders a list of social links using the SocialLink component.
 * Social link data is imported from a local mock JSON file.
 */
const SocialLinkList: React.FC<SocialLinkProps> = ({ data }) => {
  const { company, location, email, blog } = data;

  const socialLinks = [
    {
      icon: "company",
      text: company,
    },
    {
      icon: "location",
      text: location,
    },
    {
      icon: "email",
      text: email,
    },
    {
      icon: "blog",
      text: blog,
    },
  ];

  return (
    <ul className="flex flex-col gap-1">
      {socialLinks.map((item, index) => {
        const isEmpty =
          !item.text || item.text === "null" || item.text === "undefined";
        if (isEmpty) return null; // Skip rendering if the text is empty or null
        // Render the SocialLink component for each item
        return <SocialLink key={item.icon + item.text || index} {...item} />;
      })}
    </ul>
  );
};

export default SocialLinkList;
