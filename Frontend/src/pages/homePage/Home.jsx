import React from "react";
import "./home.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Find Your Dream Home for Rent or on Sale 
          </h1>
          <p>
            Discover the perfect home that fits your lifestyle and budget.
            Browse through a wide range of listings, get expert insights, and
            make confident real estate decisions—all in one place. Your next
            home is just a click away
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
            <Link to='/list'>
              <h1>5+</h1>
              </Link>
              <h2>Years of Existence</h2>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h2>Properties listed</h2>
            </div>
            <div className="box">
              <h1>50+</h1>
              <h2>Available Employees</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="public/images/hero1.png" />
      </div>
    </div>
  );
};

export default Home;
