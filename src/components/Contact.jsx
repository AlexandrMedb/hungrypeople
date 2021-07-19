import React from "react";
import "./Contact.scss";
import { ReactComponent as Map } from "../img/map-marker-alt-solid.svg";
import { ReactComponent as Phone } from "../img/phone-solid.svg";
import { ReactComponent as Email } from "../img/envelope-solid.svg";

export const Contact = () => {
  return (
    <section className="container contact_wraper">
      <div className="title">
        <h2>CONtACT</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit
          maximus, molestie est a, tempor magna.
        </p>
      </div>

      <form action="">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone" />
        <textarea name="" id="" placeholder="Message"></textarea>
        <div className="contact__formBottom">
          <span className="contact__formBottom_left">
            <span>
              <Map />
              5th London Boulevard, U.K.
            </span>
            <span>
              <Phone /> +40 729 131 637/+40 726 458 782
            </span>
            <span>
              <Email /> office@mindblister.com
            </span>
          </span>

          <button type="submit">SEND MESSAGE</button>
        </div>

        <div></div>
      </form>
    </section>
  );
};
