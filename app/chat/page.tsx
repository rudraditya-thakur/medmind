"use client"
import React, { useState, useEffect, useRef } from 'react';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Scroll to the bottom of the message list whenever messages change
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
        }
    }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 mt-16">
      <div className="flex-1 overflow-y-auto p-4">
        {/* Display messages */}
        {messages.map((message, index) => (
          <div key={index} className="p-2">
            <div className="bg-white p-2 rounded-lg shadow-md">
              <p className="text-gray-800">{message}</p>
            </div>
          </div>
        ))}
        {/* Empty div to trigger scroll to bottom */}
        <div ref={messagesEndRef}></div>
      </div>
      {/* Chat input area */}
      <div className="p-4 bg-white flex flex-row justify-between w-full fixed bottom-0 left-0">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Message MedMind"
          className="w-[84%] md:w-[89%] lg:w-[92%] p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-gradient-to-br from-[#569199] to-[#a4dad2] text-white rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
