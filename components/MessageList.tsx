"use client"
import React, { useRef, useEffect } from 'react';
import MessageItem from './MessageItem';

interface MessageListProps {
  messages: string[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const messageListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the bottom of the message list whenever messages change
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div ref={messageListRef} className="h-[90%] p-4 overflow-y-auto">
      {messages.map((message, index) => (
        <MessageItem key={index} message={message} />
      ))}
    </div>
  );
};

export default MessageList;
