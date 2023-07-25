import { Typography } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DragHandleSharpIcon from '@mui/icons-material/DragHandleSharp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


function SearchBar() {
  return (
    <>
<div className='nav'>
<div className='navbar'>
    <Typography variant='h5' sx={{color: 'white'}}> LOGO </Typography>
    <div className='searchbar'>
    <input placeholder='Search Products...'/>

    

    </div>
    <div className='cart'>
    <ShoppingCartIcon/>
    <PersonOutlineIcon/>
    <DragHandleSharpIcon/>

    </div>
</div>

</div>
    </>
  )
}

export default SearchBar