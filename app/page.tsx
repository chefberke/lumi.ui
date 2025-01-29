import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export default async function Home() {
  const getRepoStarts = async () => {
    const res = await fetch("https://api.github.com/repos/lumi-work/lumi.ui", {
      cache: "no-store",
    });
    const data = await res.json();
    return data.stargazers_count;
  };
  const stars = await getRepoStarts();
  return (
    <div className="flex flex-col gap-10 container justify-center items-center bg-background">
      <div className="absolute inset-0 -z-1 h-full w-full mx-auto bg-[linear-gradient(to_right,#1F1F1F_1px,transparent_1px),linear-gradient(to_bottom,#1F1F1F_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <section className="w-full h-full max-w-3xl container px-4 py-24 flex items-center justify-center">
          <div className="flex flex-col justify-center space-y-4 text-center z-10">
            <div className="space-y-2">
              <span className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  LumiUI{" "}
                </span>
                A Modern UI Library for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Next.js
                </span>
              </span>
              <p className="w-full px-10 md:text-xl lg:text-lg xl:text-xl text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/40">
                LumiUI is a lightweight and customizable UI component library
                designed for Next.js and React. Built with TypeScript and
                TailwindCSS, it offers beautifully crafted, accessible
                components to speed up your development workflow.
              </p>
            </div>

            <div className="flex gap-2 justify-center">
              <a
                href="https://github.com/lumi-work/lumi.ui"
                className="no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="flex items-center gap-2 group"
                >
                  <span className="transition-all duration-300 ease-in-out">
                    {stars || 0}
                  </span>
                  {stars === 1 ? "star" : "stars"} on GitHub <Icons.github />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
