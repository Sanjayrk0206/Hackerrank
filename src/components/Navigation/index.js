import React from 'react';
import "./style.css";

export const Navigation = () => {
  return <div className='navigation_container'>
    <div className='block'>
    <img src="https://www.hackerrank.com/wp-content/uploads/2018/08/hackerrank_logo.png" class="logo" alt="HackerRank Logo" loading="lazy"></img>
    <ul>
      <li>
        Login
      </li>
      <li className='sign_up'>
        Sign Up
      </li>
    </ul>
    </div>
  </div>;
};

export default Navigation;