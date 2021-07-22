import React from "react";
import "./Header.scss";
import { ReactComponent as Facebook } from "../img/facebook-f-brands.svg";
import { ReactComponent as Twitter } from "../img/twitter-brands.svg";
import { ReactComponent as Instagram } from "../img/instagram-brands.svg";
import { ReactComponent as Vector } from "../img/Vector.svg";

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
          <a href="">
            <Vector></Vector>
          </a>
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
          <h3> RESTAURANT</h3>
          <h1>hungry people</h1>
          <div className="center__bottom">
            <a href="">BOOK TABLE</a>
            <a href="">EXPLORE</a>
          </div>
        </div>

        <div className="right">
          <a href="">
            <Facebook></Facebook>
          </a>
          <a href="">
            <Twitter></Twitter>
          </a>
          <a href="">
            <Instagram></Instagram>{" "}
          </a>
        </div>
      </div>
    </section>
  );
};
