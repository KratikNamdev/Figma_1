import React from 'react'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Input from '@mui/material/Input';

function Footer() {
  return (
    <div className='Footer'>
    <div>
    <Typography variant="h5" component="h2">
 Logo
</Typography>
    </div>
    <div className='footer-link'>

    </div>
    <div className='footer-search'>
    <Link href="#">Home</Link>
    <Link href="#">Catlog</Link>
    <Link href="#">Blog</Link>
    <Link href="#">Pages</Link>
    <Link href="#">About Us</Link>


    </div>
    <div>

    <FormControl>
      <FormLabel style={{color:"white"}}>Subscribe Our Newsletter</FormLabel>
      <Input style={{color:"white"}} placeholder="Enter Email Address" />
      
    </FormControl>
    </div>

    </div>
  )
}

export default Footer