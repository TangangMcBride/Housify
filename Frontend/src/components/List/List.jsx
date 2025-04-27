import React from "react";
import { listData } from "../../lib/dommydata";
import Card from "../../components/Card/Card";
const List = () => {
    const data = listData;
  return (
    <div className="List">
      <div className="wrapper">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default List;
