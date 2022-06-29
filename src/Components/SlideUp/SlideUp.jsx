import React, { useState } from "react";
import "./SlideUp.css";
import { BsArrowUpCircle } from "react-icons/bs";
function SlideUp() {
  const [slideUp, setSlideUp] = useState(false);

  const scroll = () => {
    if (window.scrollY >= 100) {
      setSlideUp(true);
    } else {
      setSlideUp(false);
    }
  };
  window.addEventListener("scroll", scroll);

  return (
    <div>
      {slideUp && (
        <a href='#home' className='slide-up'>
          <BsArrowUpCircle className='slide-up-icon' />
          {""}
        </a>
      )}
      {!slideUp && (
        <a href='#home' className='slide-down'>
          <BsArrowUpCircle className='slide-up-icon' />
          {""}
        </a>
      )}
    </div>
  );
}

export default SlideUp;
