import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

export const Footer = () => {
  return <footer className="Footer">
      <div className="copyright">
        <p>Copyright <i className="far fa-copyright" aria-hidden="true"></i> 2022 HackerRank</p>
        <a href="#">Careers</a>
      </div>
      <a href='#' style={{padding: 0, color: "#738f93"}}>Privacy Policy</a>
  </footer>;
};

export default Footer;