import React from "react";
import "./PhotoGalerie.scss";

export const PhotoGalerie = () => {
  return (
    <section className="container PhotoGalerie">
      <div className="PhotoGalerie__photo PhotoGalerie__photo_bg1"></div>
      <div className="PhotoGalerie__photo PhotoGalerie__photo_bg2"></div>
      <div className="PhotoGalerie__photo PhotoGalerie__photo_bg3"></div>
      <div className="PhotoGalerie__photo PhotoGalerie__photo_bg4"></div>
    </section>
  );
};
