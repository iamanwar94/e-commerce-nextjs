// import { createChatBotMessage } from "react-chatbot-kit";

// const config = {
//   initialMessages: [
//     createChatBotMessage(`Hello Sir/Madam, How may i help you?`),
//   ],
// };

// export default config;

import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "../components/LearningOptions";

const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to know?", {
      widget: "learningOptions",
    }),
  ],
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
};

export default config;
