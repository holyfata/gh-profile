"use client";
import { MarkdownRender } from "@douyinfe/semi-ui";

/**
 * Props for the MdRender component.
 * @property content - Optional markdown content to render.
 */
interface MdRenderProps {
  content?: string;
}

/**
 * MdRender component renders markdown content inside a styled container.
 *
 * @param content - Optional markdown content to render.
 */
const MdRender: React.FC<MdRenderProps> = ({ content = "" }) => (
  <div className="p-6 border border-solid border-gray-300 rounded-md mt-4">
    <MarkdownRender raw={content} />
  </div>
);

export default MdRender;
