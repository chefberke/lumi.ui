export const siteConfig = {
  name: "LumiUI - Next.js UI Component Library",
  url: "https://lumiui.dev",
  description:
    "LumiUI is a modern, TypeScript-powered UI Component Library for Next.js and React. Built with TailwindCSS, it offers high-performance, accessible, and customizable components for seamless UI development.",
  author: "Lumi.Work",
  links: {
    twitter: "https://x.com/works_lumi",
    github: "https://github.com/lumi-work",
  },
  docs: [
    {
      title: "Getting Started",
      path: "/docs/getting-started",
      new: false,
    },
    {
      title: "Installation",
      path: "/docs/installation",
      new: false,
    },
    {
      title: "Theming",
      path: "/docs/theming",
      new: true,
    },
  ],
  components: [
    {
      title: "Button",
      path: "/components/button",
      new: false,
    },
    {
      title: "Card",
      path: "/components/card",
      new: false,
    },
    {
      title: "Modal",
      path: "/components/modal",
      new: true,
    },
  ],
};

export type SiteConfig = typeof siteConfig;
