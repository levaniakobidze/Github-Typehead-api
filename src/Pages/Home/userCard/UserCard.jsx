import React, { useState } from "react";
import "./UserCard.css";

function UserCard(props) {
  const [slide, setSlide] = useState(false);
  const { name, img, github, followers, following, repos, location } = props;
  const handleClick = () => {
    setSlide((prev) => !prev);
  };
  return (
    <div className='user-card'>
      <div className='card'>
        <a href={github}>
          <div className='user-img'>
            <img src={img} alt='' />
          </div>
          <p className='user-name'>{name}</p>
          <div className='details-button-div'>
            <button onClick={() => console.log("levan")}>{location}</button>
          </div>
          <div className='table'>
            <div className='followers'>
              <span className='numbers'> {followers}</span>Followers
            </div>
            <div className='following'>
              <span className='numbers'>{following}</span>Following
            </div>
            <div className='location'>
              <span className='numbers'>{repos}</span>Repos{" "}
            </div>
          </div>
        </a>
        <div
          className={slide ? "slider-cont slider-cont-active" : "slider-cont"}>
          <div className='slider'>
            <span className='slide' onClick={handleClick}>
              {" "}
              More details{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
