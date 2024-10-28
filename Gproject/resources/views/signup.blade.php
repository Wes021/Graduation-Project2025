<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Signup</title>
    
    <link rel="stylesheet" href="{{ asset('frontend/styles/userSignup.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/styles/navbar-footer.css') }}">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
</head>

<body>
  
    <div class="container">
        <div class="main">
          <div class="part01">
            <img
              width="20%"
              src="https://i.postimg.cc/KvWzQQz2/Whats-App-Image-2023-03-28-at-2-23-14-PM.jpg"
              alt="logo"
            />
            <ul class="head">
              Why sign up?
            </ul>
            <ul>
              <li>Our photographers are professionally selected to provide the best photo experience and results.</li>
              <li>Simply select your photo shoot package in almost any city and a photographer will be assigned to you shortly.</li>
              <li>Our experienced editor team ensures that your photos are edited to the highest quality.</li>
              <li>Delivering top quality photos in just 48 hours after your session.</li>
            </ul>
            <div>
             <img
              class="svg"
              width="100%"
              src="https://i1.adis.ws/i/canon/pro-ambassador-yasmin-albatoul-kitbag_27925a5cd9b14fdfb43ef11168a4ac35?$editorial-kitbag-16by9-dt-jpg$"
              alt="photographer"
            />  
            </div>
           
          </div>
  
          <div class="part02">
            <div>
              <span class="head">Create Account</span>
              <span class="body">
                <a href="{{ route('signin')}}"> Sign In </a>instead?</span
              >
            </div>
  
            <form action="{{ route('customers.store') }}" method="POST">
              @csrf
              <p>Fullname</p>
              <input id="name" type="text" name="name" required />

              <p>username</p>
              <input id="username" type="text" name="username" required />

            <p>Phone Number</p>
            <input id="phone" type="text" name="phone" required />
          
            <p>Password</p>
            <input id="password" type="text" name="password" required />
  
            <p>address</p>
            <input type="text" id="address" name="address" required />

              <p class="body">Stay signed in for 30 days</p>
            
              
            <p>
              By creating an account, I agree to the Terms and Privacy Policy.
            </p>
  
            <input type="submit" class="btn" value="Create account"></input>
          </form>
           
  
           
          
         
          </div>
        </div>
      </div>
  
   
      <!------------------- footer part  ------------>
      <div class="footer">
          <p id="ftext">Strike a Pose </p>
          <div>
              <div>
                  <p>Company</p>
                  <li>Blog
                  </li>
                  <li>About Us
                  </li>
                  <li>Contact Us</li>
                  <li>Cities</li>
                  
              </div>
              <div>
                  <p>Legal</p>
                  <li>Terms Of Service
                  </li>
                  <li>Privacy Policy
                  </li>
                  <li>Content Guidelines</li>
                  <li>Community Guidelines</li>
                  <li>3rd Party licenses</li>
                  
              </div>
          </div>
          <hr>
          <p>
              Icons made by Freepik from www.flaticon.com And Font Awesome
              </p>
              <hr>
              <p>
                  © Copyright 2023 Strike a Pose Technologies Pvt. Ltd. All rights reserved. | 
                  Terms Of Service | 
                  Privacy Policy
                  </p>
      </div>
  
  
  
    </body>
  </html>
</body>
</html>

<script src="frontend/scripts/navbar.js"></script>
<script src="frontend/scripts/userSignup.js"></script>