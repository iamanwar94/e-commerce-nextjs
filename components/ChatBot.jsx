import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../chatBot/config";
import MessageParser from "../chatBot/MessageParser";
import ActionProvider from "../chatBot/ActionProvider";

const ChatBot = () => {
  return (
    <div
      style={{
        // border: "1px solid grey",
        width: "fit-content",
        margin: "auto",
        marginTop: 20,
        borderRadius: 5,
        boxShadow: "0 0 2px grey",
      }}
    >
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatBot;
