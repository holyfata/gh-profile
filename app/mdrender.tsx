"use client";
import { MarkdownRender } from "@douyinfe/semi-ui";

const MarkdownRenderer: React.FC<{
  content?: string;
}> = ({ content }) => {
  return <MarkdownRender raw={content}></MarkdownRender>;
};

export default MarkdownRenderer;
