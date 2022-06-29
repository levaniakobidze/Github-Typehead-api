import React, { useState, useRef, useCallback, useEffect } from "react";
import "./Home.css";
import UserCard from "./userCard/UserCard";
import { BsSearch } from "react-icons/bs";

function Home() {
  /////////
  // STATES
  const [users, setUsers] = useState([]);
  const [userExists, setUserExists] = useState(true);
  const [loading, setLoading] = useState(false);
  const [scroll, setScroll] = useState(false);
  const inputRef = useRef(null);
  ///////////////////////
  // FUNCTION TO FETCH THE DATA
  const fetchUsersData = async (URL) => {
    setLoading(true);
    try {
      const response = await fetch(URL);
      const data = await response.json();
      if (!response.ok) {
        setUserExists(false);
        return;
      }
      setUsers(data.items);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(loading);
  /////////////////////////////////////////////
  // USEEFFECT TO CATCH IF USER EXISTS OR NOT
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
      setUserExists(true);
      return;
    }
  }, []);
  //////////////////////////////////////////////////////
  // ONCHANGE FUNCTION WHICH FETCHES THE EXACT USER DATA
  const onChangeHandler = (value) => {
    const url = `https://api.github.com/search/users?q=${value.replace(
      /\s/g,
      ""
    )}`;
    if (inputRef.current.value === "") {
      setLoading(false);
      setUserExists(true);
      return;
    }
    fetchUsersData(url);
  };
  /////////////////////////////////////////
  // DEBOUNCE FUNCTION TO HAVE A FEW REQUEST
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
  /////////////////////////////////////////
  // STYLEING FUNCTION
  const scrollFunc = () => {
    if (window.scrollY >= 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", scrollFunc);

  const optimizedFn = useCallback(debounce(onChangeHandler), []);

  return (
    <div className='home' id='home'>
      <form action='' onSubmit={(e) => e.preventDefault()}>
        <div className={scroll ? "input-wrapper active" : "input-wrapper"}>
          <div className='search-input-cont'>
            <div className='style-div'>
              <BsSearch className='search-icon' />
            </div>
            <input
              type='search'
              placeholder='Search users'
              ref={inputRef}
              onChange={(e) => optimizedFn(e.target.value)}
            />
          </div>
        </div>
      </form>
      {loading && (
        <p className='loading'>
          <span></span>
        </p>
      )}
      <div className='user-container'>
        <p className='user-error'>
          {!userExists && "User you are looking for, doesn't exists"}
        </p>
        {users &&
          userExists &&
          users.map((user) => {
            return (
              <UserCard
                key={user.id}
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
