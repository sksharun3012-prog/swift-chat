import { useState, useEffect } from "react";
import UsernameDialog from "@/components/chat/UsernameDialog";
import ChatContainer from "@/components/chat/ChatContainer";

const Index = () => {
  const [username, setUsername] = useState<string | null>(null);

  // Check for stored username on mount
  useEffect(() => {
    const storedUsername = sessionStorage.getItem("chat-username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleSetUsername = (name: string) => {
    sessionStorage.setItem("chat-username", name);
    setUsername(name);
  };

  if (!username) {
    return <UsernameDialog onSubmit={handleSetUsername} />;
  }

  return <ChatContainer username={username} />;
};

export default Index;
