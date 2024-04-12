import React, { useState } from 'react';
import AssistantIcon from '@mui/icons-material/Assistant';
import MyComponent from '../chatbot/chatbot'; // adjust the path as needed

const Cscroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMyComponentVisible, setMyComponentVisible] = useState(false);

  React.useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 0 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    setMyComponentVisible(prevState => !prevState); // toggle visibility
  };

  return (
    <div className='icon-chatbot-container'>
      {isVisible && (
        <div className='scroll-top'>
          <a onClick={handleClick} aria-label="Scroll to top">
            <AssistantIcon fontSize='large' />
          </a>
        </div>
      )}
      <div className={`chatbot-container ${isMyComponentVisible ? 'expanded' : ''}`}>
        {isMyComponentVisible && <MyComponent />}
      </div>
    </div>
  );
};

export default Cscroll;