import { useState, FormEvent } from "react";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UsernameDialogProps {
  onSubmit: (username: string) => void;
}

const UsernameDialog = ({ onSubmit }: UsernameDialogProps) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onSubmit(username.trim());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-3xl shadow-card-elevated p-8 border border-border">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
              <User className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Welcome to Chat
            </h1>
            <p className="text-muted-foreground">
              Enter your name to join the conversation
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Your name"
                maxLength={20}
                className="w-full px-4 py-3 text-base bg-secondary rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground"
                autoFocus
              />
            </div>

            <Button
              type="submit"
              disabled={!username.trim()}
              className="w-full h-12 text-base font-medium rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 disabled:opacity-50 disabled:shadow-none transition-all"
            >
              Join Chat
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-6">
            Messages are shared in real-time with all participants
          </p>
        </div>
      </div>
    </div>
  );
};

export default UsernameDialog;
