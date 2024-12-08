import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useStore } from '../../store/useStore';
import type { Message } from '../../types';

interface Props {
  receiverId: string;
}

export function ChatWindow({ receiverId }: Props) {
  const [message, setMessage] = useState('');
  const { user, messages, addMessage } = useStore();
  
  const filteredMessages = messages.filter(
    (msg) => 
      (msg.senderId === user?.id && msg.receiverId === receiverId) ||
      (msg.senderId === receiverId && msg.receiverId === user?.id)
  );

  const handleSend = () => {
    if (!message.trim() || !user) return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: user.id,
      receiverId,
      content: message,
      timestamp: new Date(),
    };
    
    addMessage(newMessage);
    setMessage('');
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-md">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {filteredMessages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.senderId === user?.id ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-lg px-4 py-2 ${
                msg.senderId === user?.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <p>{msg.content}</p>
              <span className="text-xs opacity-75">
                {msg.timestamp.toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}