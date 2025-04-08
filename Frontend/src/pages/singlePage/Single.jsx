import React from "react";
import "./single.scss";
import Slider from "../../components/Slider/Slider";
import { singlePostData, userData } from "../../lib/dommydata";
import Map from "../../components/Map/Map";
const Single = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="postInfo">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/images/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">{singlePostData.price}</div>
              </div>
              <div className="userInfo">
                <img src={userData.img} alt />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p> General</p>
          <div className="verticalList"> 

          </div>
          <p> Room Sizes</p>
          <div className="sizes">

          </div>
          <p>Nearby Places</p>
          <div className="horizontalList">

          </div>
          <p>
            Location
          </p>
          <div className="mapContainer">
            <Map items={[singlePostData]}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
