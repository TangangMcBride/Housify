import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

const Card = ({ item }) => {
  return (
    <div className="cardContainer">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/images/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">{`$${item.price}`}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/images/bed.png" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/images/bath.png" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="./images/save.png"/>
            </div>
            <div className="icon">
              <img src="./images/chat.png"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
