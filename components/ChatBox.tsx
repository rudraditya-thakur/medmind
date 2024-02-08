"use client"
// components/ChatBox.tsx
import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import { fetchMessages } from '../utils/api';
import { gsap } from 'gsap';

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    // Fetch initial messages from the server
    fetchMessages().then((data) => setMessages(data));

    // GSAP animations for initial load
    gsap.from('.chat-box', { opacity: 0, duration: 1, delay: 0.5 });
    gsap.to('.chat-box',{opacity: 1, duration: 1, delay: 1})
  }, []);

  return (
    <div className="mt-20 w-[90%] h-[80%] lg:h-4/5 bg-white shadow-lg chat-box flex flex-col justify-between overflow-hidden">
      <MessageList messages={messages} />
      <ChatInput onSendMessage={(message) => setMessages([...messages, message])} />
    </div>
  );
};

export default ChatBox;
