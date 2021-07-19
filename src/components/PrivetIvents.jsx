import React from "react";
import "./PrivetIvents.scss";

export const PrivetIvents = () => {
  return (
    <section className="container ">
      <div className=" PrivetIvents">
        <h3>PRIVATE EVENTS</h3>
        <div className=" PrivetIvents__main">
          <div className="left"></div>
          <div className="right">
            <div className="title">
              <h2>chocolate pancakes</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                velit maximus, molestie est a, tempor magna.
              </p>
            </div>
            <p>
              integer ullamcorper neque eu purus euismod, ac faucibus mauris
              posuere. Morbi non ultrices ligula. Sed dictum, enim sed
              ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem
              quam nec sem. Mauris tincidunt feugiat diam convallis pharetra.
              Nulla facilisis semper laoreet.
            </p>
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
