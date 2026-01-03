import { format } from "date-fns";

interface MessageBubbleProps {
  id: string;
  username: string;
  content: string;
  createdAt: string;
  isOwn: boolean;
}

const MessageBubble = ({ username, content, createdAt, isOwn }: MessageBubbleProps) => {
  const formattedTime = format(new Date(createdAt), "HH:mm");
  
  return (
    <div
      className={`flex flex-col gap-1 max-w-[80%] animate-message-in ${
        isOwn ? "self-end items-end" : "self-start items-start"
      }`}
    >
      {!isOwn && (
        <span className="text-xs font-medium text-muted-foreground ml-3">
          {username}
        </span>
      )}
      
      <div
        className={`px-4 py-2.5 shadow-message transition-shadow hover:shadow-message-hover ${
          isOwn 
            ? "message-bubble-own" 
            : "message-bubble-other"
        }`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
          {content}
        </p>
      </div>
      
      <span className={`text-[10px] text-muted-foreground ${isOwn ? "mr-2" : "ml-3"}`}>
        {formattedTime}
      </span>
    </div>
  );
};

export default MessageBubble;
