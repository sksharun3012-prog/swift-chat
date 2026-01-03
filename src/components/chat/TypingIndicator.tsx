interface TypingIndicatorProps {
  username?: string;
}

const TypingIndicator = ({ username }: TypingIndicatorProps) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground animate-fade-in">
      <div className="typing-indicator flex gap-1">
        <span className="w-2 h-2 rounded-full bg-muted-foreground/50" />
        <span className="w-2 h-2 rounded-full bg-muted-foreground/50" />
        <span className="w-2 h-2 rounded-full bg-muted-foreground/50" />
      </div>
      {username && <span>{username} is typing...</span>}
    </div>
  );
};

export default TypingIndicator;
