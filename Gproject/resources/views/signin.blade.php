<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sign In</title>
    <link rel="stylesheet" href="{{ asset('frontend/styles/login.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/styles/navbar-footer.css') }}">
   

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
    
  </head>
  <body>
  <!------------------- navigation bar start ------------>
    <header>    
        <nav>
          <div class="logo">
            <img
              src="https://i.postimg.cc/KvWzQQz2/Whats-App-Image-2023-03-28-at-2-23-14-PM.jpg"
              alt=""
            />
          </div>
          <div class="hamburger">
            <i class="fas fa-bars"></i>
          </div>
          <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="login.html">Login</a></li>
          </ul>
        </nav>
    </header>
 

 <!------------------- page contain  ------------>
    <div class="container">
      <img
        class="logo"
        width="8%"
        src="https://i.postimg.cc/KvWzQQz2/Whats-App-Image-2023-03-28-at-2-23-14-PM.jpg"
        alt=""
      />

      <div class="part">
        <div>
          <span class="head"> Sign In</span>
          <span class="body">
            <a href="{{ route('customers.create') }}"> Create Account </a>instead?</span>
        </div>
        <form action="{{ route('customers.store') }}" method="POST">
             <p>Phone Number</p>
            <input id="mobile" type="text" required />

            <p>Password</p>
            <input id="password" type="password" required />

            <p>Login As</p>
            <select name="role" id="role">
              <option value="users">User</option>
              <option value="studios">Studio</option>
        
            </select>
          <div class="lastline">
          <p class="body">Stay signed in for 30 days</p>
          <a href="">forgot password?</a>
        </div>

        <input type="submit" class="btn" value="Sign in"></input>

        </form>
        
     
     
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


<script src="frontend/scripts/navbar.js"></script>
<script src="frontend/scripts/login.js"></script>

