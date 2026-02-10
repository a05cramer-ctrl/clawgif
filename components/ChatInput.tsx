"use client";

import { useState, useRef, useEffect } from "react";

interface ChatInputProps {
  onSend: (content: string) => void;
  isLoading: boolean;
}

export function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        Math.min(textareaRef.current.scrollHeight, 160) + "px";
    }
  }, [value]);

  const handleSubmit = () => {
    if (!value.trim() || isLoading) return;
    onSend(value);
    setValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="bg-claw-bg px-4 py-4">
      <div className="line-glow mb-4" />
      <div className="flex items-end gap-3 bg-claw-surface rounded-lg border border-claw-border px-4 py-3 border-glow">
        <span className="text-claw-cyan opacity-40 text-sm font-mono pb-0.5 select-none">
          $
        </span>
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Drop it into the claw…"
          disabled={isLoading}
          rows={1}
          className="
            flex-1 bg-transparent text-sm text-claw-text font-mono
            placeholder:text-claw-text-dim
            resize-none outline-none
            disabled:opacity-30
            leading-relaxed
          "
        />
        <button
          onClick={handleSubmit}
          disabled={!value.trim() || isLoading}
          className="
            flex-shrink-0 px-3 py-1.5 rounded-md
            text-[10px] font-mono uppercase tracking-widest
            text-claw-text-dim border border-claw-border
            hover:text-claw-red hover:border-claw-red-dim hover:bg-claw-red-glow
            disabled:opacity-15 disabled:hover:text-claw-text-dim disabled:hover:border-claw-border disabled:hover:bg-transparent
            transition-all duration-200
          "
          aria-label="Send message"
        >
          exec
        </button>
      </div>
      <div className="flex items-center justify-between mt-2 px-1">
        <span className="text-[9px] font-mono text-claw-text-dim opacity-50">
          enter to send · shift+enter for newline
        </span>
        <span className="text-[9px] font-mono text-claw-text-dim opacity-50">
          {value.length > 0 ? `${value.length} chars` : "idle"}
        </span>
      </div>
    </div>
  );
}
