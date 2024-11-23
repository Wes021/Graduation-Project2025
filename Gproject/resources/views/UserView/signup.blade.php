<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Signup</title>
    
    <link rel="stylesheet" href="{{ asset('frontend/styles/userSignup.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/styles/navbar-footer.css') }}">
    
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />

    <!-- CSS for map container -->
    <style>
        #map {
            height: 300px; /* Height of the map container */
            width: 100%;   /* Width of the map container */
        }
    </style>

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
                <a href="{{ route('usersignin')}}"> Sign In </a>instead?</span
              >
            </div>
  
            <form action="{{ route('usersignuproccss') }}" method="POST">
              @csrf
              <p>Fullname</p>
              <input id="name" type="text" name="name" required />

              <p>username</p>
              <input id="username" type="text" name="username" required />

            <p>Phone Number</p>
            <input id="phone" type="text" name="phone" required />
          
            <p>Password</p>
            <input id="password" type="text" name="password" required />

            <p>Gender</p>
              <p>Male</p>
              <input type="radio" id="male" name="gender" value="male">
              
              <p>Female</p>
              <input type="radio" id="female" name="gender" value="female">
              
  
            {{-- <p>address</p>
            <input type="text" id="address" name="address" required /> --}}
            <p>Governorate</p>
            <input type="text" name="governorate">
            <p>City</p>
            <input type="text" name="city">
            <p>Street</p>
            <input type="text" name="street">

            <input type="hidden" name="latitude" id="latitude">
            <input type="hidden" name="longitude" id="longitude">

              <p class="body">Stay signed in for 30 days</p>
            
              
            <p>
              By creating an account, I agree to the Terms and Privacy Policy.
            </p>
  
            <input type="submit" class="btn" value="Create account"></input>
          </form>
          <div id="map"></div>
           
  
           
          
         
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
  
      <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>

    <script>
        // Initialize the map centered at some coordinates
        var map = L.map('map').setView([51.505, -0.09], 13); // Set initial coordinates and zoom level

        // Tile layer for OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Marker for the initial location
        var marker = L.marker([32, 36]).addTo(map);

        // Event listener for when the user clicks on the map
        map.on('click', function(e) {
            var lat = e.latlng.lat;
            var lon = e.latlng.lng;

            // Update the marker location
            marker.setLatLng([lat, lon]);

            // Set the hidden input values to the clicked location coordinates
            document.getElementById('latitude').value = lat;
            document.getElementById('longitude').value = lon;
        });
    </script>
  
    </body>
  </html>
</body>
</html>

<script src="frontend/scripts/navbar.js"></script>
{{-- <script src="frontend/scripts/userSignup.js"></script> --}}