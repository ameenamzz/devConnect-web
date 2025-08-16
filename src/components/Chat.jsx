import React from "react";
import { useParams } from "react-router-dom";

const Chat = () => {
  //   const { targetUserId } = useParams();

  return (
    <div className="flex justify-center mt-20">
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                />
              </div>
            </div>
            <div className="chat-header">
              Obi-Wan Kenobi
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">You were the Chosen One!</div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                />
              </div>
            </div>
            <div className="chat-header">
              Anakin
              <time className="text-xs opacity-50">12:46</time>
            </div>
            <div className="chat-bubble">I hate you!</div>
            <div className="chat-footer opacity-50">Seen at 12:46</div>
          </div>
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="Message"
              className="input input-md"
            />
            <button className="btn btn-secondary w-24">Success</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
