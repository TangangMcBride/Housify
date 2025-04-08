import React from "react";
import "./filter.scss";

const Filter = () => {
  return (
    <div className="filter">
      <h1>
        Search results for <b>Yaounde</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="Rent">Rent</option>
            <option value="Buy">Buy</option>
          </select>
        </div> 
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="studio">Studio</option>
            <option value="chambremorderne">Chambre Moderne</option>
            <option value="guesthouse">Guest House</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
          />
        </div>
        <img src='public/images/search.png'/>
      </div>
    </div>
  );
};

export default Filter;
