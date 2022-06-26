import React, { useState } from "react";
import "./UserCard.css";

function UserCard(props) {
  const { name, img, github, followers, following, repos, location } = props;

  return (
    <a target='_blank' href={github} className='user-card'>
      <div className='user-img'>
        <img src={img} alt='' />
      </div>
      <p className='user-name'>{name.substr(0, 15)}</p>
      <div className='details-button-div'></div>
    </a>
  );
}

export default UserCard;
