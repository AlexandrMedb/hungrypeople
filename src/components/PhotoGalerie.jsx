import React from "react";
import "./PhotoGalerie.scss";

import bg1 from "../img/galerieMazzo.png";
import bg2 from "../img/galerieFire.png";
import bg3 from "../img/galerieRestaraun1.png";
import bg4 from "../img/galerieRestaraun2.png";

export const PhotoGalerie = () => {
  return (
    <section className="container PhotoGalerie">
      <div className=" ">
        <img src={bg1} alt="" />
      </div>
      <div className=" ">
        <img src={bg2} alt="" />
      </div>
      <div className=" ">
        <img src={bg3} alt="" />
      </div>
      <div className=" ">
        <img src={bg4} alt="" />
      </div>
    </section>
  );
};
