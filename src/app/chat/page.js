'use client';

import { UserProvider, useUser } from '@auth0/nextjs-auth0/client';
import axios from 'axios';
import { useState } from 'react';
import ChatArea from '../components/ChatArea';
import Header from '../components/Header';
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import MessageInput from '../components/MessageInput';
import Sidebar from '../components/Sidebar';
import Welcome from '../components/Welcome';

const api_url = "https://vercel-pexapi.vercel.app/";


export default function ChatPage() {
  const { user, error, isLoading: userLoading } = useUser();
  const [messages, setMessages] = useState([]);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [chatHistory, setChatHistory] = useState([]);
  const [bufferMemory, setBufferMemory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (userInput) => {
    if (!userInput.trim()) return;

    const updatedChatHistory = [
      ...chatHistory,
      { role: "user", content: userInput },
    ];
    setChatHistory(updatedChatHistory);
    
    try {
      setIsLoading(true);
      const response = await axios.post(
        api_url + "chat",
        {
          chat_history: updatedChatHistory,
          buffer_memory: bufferMemory,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      setBufferMemory(data.buffer_memory);
      const botReply = data["bot_reply"];
      updatedChatHistory.push({ role: "assistant", content: botReply });
      setChatHistory(updatedChatHistory);

      const filteredMessages = updatedChatHistory.filter(
        (message) => message.role === "user" || message.role === "assistant"
      );

      setMessages(
        filteredMessages.map((message) => ({
          text: message.content,
          isUser: message.role === "user",
        }))
      );

      if (filteredMessages.length === 1) {
        const date = new Date().toLocaleDateString();
        const title = userInput.length > 3 ? userInput.slice(0, 3) : userInput;
        setChatHistory(prev => [...prev, { title, date }]);
      }

      setIsLoading(false);
      animateBotReply(botReply);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      setIsLoading(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  const handlePromptClick = (prompt) => {
    sendMessage(prompt);
  };

  const handleSendMessage = (message) => {
    if (message) {
      sendMessage(message);
    }
  };

  const MainComponent = () => {
    return (
      <div className="auth-buttons">
        {user ? <LogoutButton /> : <LoginButton />}
      </div>
    );
  };
  

  if (userLoading) return <div>Loading...</div>;
  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Please log in to access the chat.</p>
        <LoginButton />
      </div>
    );
  }



  return (
    <div className="flex h-screen">
      <Sidebar
        isExpanded={sidebarExpanded}
        toggleSidebar={toggleSidebar}
        chatHistory={chatHistory}
      />

      <div className={`flex flex-col flex-1 bg-white transition-all duration-300 ${sidebarExpanded ? 'ml-16' : 'ml-2'}`}>
        <MainComponent />
        
        <Header sidebarExpanded={sidebarExpanded} />

        <div className="flex-grow">
          {messages.length === 0 ? (
            <Welcome onPromptClick={handlePromptClick} />
          ) : (
            <ChatArea messages={messages} />
          )}
        </div>

        <MessageInput onSendMessage={handleSendMessage} sidebarExpanded={sidebarExpanded} isLoading={isLoading} />
      </div>
    </div>
  );
}
