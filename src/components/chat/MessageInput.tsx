import { useState, FormEvent, KeyboardEvent } from "react";
import { Send, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MessageInputProps {
  onSendMessage: (content: string) => void;
  disabled?: boolean;
}

const MessageInput = ({ onSendMessage, disabled }: MessageInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex items-end gap-3 p-4 border-t border-border bg-card/80 backdrop-blur-sm"
    >
      <div className="flex-1 relative">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          disabled={disabled}
          rows={1}
          className="w-full px-4 py-3 pr-12 text-sm bg-secondary rounded-2xl border-0 resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ minHeight: "48px", maxHeight: "120px" }}
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
        >
          <Smile className="w-5 h-5" />
        </button>
      </div>
      
      <Button
        type="submit"
        size="icon"
        disabled={!message.trim() || disabled}
        className="h-12 w-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 disabled:opacity-50 disabled:shadow-none transition-all"
      >
        <Send className="w-5 h-5" />
      </Button>
    </form>
  );
};

export default MessageInput;
