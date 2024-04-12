import React, { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  // const handleClick = () => {
  //   setMyComponentVisible(true);
  //   console.log('Icon clicked, state should be:', isMyComponentVisible);
  // };
  

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return isVisible ? (
    <div className='scroll-top'>
      <a href='#top' aria-label="Scroll to top">
        <ArrowUpwardIcon fontSize='large' />
      </a>
    </div>
  ) : null;
}

export default ScrollToTop
