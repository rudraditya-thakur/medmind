// import ChatBox from "@/components/ChatBox"

// export default function Chat () {
//     return (
//         <div className="flex items-center justify-center h-screen bg-gray-100">
//             <ChatBox />
//         </div>
//     )
// }

// pages/index.tsx

"use client"
import React, { useState } from 'react';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');

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
    <div className="flex flex-col h-[93vh] md:h-screen bg-gray-100">
      <div className="flex-1 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className="p-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-800">{message}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-white flex flex-row justify-between w-full">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Message MedMind"
          className="w-[80%] md:w-[89%] lg:w-[92%] p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-gradient-to-br from-[#569199] to-[#a4dad2] text-white rounded w-auto"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
