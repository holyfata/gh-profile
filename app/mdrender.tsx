"use client";
import { MarkdownRender } from "@douyinfe/semi-ui";

const MarkdownRenderer = () => {
  return (
    <MarkdownRender
      raw={`
<div>
  <img href="https://wakatime.com/@holyfata" alt="WakaTime Badge" src="https://wakatime.com/badge/user/8a6aaaac-2685-4623-b4ff-27411dbe3a10.svg"></img>
</div>

### 👋 Hi there, I'm Holyfata.

- 🖥️ Full Stack Engineer
- 📦 Open Source Enthusiast
- 💼 Work All Day Long

###### Talk less, show me you <del>food</del> code 🤣.                
                
                `}
    ></MarkdownRender>
  );
};

export default MarkdownRenderer;
