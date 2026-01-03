import { MessageCircle, Users } from "lucide-react";

interface ChatHeaderProps {
  onlineCount: number;
  username: string;
}

const ChatHeader = ({ onlineCount, username }: ChatHeaderProps) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-card/80 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
          <MessageCircle className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-foreground">Real-Time Chat</h1>
          <p className="text-sm text-muted-foreground">Connected as {username}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary">
        <div className="w-2 h-2 rounded-full bg-chat-online animate-pulse-soft" />
        <Users className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium text-secondary-foreground">{onlineCount}</span>
      </div>
    </header>
  );
};

export default ChatHeader;
