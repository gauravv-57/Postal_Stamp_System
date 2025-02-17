// Page.jsx
import React, { useState } from 'react';
import MessageBox from './MessageBox';

const Page = () => {
  const [activeChannel, setActiveChannel] = useState('general');
  const channels = ['general', 'random', 'help', 'announcements'];

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-100 border-r border-gray-200 flex-shrink-0">
        <div className="p-4 text-xl font-bold text-blue-500 border-b border-gray-200">Channels</div>
        <ul className="space-y-2 p-4">
          {channels.map((channel) => (
            <li
              key={channel}
              className={`cursor-pointer p-2 rounded ${activeChannel === channel ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
              onClick={() => setActiveChannel(channel)}
            >
              {channel.charAt(0).toUpperCase() + channel.slice(1)}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b border-gray-200 bg-white">
          <h1 className="text-xl font-bold">{activeChannel.charAt(0).toUpperCase() + activeChannel.slice(1)} Channel</h1>
        </div>
        <MessageBox />
      </div>
    </div>
  );
};

export default Page;
