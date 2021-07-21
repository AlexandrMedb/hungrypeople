import React from "react";
import "./BookTable.scss";

export const BookTable = () => {
  return (
    <section className="container ">
      <div className="bookTable">
        <div className=" bookTable__main">
          <div className=".form">
            <div className="title">
              <h2>book a table</h2>
            </div>
            <form action="">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Name" />
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
