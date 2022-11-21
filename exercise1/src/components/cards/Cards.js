import React from "react";

const Cards = () => {
  return (

    <div className="collection">
      <div className="collection__cards">
        <img src="https://placeimg.com/640/480/people" alt="random people"/>
        <div className="collection__cards--small">
          <img src="https://placeimg.com/640/480/people" alt="random people"/>
          <img src="https://placeimg.com/640/480/people" alt="random people"/>
          <img src="https://placeimg.com/640/480/people" alt="random people"/>
        </div>
      </div>

      <div className="collection__cards">
        <img src="https://placeimg.com/640/480/nature" alt="random nature"/>
        <div className="collection__cards--small">
          <img src="https://placeimg.com/640/480/nature" alt="random nature"/>
          <img src="https://placeimg.com/640/480/nature" alt="random nature"/>
          <img src="https://placeimg.com/640/480/nature" alt="random nature"/>
        </div>
      </div>

      <div className="collection__cards">
        <img src="https://placeimg.com/640/480/tech" alt="random tech"/>
        <div className="collection__cards--small">
          <img src="https://placeimg.com/640/480/tech" alt="random tech"/>
          <img src="https://placeimg.com/640/480/tech" alt="random tech"/>
          <img src="https://placeimg.com/640/480/tech" alt="random tech"/>
        </div>
      </div>

      <span className="collection__title">People</span>
    </div>
  );
};

export default Cards;
