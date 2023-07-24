import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Cards() {
  return (
    <>

<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image="http://dpegb9ebondhq.cloudfront.net/product_photos/589276/3600_00_hr_original.jpg"
      />
      <CardContent>
        <div className='card-head'>
        <Typography gutterBottom variant="h6" component="div">
         <strong> T-Shirt Basic</strong>
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
         <strong> $30.00</strong>
        </Typography>
        </div>

        <Typography variant="body2" color="text.secondary">
         Oversize White
        </Typography>
      </CardContent>
      
    </Card>
    </>
  )
}

export default Cards