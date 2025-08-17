import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";

const Chat = () => {
  const { targetUserId } = useParams();
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState([]);
  const user = useSelector((store) => store.user);
  const connection = useSelector((store) => store.connection);

  const toUser = connection?.find((user) => user._id === targetUserId);
  const userId = user?._id;

  if (!toUser) {
    return (
      <div className="flex justify-center mt-20">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  // store socket in a ref so it persists
  const socketRef = useRef(null);

  useEffect(() => {
    if (!userId) return;

    const socket = createSocketConnection();
    socketRef.current = socket;

    socket.emit("joinChat", { userId, targetUserId });

    socket.on("messageReceived", ({ firstName, text }) => {
      setMessages((prev) => [...prev, { firstName, text }]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId, targetUserId]);

  const sendMessage = () => {
    if (!messageText.trim()) return;

    if (socketRef.current) {
      socketRef.current.emit("sendMessage", {
        firstName: user.firstName,
        userId,
        targetUserId,
        text: messageText,
      });
    }

    setMessageText("");
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title">{toUser?.firstName}</h2>

          <div className="max-h-64 overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat ${
                  msg.firstName === user.firstName ? "chat-end" : "chat-start"
                }`}
              >
                <div className="chat-bubble">{msg.text}</div>
                <div className="chat-footer opacity-50">{msg.firstName}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-between gap-2 mt-2">
            <input
              type="text"
              placeholder="Message"
              className="input input-md w-full"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            />
            <button className="btn btn-secondary w-24" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
