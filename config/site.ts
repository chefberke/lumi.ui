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
      title: "Introduction",
      path: "/docs",
      new: false,
    },
    {
      title: "Installation",
      path: "/docs/installation",
      new: false,
    },
    {
      title: "Usage Guide",
      path: "/docs/usage-guide",
      new: false
    }
  ],
  components: [
    {
      title: "Confetti",
      path: "/components/confetti-button",
      new: true,
    },
  ],
};

export type SiteConfig = typeof siteConfig;
