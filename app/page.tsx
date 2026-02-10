"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Header } from "@/components/Header";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { ModeToggle } from "@/components/ModeToggle";
import { StatusIndicator } from "@/components/StatusIndicator";

export type Mode = "short" | "long" | "degen";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content: "Neck extended. Context window open. Systems nominal.",
  timestamp: Date.now(),
};

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [mode, setMode] = useState<Mode>("short");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const detectSpecialInput = (text: string): boolean => {
    const patterns = [
      /^[1-9A-HJ-NP-Za-km-z]{32,44}$/,
      /^0x[a-fA-F0-9]{40}$/,
      /^https?:\/\//,
      /\b(swap|bridge|stake|mint|airdrop)\b/i,
    ];
    return patterns.some((p) => p.test(text.trim()));
  };

  const handleSend = async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: content.trim(),
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    if (detectSpecialInput(content)) {
      setStatus("claw.reach()");
      await delay(800);
      setStatus("neck.extend()");
      await delay(1000);
      setStatus("ctx.absorb()");
      await delay(600);
    } else {
      setStatus("neck.extend()");
      await delay(600);
    }

    setStatus(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: content.trim(), mode }),
      });

      const data = await response.json();

      const aiMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.response,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      const errorMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: "err: neck.retracted — connection dropped.",
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto grid-bg relative">
      {/* Left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-claw-border opacity-50" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-claw-border opacity-50" />

      <Header />

      <div className="flex items-center justify-between px-6 py-3">
        <ModeToggle mode={mode} onModeChange={setMode} />
        <StatusIndicator status={status} isLoading={isLoading} />
      </div>

      <main className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="space-y-2 pt-2">
          {messages.map((msg, i) => (
            <ChatMessage
              key={msg.id}
              message={msg}
              isLatest={i === messages.length - 1}
            />
          ))}

          {isLoading && !status && (
            <div className="flex items-center gap-2 px-5 py-4 animate-fade-in">
              <span className="text-[10px] font-mono text-claw-cyan-dim mr-1">{">"}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-claw-cyan typing-dot-1" />
              <span className="w-1.5 h-1.5 rounded-full bg-claw-cyan typing-dot-2" />
              <span className="w-1.5 h-1.5 rounded-full bg-claw-cyan typing-dot-3" />
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </main>

      <ChatInput onSend={handleSend} isLoading={isLoading} />
    </div>
  );
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
