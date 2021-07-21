import React from "react";
import "./BookTable.scss";

export const BookTable = () => {
  return (
    <section className="container  ">
      <div className="bookTable">
        <div className=" bookTable__main">
          <div className="">
            <div className="title">
              <h2>book a table</h2>
            </div>
            <form action="">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone" />
              <input type="text" placeholder="People" />
              <input type="date" placeholder="Date (mm/dd)" />
              <input type="time" placeholder="Time" />
              <button type="submit">BOOK NOW</button>
            </form>
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
