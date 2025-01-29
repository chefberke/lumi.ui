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
      <section className="w-full h-full max-w-3xl container px-4 py-24">
        <div className="flex flex-col justify-center space-y-4 text-center">
          <div className="space-y-2">
            <span className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                LumiUI{" "}
              </span>
              Library Docs with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                TailwindCSS
              </span>
            </span>
            <p className="w-full px-10 md:text-xl lg:text-lg xl:text-xl text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
              LumiUI is a modern and flexible UI library built with TypeScript
              and TailwindCSS. It provides a wide range of ready-to-use
              components for building clean
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
                <span className="group-hover:text-purple-500 transition-all duration-300 ease-in-out">
                  {stars}
                </span>
                {stars === 1 ? "star" : "stars"} on GitHub <Icons.github />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
