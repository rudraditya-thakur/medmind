// utils/api.ts

const BASE_URL = 'http://your-api-url';

export const sendMessage = async (message: string): Promise<void> => {
  // For trial purposes, we'll simulate sending the message and receiving a response
  console.log('Sending message:', message);
  console.log('Server response: Working Fine');
};

export const fetchMessages = async (): Promise<string[]> => {
  // For trial purposes, we'll return an empty array since we're not fetching messages from the server
  return [];
};
