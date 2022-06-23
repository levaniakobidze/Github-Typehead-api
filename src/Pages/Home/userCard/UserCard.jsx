import React from "react";
import "./UserCard.css";

function UserCard(props) {
  const { name, img, github, followers, following } = props;
  return (
    <a href={github} className='user-card'>
      <div className='user-img'>
        <img src={img} alt='' />
      </div>
    </a>
  );
}

export default UserCard;
