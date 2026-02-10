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
        <div className="ml-auto flex items-center gap-4">
          <a
            href="https://x.com/ClawGiraffe"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-claw-border text-claw-text-dim hover:text-claw-text hover:border-claw-border-glow hover:bg-claw-red-glow transition-all duration-200"
            aria-label="Follow on X"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span className="text-[10px] font-mono tracking-wider uppercase">follow</span>
          </a>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-claw-green opacity-70" />
            <span className="text-[10px] font-mono text-claw-text-dim tracking-wider uppercase">
              online
            </span>
          </div>
        </div>
      </div>
      <div className="line-glow mt-4" />
    </header>
  );
}
