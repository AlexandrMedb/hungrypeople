import React from "react";
import "./Map.scss";

export const Map = () => {
  return (
    <div className="map">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa7e107dd84b96f2f5fe001d461d993e04427165942491dc98f453b8cf7602602&amp;source=constructor"
        width="100%"
        height="475"
        frameBorder="0"
        title="map"
      ></iframe>
    </div>
  );
};
