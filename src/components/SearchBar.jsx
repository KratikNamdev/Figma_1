import { Typography } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DragHandleSharpIcon from '@mui/icons-material/DragHandleSharp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import cart from '../Assets/ant-design_user-outlined.svg'
import menu from '../Assets/Component 1.svg'
import menu2 from '../Assets/Header Menu.svg'


function SearchBar() {
  return (
    <>
<div className='nav'>
<div className='navbar'>
   <h1 className='logo'>LOGO</h1>
    <div className='searchbar'>
    <input placeholder='Search Products...'/>

    

    </div>
    <div className='cart'>
    <img src={menu} />
    <img src={cart} />
    <img src={menu2} />


    </div>
</div>

</div>
    </>
  )
}

export default SearchBar