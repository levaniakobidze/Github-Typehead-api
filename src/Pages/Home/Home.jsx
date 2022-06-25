import React, { useState, useRef, useCallback, useEffect } from "react";
import "./Home.css";
import UserCard from "./userCard/UserCard";

function Home() {
  // states
  const [users, setUsers] = useState([]);
  const [userExists, setUserExists] = useState(true);
  const inputRef = useRef(null);
  // Data fetch function
  const fetchUsersData = async (URL) => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      if (!response.ok) {
        setUserExists(false);
        return;
      }
      setUsers(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffects to catch if user exists or not
  useEffect(() => {
    if (users.length > 0) {
      setUserExists(true);
    }
    if (users.length == 0) {
      setUserExists(false);
    }
  }, [users]);

  useEffect(() => {
    if (inputRef.current.value === "") {
      console.log("carieli");
      setUserExists(true);
      return;
    }
  }, []);
  // onChange  function which fetchs the exact user data
  const onChangeHandler = (value) => {
    const url = `https://api.github.com/search/users?q=${value.replace(
      /\s/g,
      ""
    )}`;
    if (inputRef.current.value === "") {
      console.log("carieli");
      setUserExists(true);
      return;
    }
    fetchUsersData(url);
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

  return (
    <div className='home'>
      <form action=''>
        <div className='input-wrapper'>
          <div className='search-input-cont'>
            <div className='style-div'></div>
            <input
              type='text'
              placeholder='Search users'
              ref={inputRef}
              onChange={(e) => optimizedFn(e.target.value)}
            />
          </div>
        </div>
      </form>
      <div className='user-container'>
        <p className='user-error'>
          {!userExists && "User you are looking for, doesn't exists"}
        </p>
        {users &&
          userExists &&
          users.map((user, index) => {
            return (
              <UserCard
                key={index}
                name={user.login}
                img={user.avatar_url}
                github={user.html_url}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Home;
