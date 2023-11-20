import React, {useState} from 'react'
import "./style.css"
import Menu from './menuapi'
import Menucard from './menucard';

const Restaurant = () => {
  const [menudata, setMenudata] = useState(Menu);
 
  return( 
      <>
        <Menucard/>
      </>
     );
  
};

export default Restaurant

