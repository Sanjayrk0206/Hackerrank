import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export const Body = () => {
  return <div className='d-flex justify-content-start'>
      <div className='body-container'>
        <h1 className='head'>Matching developers<br />with great companies.</h1>
        <div className='row'>
            <div className='col'>
              <h4>For Companies</h4>
              <p>We are the market-leading technical interview platform to identify and hire developers wherever they are.</p>
              <button className='hiring_button'>Start Hiring</button>
            </div>
            <div className='col'>
              <h4>For Job Seekers</h4>
              <p>Join over 16 million developers, practice coding skills, prepare for Interviews and get hired.</p>
              <button className='signup_button'>Sign Up & Code</button>
            </div>
        </div>
      </div>
    </div>;
};

export default Body;