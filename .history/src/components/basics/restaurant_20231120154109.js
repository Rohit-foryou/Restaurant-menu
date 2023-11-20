import React, {useState} from 'react'
import "./style.css"
import Menu from './menuapi'
import MenuCard from './menucard';

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
 
  return( 
      <>
        <nav className="navbar">
          <div className="btn-group">
            <button className="btn-group__item"Breakfast></button>
            <button className="btn-group__item"Breakfast></button>
            <button className="btn-group__item"Breakfast></button>
            <button className="btn-group__item"Breakfast></button>
            <button className="btn-group__item"Breakfast></button>
          </div>
        </nav>
        <MenuCard menuData = {menuData}/>
      </>
     );
  
};

export default Restaurant;

