import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

interface Message {
  id: string;
  username: string;
  content: string;
  created_at: string;
}

interface MessageListProps {
  messages: Message[];
  currentUsername: string;
  isLoading?: boolean;
}

const MessageList = ({ messages, currentUsername, isLoading }: MessageListProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center chat-gradient">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="w-3 h-3 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "150ms" }} />
            <div className="w-3 h-3 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
          <p className="text-sm text-muted-foreground">Loading messages...</p>
        </div>
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center chat-gradient">
        <div className="text-center px-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-foreground mb-2">No messages yet</h3>
          <p className="text-sm text-muted-foreground max-w-xs">
            Be the first to start the conversation! Your message will appear here in real-time.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="flex-1 overflow-y-auto chat-gradient">
      <div className="flex flex-col gap-3 p-4 pb-2">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            id={message.id}
            username={message.username}
            content={message.content}
            createdAt={message.created_at}
            isOwn={message.username === currentUsername}
          />
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default MessageList;
