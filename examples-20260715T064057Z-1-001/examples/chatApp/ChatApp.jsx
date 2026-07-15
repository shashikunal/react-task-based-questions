import React, { useState, useEffect, useRef } from "react";
import "./chatApp.css";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatBoxRef = useRef(null);

  // Scroll to the latest message
  useEffect(() => {
    chatBoxRef.current?.scrollTo({
      top: chatBoxRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const simulateReply = () => {
    setTimeout(() => {
      const reply = {
        sender: "Bot",
        content: "Thanks for your message! 😊",
        id: Date.now(),
      };
      setMessages(prev => [...prev, reply]);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const newMessage = {
      sender: "You",
      content: input,
      id: Date.now(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInput("");
    simulateReply();
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") handleSendMessage();
  };

  return (
    <div className="chat-app">
      <div className="chat-header">
        <h2>Chat Simulator</h2>
      </div>

      <div className="chat-box" ref={chatBoxRef}>
        {messages.map(message => (
          <div
            key={message.id}
            className={`chat-message ${
              message.sender === "You" ? "sent" : "received"
            }`}
          >
            <span className="sender">{message.sender}</span>
            <p className="content">{message.content}</p>
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatApp;
