import React, {useState} from 'react'
import "./style.css"
import Menu from './menuapi'
import MenuCard from './menucard';

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
 
  return( 
      <>
        <MenuCard menuData = {menuData}/>
      </>
     );
  
};

export default Restaurant;

