import React, { useState } from "react";
import "./style.css";
import Menu from "./menuapi";
import MenuCard from "./menucard";
import Navbar from "./navbar";

const uniqueList = [
  ... new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
];

console.log(uniqueList);

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);

  const filterItem = (category) => {
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar/>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
