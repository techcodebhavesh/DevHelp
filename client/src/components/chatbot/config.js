// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'DevHelp';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName, // use shorthand here
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;