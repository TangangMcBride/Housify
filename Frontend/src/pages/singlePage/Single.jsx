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
          <p className="title"> General</p>
          <div className="verticalList">
            <div className="feature">
              <img src="/images/utility.png" alt="" />
              <div className="featureText">
                <span>Utililies</span>
                <p>Landlord is Responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/images/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pet Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/images/utility.png" alt="" />
              <div className="featureText">
                <span>Rent Amount</span>
                <p>Minimum 6 months</p>
              </div>
            </div>
          </div>
          <p className="title"> Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/images/size.png" alt="" />
              <span>80sqft</span>
            </div>
            <div className="size">
              <img src="/images/bed.png" alt="" />
              <span>2 Beds</span>
            </div>
            <div className="size">
              <img src="/images/bath.png" alt="" />
              <span>bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="horizontalList">
          <div className="feature">
              <img src="/images/school.png" alt="" />
              <div className="featureText">
                <span>school</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/images/bus.png" alt="" />
              <div className="featureText">
                <span>Road</span>
                <p>100 from Road</p>
              </div>
            </div>
            <div className="feature">
              <img src="/images/utility.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>250m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/images/chat.png" />
              Send a Message
            </button>
            <button>
              <img src="/images/save.png" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
