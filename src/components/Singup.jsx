import React from 'react'
import Loginimg from '../Assets/login.jpeg'

function Singup() {
  return (
   <>
     <div className='login'>
        <div className='login-left'>
        <img src={Loginimg} />

        </div>

        <div className='login-right'>
        <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-7 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Sign Up</h5>
            <form>
            <div class="form-floating mb-3">
                <input type="" class="form-control" id="floatingInput" placeholder="Name"/>
                <label for="floatingInput">Name</label>
              </div>
              <div class="form-floating mb-3">
                <input type="number" class="form-control" id="floatingInput" placeholder="Phone Number"/>
                <label for="floatingInput">Phone Number</label>
              </div>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>

              <div class="form-check mb-3">
                {/* <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/> */}
                {/* <label class="form-check-label" for="rememberPasswordCheck">
                  Remember password
                </label> */}

                <p>Already have an account? <span style={{color:"blue"}}>Login Now</span></p>

              </div>
              <div class="d-grid">
                <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                  Up</button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

        

</div>
        </div>
   </>
  )
}

export default Singup