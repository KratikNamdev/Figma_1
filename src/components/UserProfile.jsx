import React from 'react'
import profile from '../Assets/pro.jpeg'

function UserProfile() {
  return (
    <>
      <div className='userprofile'>
      <div className='user-img'>
      <h1>Profile</h1>


          <div className='profile-img'>
            <img  src={profile}/>
          </div>

      <h4>user name :</h4>
      <h4>Email :</h4>


      </div>
      <div className='user-details'>


      <div class="col-md-6">
								<div class="form-group">
								  	<label>First Name</label>
								  	<input type="text" class="form-control" />
								</div>
							</div>
              <div class="col-md-6">
								<div class="form-group">
								  	<label>First Name</label>
								  	<input type="text" class="form-control" />
								</div>
							</div>     <div class="col-md-6">
								<div class="form-group">
								  	<label>First Name</label>
								  	<input type="text" class="form-control" />
								</div>
							</div>     <div class="col-md-6">
								<div class="form-group">
								  	<label>First Name</label>
								  	<input type="text" class="form-control" />
								</div>
							</div>     <div class="col-md-6">
								<div class="form-group">
								  	<label>First Name</label>
								  	<input type="text" class="form-control" />
								</div>
							</div>     <div class="col-md-6">
								<div class="form-group">
								  	<label>First Name</label>
								  	<input type="text" class="form-control" />
								</div>
							</div>     <div class="col-md-6">
								<div class="form-group">
								  	<label>First Name</label>
								  	<input type="text" class="form-control" />
								</div>
							</div>

</div>

      </div>
    </>
  )
}

export default UserProfile