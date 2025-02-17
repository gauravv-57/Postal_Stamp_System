import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import "./ChatApp.css";

const EmojiPicker = React.memo(({ onSelect }) => {
  const emojis = ["😊", "😂", "❤️", "👍", "😢"];
  return (
    <div className="emoji-picker">
      {emojis.map((emoji, index) => (
        <span key={index} className="emoji" onClick={() => onSelect(emoji)}>
          {emoji}
        </span>
      ))}
    </div>
  );
});

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/api/messages", {
        headers: { "x-auth-token": token },
      });
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    fetchMessages();
    // Poll for new messages every 3 seconds
    const interval = setInterval(fetchMessages, 3000);

    return () => clearInterval(interval);
  }, [user, navigate]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((!input.trim() && !selectedFile) || !user) return;

    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      let fileUrl = null;
      if (selectedFile) {
        // In a real app, you would upload the file to a storage service
        // For now, we'll use the preview URL
        fileUrl = filePreview;
      }

      const response = await axios.post(
        "http://localhost:5000/api/messages",
        {
          text: input.trim() || "",
          file: fileUrl,
        },
        {
          headers: { "x-auth-token": token },
        }
      );

      setMessages((prevMessages) => [...prevMessages, response.data]);
      setInput("");
      setSelectedFile(null);
      setFilePreview(null);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  const handleEmojiSelect = (emoji) => {
    setInput((prev) => prev + emoji);
    setEmojiPickerVisible(false);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        <div className="messages">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className={`message ${msg.file ? "media-message" : ""} ${
                msg.userId === user._id ? "own-message" : ""
              }`}
            >
              <img
                src={msg.userPhoto || "https://via.placeholder.com/40"}
                alt="avatar"
                className="avatar"
              />
              <div className="message-content">
                <div className="message-author">{msg.userName}</div>
                {msg.text && <div className="message-text">{msg.text}</div>}
                {msg.file && (
                  <img
                    src={msg.file}
                    alt="attachment"
                    className="message-media"
                  />
                )}
              </div>
              <small className="message-timestamp">
                {new Date(msg.timestamp).toLocaleTimeString()}
              </small>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit(e);
              }
            }}
            placeholder="Type a message..."
          />
          <button onClick={() => setEmojiPickerVisible(!emojiPickerVisible)}>
            😊
          </button>
          {emojiPickerVisible && <EmojiPicker onSelect={handleEmojiSelect} />}
          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleFileSelect}
            style={{ display: "none" }}
            id="file-input"
          />
          <label htmlFor="file-input" className="file-upload-button">
            Upload
          </label>
          {selectedFile && (
            <div className="file-preview">
              Preview:{" "}
              <img
                src={filePreview}
                alt="preview"
                className="file-preview-img"
              />
            </div>
          )}
          <button onClick={handleSubmit}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
