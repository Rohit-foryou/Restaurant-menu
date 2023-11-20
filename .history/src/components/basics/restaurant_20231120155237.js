import React, { useState } from "react";
import "./style.css";
import Menu from "./menuapi";
import MenuCard from "./menucard";

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);

  const filterItem = (category) => {
    const updatedList = Menu.filter((curElem)=>{
      return curElem.category === category;
    });

      setMenuData(updatedList);
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
          <button 
            className="btn-group__item"
            onClick={() => filterItem("lunch")}>
              Lunch
              </button>
          <button 
          className="btn-group__item"
          onClick={() => filterItem("Evening")}>
            Evening
            </button>
          <button 
          className="btn-group__item"
          onClick={() => filterItem("Dinner")}>
            Dinner</button>
          <button 
          className="btn-group__item"
          onClick={() => filterItem("All")}>
            All</button>
        </div>
      </nav>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
