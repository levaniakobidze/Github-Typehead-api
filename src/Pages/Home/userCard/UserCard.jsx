import React from "react";
import "./UserCard.css";

function UserCard(props) {
  const { name, img, github, followers, following, repos } = props;
  return (
    <a href={github} className='user-card'>
      <div className='user-img'>
        <img src={img} alt='' />
      </div>
      <p className='user-name'>{name}</p>
      <div className='details-button-div'>
        <button>More Details</button>
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
  );
}

export default UserCard;
