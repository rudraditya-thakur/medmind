// components/MessageItem.tsx
import React from 'react';

interface MessageItemProps {
  message: string;
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  return (
    <div className="mb-2">
      <div className="bg-gradient-to-br from-[#569199] to-[#a4dad2] p-2 rounded-md text-white">{message}</div>
    </div>
  );
};

export default MessageItem;
