import React from 'react';
import * as Scroll from "react-scroll";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const SmoothScroll = () => {

  const scrollTop = () => {
    Scroll.animateScroll.scrollToTop();
  };

  return (    
    <button className="fixed bottom-0 right-0 mb-4 mr-4" onClick={scrollTop}>
      <BsFillArrowUpCircleFill className='text-2xl animate-bounce'/>
    </button>
  );
};

export default SmoothScroll