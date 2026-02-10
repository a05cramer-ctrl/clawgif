"use client";

interface StatusIndicatorProps {
  status: string | null;
  isLoading: boolean;
}

export function StatusIndicator({ status, isLoading }: StatusIndicatorProps) {
  if (!status && !isLoading) return null;

  return (
    <div className="animate-fade-in flex items-center gap-2">
      {isLoading && (
        <span className="w-1 h-1 rounded-full bg-claw-cyan status-pulse" />
      )}
      <span className="text-[10px] font-mono text-claw-cyan-dim status-pulse tracking-wider">
        {status || "processing…"}
      </span>
    </div>
  );
}
