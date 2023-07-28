import { Typography } from '@mui/material'
import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DragHandleSharpIcon from '@mui/icons-material/DragHandleSharp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import cart from '../Assets/ant-design_user-outlined.svg'
import menu from '../Assets/Component 1.svg'
import menu2 from '../Assets/Header Menu.svg'


function SearchBar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };
  return (
    <>
<div className='nav'>
<div className='navbar'>
   <h1 className='logo'>LOGO</h1>
    <div className='searchbar'>
    <input placeholder='Search Products...'/>

    

    </div>
    <div className='cart'>
    <img src={menu2} />
    
    <img src={cart} />
    <img src={menu} onClick={handleDrawerToggle}/>
    <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={handleCloseDrawer}>
          &times;
        </button>
        {/* Drawer content goes here */}
        <h2>CART</h2>
        <p>Empty</p>
      </div>


    </div>
</div>

</div>
    </>
  )
}

export default SearchBar