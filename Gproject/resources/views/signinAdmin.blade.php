<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Admin Sign in</title>
    <link rel="stylesheet" href="{{ asset('frontend/styles/login.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/styles/navbar-footer.css') }}">
</head>
<body>
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
          <span class="head"> Sign In as an employee</span>
          

        </div>
        <form action="{{ route('Adminloginproccss') }}" method="POST">
          @csrf
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required>
          <br>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required>
          <br>
          <input type="submit" class="btn" value="Sign in"></input>
      </form>
  
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