import React from "react";
import "./Specialites.scss";

export const Specialites = () => {
  return (
    <section className="container ">
      <div className="specialites">
        <h3> specialties</h3>
        <div className=" specialites__main">
          <div className="left">
            <div className="square"></div>
          </div>
          <div className="right">
            <div className="title">
              <h2>DELICIOUS MENU</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                velit maximus, molestie est a, tempor magna.
              </p>
            </div>
            <p>
              nteger ullamcorper neque eu purus euismod, ac faucibus mauris
              posuere. Morbi non ultrices ligula. Sed dictum, enim sed
              ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem
              quam nec sem. Mauris tincidunt feugiat diam convallis pharetra.
              Nulla facilisis semper laoreet.
            </p>
          </div>
        </div>
        <p className="specialites__footer">Карусель!!!</p>
      </div>
    </section>
  );
};
