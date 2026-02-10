"use client";

import { GiraffeIcon } from "./GiraffeIcon";

export function Header() {
  return (
    <header className="px-6 pt-8 pb-2">
      <div className="flex items-center gap-4">
        <GiraffeIcon size={44} />
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-base font-medium tracking-tight text-claw-text font-mono glitch-hover">
              ClawGiraffe
            </h1>
            <span className="text-[10px] font-mono text-claw-cyan opacity-50 tracking-widest">
              v0.1
            </span>
          </div>
          <p className="text-[11px] text-claw-text-dim tracking-wider font-mono">
            Long-necked intelligence.
          </p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-claw-green opacity-70" />
          <span className="text-[10px] font-mono text-claw-text-dim tracking-wider uppercase">
            online
          </span>
        </div>
      </div>
      <div className="line-glow mt-4" />
    </header>
  );
}
