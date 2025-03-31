import React from "react";
import "./home.scss";
import SearchBar from "../components/SearchBar/SearchBar";
const Home = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1>
            Find Your Dream Home for Rent or on Sale with Ease only on Housify
          </h1>
          <p>
            Discover the perfect home that fits your lifestyle and budget.
            Browse through a wide range of listings, get expert insights, and
            make confident real estate decisions—all in one place. Your next
            home is just a click away
          </p>
        </div>
        <div>
          <SearchBar/>
        </div>
      </div>
      <div className="imageContainer">
        <img src="public/images/hero1.png" />
      </div>
    </div>
  );
};

export default Home;
