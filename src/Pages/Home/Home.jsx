import React, { useState, useRef, useCallback } from "react";
import "./Home.css";
import UserCard from "./userCard/UserCard";

function Home() {
  // states
  const [users, setUsers] = useState(null);
  const [userExists, setUserExists] = useState(true);
  const inputReff = useRef(null);

  // Data fetch function
  const fetchUsersData = async (URL) => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        setUserExists(false);
        return;
      }
      if (response.ok) {
        setUserExists(true);
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  // onChange  function which fetchs the exact user data
  const onChangeHandler = (value) => {
    const url = `https://api.github.com/users/${value.replace(/\s/g, "")}`;
    fetchUsersData(url);
    console.log(value);
  };

  // debounce function to have few requests
  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const optimizedFn = useCallback(debounce(onChangeHandler), []);

  users && console.log(users);

  return (
    <div className='home'>
      <form action=''>
        <div className='search-input-cont'>
          <div className='style-div'></div>
          <input
            type='text'
            ref={inputReff}
            placeholder='Search users'
            onChange={(e) => optimizedFn(e.target.value)}
          />
        </div>
        <p className='user-error'>
          {!userExists && "User you are looking for, doesn't exists"}
        </p>
      </form>
      <div className='user-container'>
        {users && userExists && (
          <UserCard
            name={users.name}
            img={users.avatar_url}
            github={users.html_url}
            followers={users.followers}
            following={users.following}
            location={users.location}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
