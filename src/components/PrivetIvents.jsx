import React from "react";
import "./PrivetIvents.scss";

export const PrivetIvents = () => {
  return (
    <section className="container ">
      <div className=" PrivetIvents">
        <h3>PRIVATE EVENTS</h3>
        <div className=" PrivetIvents__main">
          <div className="left">
            <div className="square"></div>
            <p>weddings</p>
          </div>
          <div className="right">
            <p>weddings</p>
            <div className="square"></div>
          </div>
        </div>
        <p>
          For private events please call: +40 729 131 637/+40 726 458 782 or use
          the contact form.
        </p>
      </div>
    </section>
  );
};
