import { useState } from "react";
import "./SearchBar.scss";
import { Link } from "react-router-dom";
const SearchBar = () => {
  const types = ["Rent", "Buy"];

  const [query, setQuery] = useState({
    type: "Rent",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });
  const changeType = (value) => {
    setQuery((prev) => ({ ...prev, type: value }));
  };
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => changeType(type)}
            className={query.type === type ? "active button" : "button"}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" placeholder="Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={1000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={1000000}
          placeholder="Max Price"
        />
        <Link to='/list'>
        <button>
          <img src="public/images/search.png" alt="search Icon" />
        </button>
        </Link>
      </form>
    </div>
  );
};

export default SearchBar;
