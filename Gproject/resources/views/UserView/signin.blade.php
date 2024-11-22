<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>User Sign In</title>
    <link rel="stylesheet" href="{{ asset('frontend/styles/login.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/styles/navbar-footer.css') }}">
   

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
    
  </head>
  <body>
  <!------------------- navigation bar start ------------>
  <header>
    <div class="nav">
    <div class="part1">
             <img width="100%" src="https://i.postimg.cc/KvWzQQz2/Whats-App-Image-2023-03-28-at-2-23-14-PM.jpg" alt="logo">
        <img width="100%" src="https://i.postimg.cc/cHrqvmyc/Stike.png" alt="">
        <div>
             <a id="nbtn" href="{{ route('/') }}">Home</a>
          
        </div>
       
    </div>
    
   <div class="part2">
        <a id="nbtn" href="./login.html">Login</a>
        <a id="nbtn" href="./userSignup.html">Signup</a>
        <button class="nav-button" fdprocessedid="sbvkvg">Register as Studio</button>
    </div>
</div></header>
 

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
          <span class="head"> Sign In as user</span>
          <span class="body">
            <a href="{{ route('usersignup') }}"> Create Account </a>instead?</span>

        </div>
        <form action="{{ route('usersigninroccss') }}" method="POST">
          @csrf
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required>
          <br>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required>
          <br>
          <input type="submit" class="btn" value="Sign in"></input>
      </form>
      <span class="body">
       Employee? press <a href="{{ route('AdminSignin') }}"> here </a></span>


      @if (session('error'))
          <p style="color:red;">{{ session('error') }}</p>
      @endif      
     
     
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
{{-- <script src="frontend/scripts/login.js"></script> --}}

