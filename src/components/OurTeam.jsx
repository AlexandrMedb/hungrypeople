import React from "react";
import "./OurTeam.scss";

export const OurTeam = () => {
  return (
    <section className="container ">
      <div className="ourTeam">
        <h3>OUR TEAM</h3>
        <div className=" ourTeam__main">
          <div className="left">
            <div className="square"></div>
          </div>
          <div className="right">
            <div className="title">
              <h2>MASTER CHEF</h2>
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
      </div>
    </section>
  );
};
