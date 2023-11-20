import React, { useState } from "react";
import "./style.css";
import Menu from "./menuapi";
import MenuCard from "./menucard";

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);

  const filterItem = (category) => {
    const updatedList = Menu.fileter((curElem)=>{
      return curElem.category === category;
    })
  };

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button
            className="btn-group__item"
            onClick={() => filterItem("breakfast")}
          >
            Breakfast
          </button>
          <button className="btn-group__item">Lunch</button>
          <button className="btn-group__item">Evening</button>
          <button className="btn-group__item">Dinner</button>
          <button className="btn-group__item">All</button>
        </div>
      </nav>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
