// 用户状态信息接口
export interface Status {
    icon: string; // 状态图标
    text: string; // 状态文本
}

// 通用链接接口
export interface Link {
    icon: string; // 链接图标
    url: string;  // 链接地址
    text: string; // 链接文本
}

// 仅包含图标和链接的接口
export interface Icon {
    icon: string; // 图标
    url: string;  // 链接地址
}

// 用户信息接口
export interface User {
    avatar: string; // 头像
    status: Status; // 状态
    nickname: string; // 昵称
    biography: string; // 个人简介
    follow: {
        followers: number; // 粉丝数
        following: number; // 关注数
    }
    info: {
        company: Link;   // 公司信息
        location: Link;  // 地理位置
        timezone: Link;  // 时区
        website: Link;   // 个人网站
    }
    social: Link[];        // 社交链接
    sponsoring: Icon[];    // 赞助信息
    achievements: Icon[];  // 成就信息
}

// 个人简介 README 接口
export interface Readme {
    title: string;    // 标题
    markdown: string; // markdown 内容
}

// 仓库信息接口
export interface Repository {
    name: string;                 // 仓库名
    description: string;          // 仓库描述
    programmingLanguage: string;  // 使用的编程语言
}

// 置顶仓库接口
export interface Pinned {
    repositories: Repository[]; // 置顶的仓库列表
}
