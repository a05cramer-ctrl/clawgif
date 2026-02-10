"use client";

import type { Mode } from "@/app/page";

interface ModeToggleProps {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
}

const modes: { value: Mode; label: string; hotkey: string }[] = [
  { value: "short", label: "Short Neck", hotkey: "1" },
  { value: "long", label: "Long Neck", hotkey: "2" },
  { value: "degen", label: "Degenerate", hotkey: "3" },
];

export function ModeToggle({ mode, onModeChange }: ModeToggleProps) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-[9px] font-mono text-claw-text-dim mr-2 tracking-wider uppercase">
        mode:
      </span>
      {modes.map((m) => (
        <button
          key={m.value}
          onClick={() => onModeChange(m.value)}
          className={`
            group relative px-3 py-1 rounded text-[11px] font-mono tracking-wide
            transition-all duration-200
            ${
              mode === m.value
                ? "bg-claw-surface-2 text-claw-red border border-claw-border-glow border-glow"
                : "text-claw-text-dim hover:text-claw-text-muted border border-transparent hover:border-claw-border"
            }
          `}
        >
          <span className="text-claw-text-dim opacity-40 mr-1 text-[9px]">{m.hotkey}.</span>
          {m.label}
        </button>
      ))}
    </div>
  );
}
