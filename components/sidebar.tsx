"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

export const Sidebar = () => {
  const pathname = usePathname();

  siteConfig.components.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <aside className="sticky top-[49px] gap-10 py-10 z-50 h-[calc(100dvh-98px)] w-full hidden md:block overflow-y-auto pr-5">
      <div className="flex flex-col gap-10 h-full w-full">
        <div className="flex flex-col items-start">
          <span className="scroll-m-20 text-[16px] font-semibold tracking-tight">
            Getting Started
          </span>
          {siteConfig.docs.map((doc) => (
            <Link key={doc.path} href={doc.path} className="flex items-center ">
              <Button
                variant="link"
                size="lg"
                className={cn(
                  "hover:no-underline text-muted-foreground hover:text-foreground px-0",
                  pathname === `${doc.path}` && "text-gray-400"
                )}
              >
                {doc.title}
              </Button>
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-start">
          <span className="scroll-m-20 text-[16px] font-semibold tracking-tight">
            Components
          </span>
          {siteConfig.components.map((component) => (
            <Link
              key={component.path}
              href={component.path}
              className="flex w-full justify-between items-center gap-1"
            >
              <Button
                variant="link"
                size="lg"
                className={cn(
                  "flex hover:no-underline text-muted-foreground hover:text-foreground p-0 text-left whitespace-normal",
                  pathname === `${component.path}` && "text-gray-400"
                )}
              >
                {component.title}
              </Button>
              {component.new && (
                <Badge variant="outline" className="border-purple-500">
                  New
                </Badge>
              )}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};
