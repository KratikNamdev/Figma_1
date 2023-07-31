
import React, { useState } from 'react';
import tshirt from '../Assets/products.jpg'

function Products() {
    const [category, setCategory] = useState('');
    const [rate, setRate] = useState('');
    const [color, setColor] = useState('');
  
    // Sample data for the select options (you can replace it with your actual data)
    const categoryOptions = ['Electronics', 'Clothing', 'Home Appliances'];
    const rateOptions = ['Low', 'Medium', 'High'];
    const colorOptions = ['Red', 'Blue', 'Green', 'Yellow', 'Black'];
  
    // Event handlers to update the state with the selected values
    const handleCategoryChange = (e) => {
      setCategory(e.target.value);
    };
  
    const handleRateChange = (e) => {
      setRate(e.target.value);
    };
  
    const handleColorChange = (e) => {
      setColor(e.target.value);
    };
  return (
    <>
        <div className='products'>


        <div className='product-search'>
       
   
      <label htmlFor="category">Category:</label>
      <select id="category" value={category} onChange={handleCategoryChange}>
        <option value="">Select Category</option>
        {categoryOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <br />

      <label htmlFor="rate">Rate:</label>
      <select id="rate" value={rate} onChange={handleRateChange}>
        <option value="">Select Rate</option>
        {rateOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <br />

      <label htmlFor="color">Color:</label>
      <select id="color" value={color} onChange={handleColorChange}>
        <option value="">Select Color</option>
        {colorOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>

    <div className='product-card-div'>
   
      {/* <div className='product-card-p'>
<img src={tshirt} />
<div className='product-card-details'>
<h6>Product Name</h6>
<p>Brand Name</p>
<h6>150 RS.</h6>

</div>
    </div>
    <div className='product-card-p'>
<img src={tshirt} />
<div className='product-card-details'>
<h6>Product Name</h6>
<p>Brand Name</p>
<h6>150 RS.</h6>

</div>
    </div>
    <div className='product-card-p'>
<img src={tshirt} />
<div className='product-card-details'>
<h6>Product Name</h6>
<p>Brand Name</p>
<h6>150 RS.</h6>

</div>
    </div>
    <div className='product-card-p'>
<img src={tshirt} />
<div className='product-card-details'>
<h6>Product Name</h6>
<p>Brand Name</p>
<h6>150 RS.</h6>

</div>
    </div> */}
    <div class="wrapper">
    <div class="product-img">
      <img src={tshirt} height="420" width="327"/>
    </div>
    <div class="product-info">
      <div class="product-text">
        <h1>Harvest Vase</h1>
        <h2>by studio and friends</h2>
        <p>Harvest Vases are a reinterpretation<br/> of peeled fruits and vegetables as<br/> functional objects. The surfaces<br/> appear to be sliced and pulled aside,<br/> allowing room for growth. </p>
      </div>
      <div class="product-price-btn">
        <p><span>500 </span>Rs</p>
        <button type="button">buy now</button>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="product-img">
      <img src={tshirt} height="420" width="327"/>
    </div>
    <div class="product-info">
      <div class="product-text">
        <h1>Harvest Vase</h1>
        <h2>by studio and friends</h2>
        <p>Harvest Vases are a reinterpretation<br/> of peeled fruits and vegetables as<br/> functional objects. The surfaces<br/> appear to be sliced and pulled aside,<br/> allowing room for growth. </p>
      </div>
      <div class="product-price-btn">
        <p><span>500 </span>Rs</p>
        <button type="button">buy now</button>
      </div>
    </div>
  </div>

    </div>

  

        </div>
    </>
  )
}

export default Products