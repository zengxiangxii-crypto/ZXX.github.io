// config.js - 网站内容配置文件
const siteConfig = {
    // === 个人信息部分 ===
    profile: {
        name: "ALEX.DESIGN", // 你的名字/Logo
        title: "资深 UI/UX 设计师",
        bio: "我是一名追求极致简约的数字产品设计师。我相信好的设计是看不见的，它存在于每一次流畅的交互之中。",
        email: "alex@design.com",
        social: [
            { name: "Behance", url: "#" },
            { name: "Dribbble", url: "#" },
            { name: "Instagram", url: "#" }
        ]
    },

    // === 简历经历部分 ===
    resume: [
        {
            year: "2023 - 至今",
            role: "高级产品设计师",
            company: "字节跳动 (ByteDance)",
            desc: "负责飞书核心模块的体验重构，制定设计规范 (Design System)。"
        },
        {
            year: "2020 - 2023",
            role: "UI 设计师",
            company: "腾讯 (Tencent)",
            desc: "参与微信支付相关业务的运营活动设计与界面迭代。"
        },
        {
            year: "2016 - 2020",
            role: "工业设计学士",
            company: "清华美院",
            desc: "主修人机工程学与交互设计基础。"
        }
    ],

    // === 作品集部分 (无限添加) ===
    // 技巧：把你的图片放入 images 文件夹，然后在这里填写文件名
    works: [
        {
            title: "金融仪表盘设计",
            category: "UI Design",
            image: "images/曾祥熙简历-01-01.jpg, // 这里换成 "images/work1.jpg"
            description: "为一家金融科技公司设计的 B 端数据可视化后台，提升了数据阅读效率 40%。"
        },
        {
            title: "极简电商 APP",
            category: "Mobile App",
            image: "images/曾祥熙简历-01-01.jpg", // 这里换成 "images/work2.jpg"
            description: "专注于年轻潮流品牌的电商应用，采用了大胆的留白和排版。"
        },
        {
            title: "品牌视觉识别 VI",
            category: "Branding",
            image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80", 
            description: "某咖啡品牌的整体视觉升级，包括 Logo、包装及店面视觉。"
        },
        {
            title: "智能家居控制",
            category: "IoT Interface",
            image: "https://images.unsplash.com/photo-1558002038-10914cba6023?w=800&q=80",
            description: "iPad 端智能家居中控面板设计，强调夜间模式的舒适度。"
        }
    ]
};
