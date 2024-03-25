// in MessageParser.js
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hello')) {
      actions.handleHello();
    }
  };

  return (
    <div>
      {React.Children.map(children, child =>
        React.cloneElement(child, { parse, actions })
      )}
    </div>
  );
};

export default MessageParser;