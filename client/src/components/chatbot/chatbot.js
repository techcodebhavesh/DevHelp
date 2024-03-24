import Chatbot from 'react-chatbot-kit'; 
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';



const MyComponent = () => (
  <div>
    <Chatbot
      config={config}
      messageParser={MessageParser}
      actionProvider={ActionProvider}   
    />
  </div>
);
  export default MyComponent;