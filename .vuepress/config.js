module.exports = {
  base: "/",
  title: "Directus 中文文档",
  description:
    "The All-New Directus 7. Future-Proof Headless CMS for Managing Custom Database Content.",
  ga: "UA-24637628-7",
  plugins: ["@vuepress/medium-zoom"],
  head: [
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    [
      "link",
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }
    ],
    [
      "link",
      { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      }
    ],
    ["meta", { name: "application-name", content: "Directus 中文文档" }],
    ["meta", { name: "theme-color", content: "#263238" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "Directus 中文文档" }],
    ["meta", { name: "msapplication-TileColor", content: "#263238" }],
    ["meta", { name: "msapplication-config", content: "/browserconfig.xml" }]
  ],
  themeConfig: {
    lastUpdated: "Last Updated",
    repo: "directus/docs",
    docsDir: "",
    editLinks: true,
    serviceWorker: true,
    hiddenLinks: ["/api/reference.html"],
    nav: [
      { text: "Website", link: "https://directus.io" },
      { text: "Cloud", link: "https://directus.cloud" },
      { text: "Demo", link: "https://directus.app" }
    ],
    sidebarDepth: 1,
    // 💎 🧠 📡 🤖 ✨ 💥 🔥 🌈 ⭐️ 🍄 🍹 🎱 🎨 🏆 🚨 🚀 💡 ⚙️ 🔮 🛠 🔑 🎁 🎈 🎀 ❤️ 💯
    sidebar: [
      {
        title: "🐰 开始使用",
        collapsable: false,
        children: [
          ["/getting-started/introduction", "简介"],
          ["/getting-started/installation", "安装"],
          ["/getting-started/concepts", "概念"],
          ["/getting-started/contributing", "贡献代码"],
          ["/getting-started/supporting-directus", "支持我们"],
          ["/getting-started/setup-checklist", "设置清单"]
        ]
      },
      {
        title: "📖 使用指南",
        collapsable: true,
        children: [
          "/guides/user-guide",
          "/guides/accountability",
          "/guides/auth",
          "/guides/cli",
          "/guides/collections",
          "/guides/database",
          "/guides/fields",
          "/guides/field-types",
          "/guides/interfaces",
          ["/guides/i18n", "国际化"],
          "/guides/permissions",
          "/guides/projects",
          "/guides/relationships",
          "/guides/roles",
          "/guides/settings",
          "/guides/sso",
          "/guides/status",
          ["/guides/style-guide", "样式指南"],
          "/guides/thumbnailer",
          "/guides/upgrading"
        ]
      },
      {
        title: "🚀 API 参考",
        collapsable: true,
        children: [["/api/reference", "查看"]]
      },
      {
        title: "⚡️ SDKs",
        collapsable: true,
        children: [["/sdk/js", "Javascript"]]
      },
      {
        title: "🦄 Extensions",
        collapsable: true,
        children: [
          ["/extensions/", "简介"],
          "/extensions/auth-providers",
          "/extensions/custom-endpoints",
          "/extensions/hooks",
          "/extensions/interfaces",
          "/extensions/layouts",
          "/extensions/pages",
          "/extensions/storage-adapters"
        ]
      },
      {
        title: "🚧 高级功能",
        collapsable: true,
        children: [
          ['/advanced/app/standalone', '独立应用'],
          ['/advanced/api/standalone', '独立 API'],
          ['/advanced/other-install-methods', '其它安装方法'],
          ['/advanced/source', '本地开发环境'],
          ['/advanced/server-setup', '服务器设置'],
          ['/advanced/app/configuration', '配置应用程序'],
          ['/advanced/app/helpers', '应用程序助手函数'],
          ['/advanced/api/configuration', 'API 配置'],
          ['/advanced/api/codebase', 'API 代码库'],
          ['/advanced/api/data', '直连数据访问'],
          // ['/advanced/deploying-versions', 'Deploying Versions'],
        ]
      },
      {
        title: "💬 帮助 & 支持",
        collapsable: true,
        children: [
          ['/help/questions', '常见问题'],
          ['/help/troubleshooting', '疑难杂症'],
        ]
      }
    ]
  }
};
