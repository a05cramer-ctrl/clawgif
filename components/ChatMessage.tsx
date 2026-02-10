"use client";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

interface ChatMessageProps {
  message: Message;
  isLatest: boolean;
}

function formatTime(ts: number) {
  return new Date(ts).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export function ChatMessage({ message, isLatest }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={`group ${isLatest ? "animate-fade-in" : ""}`}>
      <div
        className={`
          relative px-5 py-4 rounded-lg
          ${isUser
            ? "bg-claw-user-bg border border-claw-border ml-16"
            : "bg-claw-ai-bg border border-transparent hover:border-claw-border-glow mr-8"
          }
        `}
      >
        {/* Role tag */}
        <div className="flex items-center gap-2 mb-2">
          {isUser ? (
            <span className="text-[10px] font-mono text-claw-text-dim tracking-widest uppercase">
              you
            </span>
          ) : (
            <>
              <span className="w-1 h-1 rounded-full bg-claw-red" />
              <span className="text-[10px] font-mono text-claw-red-dim tracking-widest uppercase">
                claw
              </span>
            </>
          )}
          <span className="text-[9px] font-mono text-claw-text-dim opacity-0 group-hover:opacity-100 transition-opacity ml-auto">
            {formatTime(message.timestamp)}
          </span>
        </div>

        {/* Content */}
        <p
          className={`
            text-sm leading-relaxed
            ${isUser
              ? "text-claw-text-muted"
              : "text-claw-text font-mono font-light"
            }
          `}
        >
          {!isUser && (
            <span className="text-claw-cyan opacity-40 mr-1.5">{">"}</span>
          )}
          {message.content}
          {!isUser && isLatest && (
            <span className="inline-block w-[6px] h-[14px] bg-claw-red ml-1 -mb-0.5 cursor-blink" />
          )}
        </p>
      </div>
    </div>
  );
}
