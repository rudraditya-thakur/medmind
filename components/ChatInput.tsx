// components/ChatInput.tsx
import React, { useState } from 'react';
import { sendMessage } from '../utils/api';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      // Send message to server
      sendMessage(message);
      // Callback to update message list
      onSendMessage(message);
      // Clear input field
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex items-center justify-between p-4 absolute bottom-0 left-0 w-full">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Ask MedMind"
        className="flex-1 p-2 mr-4 border border-gray-300 rounded"
      />
      <button onClick={handleSendMessage} className="px-4 py-2 bg-gradient-to-br from-[#569199] to-[#a4dad2] text-white rounded">Send</button>
    </div>
  );
};

export default ChatInput;
