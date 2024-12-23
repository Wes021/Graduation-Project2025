<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="../nxm_logo.jpg"/>
    <link rel="stylesheet" href="{{asset('frontend/styles/individual.css')}}">
    <link rel="icon" type="image/png" href="../nxm_logo.jpg"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="{{asset('frontend/styles/navbar-footer.css')}}">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">
    <title>Photographers</title>
</head>

<body>
     <!-- Navbar -->
     <header></header>
 

    <div id="main_div">
        <img src="https://www.farmtruckphotographyanddesign.com/uploads/1/4/2/8/14280842/session_orig.png" alt="" id="iimmg">
        <!-- this image needed to be centered -->
    </div>
    <!-- post request for booking appointment -->

    <form action="{{ route('appointmentSubmit') }}" method="POST">
        @csrf
    <div class="date_div">
        {{-- <label for="">Check for Slots :</label>
    <input id="date_value" type="date">
    <button class="date_ btn" onclick="trigger()">Check Slots via Date</button> --}}
    {{-- <label for="name">Name</label>
    <input type="text" name="name" id=""><br><br>

    <label for="phone">Phone</label>
    <input type="text" name="phone" id=""> --}}

    <label for="date">Date</label>
    <input type="date" name="date" id="">

    <label for="time">Time</label>
    <input type="time" name="time" id="">

    <select name="categories">
        <option value="">Select an item</option>
        <option value="10">In Studio</option>
        <option value="20">Wedding</option>
        <option value="21">Holiday</option>
        <option value="22">Family</option>
        <option value="23">Birthday</option>
        <option value="24">Graduation</option>
        <option value="30">Other</option>
      </select>
      <button type="submit">add</button>
    </div>

</form>
    <hr>
    {{-- <div class="slots_div">

        <h1>Booked Slots</h1>
        <h2>Studio Timing 10:00 AM - 06:00 PM</h2>
        <ul class="slots_div_ul"></ul>
    </div> --}}

    <hr>
    <div class="time_div">
        {{-- <label for="">Start Time :</label>
        <input id="start_time" placeholder="start-time" type="time"><br>
        <label for="">End Time :</label>
        <input id="end_time" placeholder="start-time" type="time">
        <button onclick="book_slot()">book slot</button> --}}

        
    </div>
    <hr>
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
      
    </div>
    <hr>
    <p>
         Made by ahmad,wesam and abdullah
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

{{-- <script src="../scripts/navbar.js"></script>
<script src="../scripts/individualpage.js"></script> --}}