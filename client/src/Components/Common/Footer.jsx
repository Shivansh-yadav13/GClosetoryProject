import React from "react";
import "./Footer.css";

import { BsFillSuitHeartFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <ul>
          <li>Instagram</li>
          <li>Youtube</li>
          <li>Facebook</li>
        </ul>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About Us</li>
        </ul>
        <form action="" method="post">
          <h3>Contact Us</h3>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
          <label htmlFor="subject">Subject</label>
          <input type="text" />
          <button type="submit">Send</button>
        </form>
      </div>
      <p>Copyright 2022 © Closetory</p>
      <p>
        Made with <BsFillSuitHeartFill /> by Closetory
      </p>
    </footer>
  );
};

export default Footer;
