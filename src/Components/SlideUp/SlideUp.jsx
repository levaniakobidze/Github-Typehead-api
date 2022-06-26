import React, { useState } from "react";
import "./SlideUp.css";
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
          {""}
        </a>
      )}
      {!slideUp && (
        <a href='#home' className='slide-down'>
          {""}
        </a>
      )}
    </div>
  );
}

export default SlideUp;
