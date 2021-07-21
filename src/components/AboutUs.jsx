import React from "react";
import "./AboutUs.scss";

export const AboutUs = () => {
  return (
    <section className="container ">
      <div className="aboutUS">
        <div className=" aboutUS__main">
          <div className="right">
            <div className="title">
              <h2>about us</h2>
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
          <div className="left">
            <div></div>
            <div className="square"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
