import React from "react";

function TrustedBy() {
  return (
    <div className="flex items-center rounded-full border border-border bg-background p-1.5 shadow shadow-black/5">
      <div className="flex -space-x-1.5">
        <img
          className="rounded-full ring-1 ring-background"
          src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_3.png"
          width={25}
          height={25}
          alt="Avatar 01"
        />
        <img
          className="rounded-full ring-1 ring-background"
          src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_5.png"
          width={25}
          height={25}
          alt="Avatar 02"
        />
        <img
          className="rounded-full ring-1 ring-background"
          src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_17.png"
          width={25}
          height={25}
          alt="Avatar 03"
        />
        <img
          className="rounded-full ring-1 ring-background"
          src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_23.png"
          width={25}
          height={25}
          alt="Avatar 04"
        />
      </div>
      <p className="px-2 text-xs text-muted-foreground">
        Trusted by <strong className="font-medium text-foreground">1K+</strong>{" "}
        developers.
      </p>
    </div>
  );
}

export default TrustedBy;
