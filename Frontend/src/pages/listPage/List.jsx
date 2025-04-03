import React from "react";
import { listData } from "../../lib/dommydata";
import "./list.scss";
const List = () => {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">LIST</div>
      <div className="mapContainer">MAP</div>
    </div>
  );
};

export default List;
