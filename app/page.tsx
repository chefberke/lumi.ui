import { CodeComparisonDemo } from "@/components/code-comparison";
import TrustedBy from "@/components/ui/trusted-by";

export default async function Home() {
  return (
    <div className="flex flex-col gap-10 container justify-center items-center bg-background px-4 md:px-10 lg:px-20">
      <div className="absolute inset-0 -z-1 h-full w-full mx-auto bg-[linear-gradient(to_right,#1F1F1F_1px,transparent_1px),linear-gradient(to_bottom,#1F1F1F_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <section className="w-full h-full max-w-full container px-4 py-16 sm:py-20 md:py-24 flex flex-col items-center justify-center text-center">
          <div className="flex flex-col justify-center space-y-4 text-center z-10 w-full max-w-5xl">
            <div className="space-y-2">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  LumiUI{" "}
                </span>
                A Modern UI <br className="hidden md:inline" /> Library for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Next.js
                </span>
              </span>
              <p className="w-full px-4 sm:px-6 md:px-10 text-base sm:text-lg md:text-xl lg:text-lg xl:text-lg text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/40">
                Built with TypeScript and TailwindCSS, it offers beautifully
                crafted, <br className="hidden sm:inline" /> accessible
                components to speed up your development workflow.
              </p>
            </div>
            <div className="flex justify-center items-center pb-6 pt-2">
              <TrustedBy />
            </div>
            <div className="text-start w-full px-2 sm:px-4 md:px-6">
              <CodeComparisonDemo />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
