/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { MobileNav } from "./mobile-nav";
import { Badge } from "./ui/badge";
import { useEffect, useState } from "react";

export function Header() {
  const pathname = usePathname();

  const newComponent =
    siteConfig.components.length > 0
      ? siteConfig.components[0]
      : siteConfig.docs[0];

  const getRepoStars = async () => {
    const res = await fetch("https://api.github.com/repos/lumi-work/lumi.ui", {
      cache: "no-store",
    });
    const data = await res.json();
    return data.stargazers_count;
  };

  const [stars, setStars] = useState(0);

  useEffect(() => {
    const fetchRepoStars = async () => {
      const starsCount = await getRepoStars();
      setStars(starsCount);
    };

    fetchRepoStars();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="max-md:px-4 md:container h-16 flex justify-center items-center">
        <MobileNav />
        <nav className="max-md:hidden flex gap-10 w-full items-center">
          <Link href="/" className="flex gap-3 items-center">
            <h1 className="text-lg font-medium tracking-tighter flex gap-1 items-center">
              LumiUI
            </h1>
            <Badge variant="outline" className="text-normal border-purple-500">
              Beta v0.0.1
            </Badge>
          </Link>
          <div className="flex gap-4 items-center">
            <Link href="/docs">
              <Button
                variant="link"
                size="sm"
                className={cn(
                  "hover:no-underline text-muted-foreground hover:text-foreground",
                  pathname.includes("docs") && "text-foreground"
                )}
              >
                <span className="font-semibold text-[14px]">Docs</span>
              </Button>
            </Link>
            <Link href={newComponent.path}>
              <Button
                variant="link"
                size="sm"
                className={cn(
                  "hover:no-underline text-muted-foreground hover:text-foreground",
                  pathname.includes("components") && "text-foreground"
                )}
              >
                <span className="font-semibold text-[14px]">Components</span>
              </Button>
            </Link>
          </div>
        </nav>
        <div className="flex gap-3 items-center justify-end">
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Follow on Twitter"
          >
            <Button
              variant="ghost"
              size="sm"
              className="flex gap-3 items-center max-md:h-9 max-md:w-9 max-md:px-0"
              aria-label="Follow on Twitter"
            >
              <Icons.twitter />
            </Button>
          </Link>
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
      </div>
    </header>
  );
}
