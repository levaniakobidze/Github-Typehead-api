import React from "react";
import "./UserCard.css";

function UserCard(props) {
  const { name, img, github, followers, following, location } = props;
  return (
    <a href={github} className='user-card'>
      <div className='user-img'>
        <img src={img} alt='' />
      </div>
      <p className='user-name'>{name}</p>
    </a>
  );
}

export default UserCard;
