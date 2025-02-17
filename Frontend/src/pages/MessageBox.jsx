// MessageBox.jsx
import React, { useState, useEffect, useCallback } from 'react';
import './MessageBox.css'; // Tailwind CSS is already included globally

const mockService = {
  messages: [],
  subscribe(callback) {
    this.callback = callback;
  },
  sendMessage(message) {
    this.messages.push(message);
    if (this.callback) this.callback(this.messages);
  },
};

const EmojiPicker = React.memo(({ onSelect }) => {
  const emojis = ['😊', '😂', '❤️', '👍', '😢'];
  return (
    <div className="absolute bottom-16 left-0 bg-white border border-gray-300 rounded p-2 flex flex-wrap gap-2 z-10">
      {emojis.map((emoji, index) => (
        <span
          key={index}
          className="cursor-pointer text-xl"
          onClick={() => onSelect(emoji)}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
});

const MessageBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  useEffect(() => {
    mockService.subscribe((newMessages) => {
      setMessages(newMessages);
    });
  }, []);

  useEffect(() => {
    if (selectedFile) {
      setFilePreview(URL.createObjectURL(selectedFile));
      return () => URL.revokeObjectURL(filePreview); // Cleanup
    }
  }, [selectedFile]);

  const handleSendMessage = useCallback(() => {
    if (input.trim() || selectedFile) {
      const newMessage = {
        id: Date.now(), // Unique identifier
        text: input,
        timestamp: new Date(),
        file: selectedFile ? filePreview : null,
      };
      mockService.sendMessage(newMessage);
      setInput('');
      setSelectedFile(null);
      setFilePreview(null);
    }
  }, [input, selectedFile, filePreview]);

  const handleEmojiSelect = (emoji) => {
    setInput(prevInput => prevInput + emoji);
    setEmojiPickerVisible(false);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto p-4 bg-white border border-gray-200 rounded-t-md">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex items-start space-x-2 ${msg.file ? 'bg-gray-100' : ''} p-2 rounded`}>
              <div className="w-10 h-10 rounded-full bg-blue-500"></div>
              <div className="flex-1">
                {msg.text && <div className="bg-gray-200 p-2 rounded">{msg.text}</div>}
                {msg.file && <img src={msg.file} alt="attachment" className="mt-2 max-w-full rounded" />}
                <small className="text-gray-500 text-xs block text-right mt-1">{new Date(msg.timestamp).toLocaleTimeString()}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center border-t border-gray-200 p-2 bg-gray-100">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
          className="flex-1 border border-gray-300 rounded-full py-2 px-4 mr-2"
          placeholder="Type a message..."
        />
        <button onClick={() => setEmojiPickerVisible(!emojiPickerVisible)} className="bg-blue-500 text-white rounded-full p-2 mr-2">
          😊
        </button>
        {emojiPickerVisible && <EmojiPicker onSelect={handleEmojiSelect} />}
        <input
          type="file"
          accept="image/*,video/*"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          style={{ display: 'none' }}
          id="file-input"
        />
        <label htmlFor="file-input" className="bg-green-500 text-white rounded-full p-2 cursor-pointer">
          Upload
        </label>
        {selectedFile && <div className="ml-2 flex items-center">Preview: <img src={filePreview} alt="preview" className="w-24 h-24 rounded ml-2" /></div>}
        <button onClick={handleSendMessage} className="bg-blue-500 text-white rounded-full p-2 ml-2">
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageBox;
