import { ReactNode } from "react";
import {
  IconBriefStroked,
  IconMapPinStroked,
  IconStopwatchStroked,
  IconChainStroked,
  IconMailStroked,
} from "@douyinfe/semi-icons";

/**
 * Maps string keys to corresponding icon components.
 */
const iconMap: Record<string, ReactNode> = {
  company: <IconBriefStroked />,
  location: <IconMapPinStroked />,
  timezone: <IconStopwatchStroked />,
  email: <IconMailStroked />,
  blog: <IconChainStroked />,
};

/**
 * SocialLinkProps defines the props for the SocialLink component.
 *
 * @property icon - The icon name to display (one of company, location, timezone, website).
 * @property text - The text content to display.
 */
interface SocialLinkProps {
  icon: keyof typeof iconMap;
  text: string;
}

/**
 * SocialLink component renders a list item with an icon and text.
 *
 * @param icon - The icon name to display (one of company, location, timezone, website).
 * @param text - The text content to display.
 */
const SocialLink: React.FC<SocialLinkProps> = ({ icon, text }) => (
  <li className="flex items-center text-sm pt-1">
    {iconMap[icon]}
    <span className="mx-2" />
    {text}
  </li>
);

export default SocialLink;
