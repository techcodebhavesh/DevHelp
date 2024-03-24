import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => (
  <div>
    {React.Children.map(children, child => 
      React.cloneElement(child, { actions: {} })
    )}
  </div>
);

export default ActionProvider;