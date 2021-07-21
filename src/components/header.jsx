import React from "react";
import "./Header.scss";

export const Header = () => {
  return (
    <section className="container header">
      <ul>
        <li>
          <a href="">HOME</a>
        </li>
        <li>
          <a href="">ABOUT</a>
        </li>
        <li>
          <a href="">TEAM</a>
        </li>
        <li>
          <a href="">BOOKING</a>
        </li>
        <li>
          <a href="">MENU</a>
        </li>
        <li>
          <a href="">GALERIE</a>
        </li>
        <li>
          <a href="">EVENTS</a>
        </li>
        <li>
          <a href="">CONTACT</a>
        </li>
      </ul>
      <div className="header__main">
        <p>Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM</p>
        <div className="center">
          <h1>hungry people</h1>
        </div>

        <div>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>
      </div>
    </section>
  );
};
