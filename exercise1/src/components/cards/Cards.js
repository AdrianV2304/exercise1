import React from "react";
import { AiOutlinePicture } from "react-icons/ai";

const Cards = () => {
  return (
    <div className="collection">
      <div className="collection__cards">
        <img src="https://placeimg.com/640/480/people" alt="random people" />
        <div className="collection__cards--small">
          <img src="https://placeimg.com/600/420/people" alt="random people" />
          <img src="https://placeimg.com/610/400/people" alt="random people" />
          <img src="https://placeimg.com/620/480/people" alt="random people" />
        </div>
        <div className="collection__cards--footer">
          <span className="collection__title">People</span>
          <AiOutlinePicture size={32} />
        </div>
      </div>

      <div className="collection__cards">
        <img src="https://placeimg.com/640/480/nature" alt="random nature" />
        <div className="collection__cards--small">
          <img src="https://placeimg.com/600/480/nature" alt="random nature" />
          <img src="https://placeimg.com/640/400/nature" alt="random nature" />
          <img src="https://placeimg.com/610/480/nature" alt="random nature" />
        </div>
        <div className="collection__cards--footer">
          <span className="collection__title">Nature</span>
          <AiOutlinePicture size={32} />
        </div>
      </div>

      <div className="collection__cards">
        <img src="https://placeimg.com/640/480/tech" alt="random tech" />
        <div className="collection__cards--small">
          <img src="https://placeimg.com/600/480/tech" alt="random tech" />
          <img src="https://placeimg.com/620/400/tech" alt="random tech" />
          <img src="https://placeimg.com/610/480/tech" alt="random tech" />
        </div>
        <div className="collection__cards--footer">
          <span className="collection__title">Tech</span>
          <AiOutlinePicture size={32} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
