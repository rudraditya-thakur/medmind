"use client"
import React, { useState, useEffect, useRef } from 'react';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([
    "Welcome to MedMind Chat! How can I assist you today?",
    "Feel free to ask any questions related to healthcare or our services.",
  ]);
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
          <div key={index} className="p-2 flex justify-end">
            <div className="bg-white p-2 rounded-lg">
              <p className="text-gray-800 text-right w-[60%] justify-center">
                {message}
              </p>
            </div>
          </div>
        ))}
        {/* Empty div to trigger scroll to bottom */}
        <div ref={messagesEndRef}></div>
      </div>
      {/* Chat input area */}
      <div className="p-4 bg-white flex flex-row justify-center items-center w-full fixed bottom-0 left-0">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Message MedMind"
          className="w-80 md:w-4/5 lg:w-4/5 p-2 border border-gray-300 rounded"
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
