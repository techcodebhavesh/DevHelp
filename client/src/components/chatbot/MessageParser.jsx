import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.length > 0) { // Handle any user message
      actions.handleUserMessage(message);
    }
  };

  return (
    <div>
      {React.Children.map(children, child =>
        React.cloneElement(child, { parse })
      )}
    </div>
  );
};

export default MessageParser;
