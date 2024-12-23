<!DOCTYPE html>
<html>
  <head>
    <title>Photography Management System</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="{{ asset('frontend/styles/studio/profile.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/styles/studio/navbar.css') }}">
    <link rel="icon" href="../../images/logo-without-bg.png" type="image/x-icon">
  </head>
  <body>
    <!-- ! ============================ NAVBAR ================================= -->
    <section>
      <div class="sidenav">
        <a class="logo-a-tag" href="../studio/DashBoard.html"><img src="../../images/logo-without-bg.png" alt=""></a>
        <ul class="sidenav-list">
          {{-- <li><a href="../studio/DashBoard.html"><span class="material-symbols-outlined"> dashboard_customize </span>DashBoard</a></li> --}}
          <li><a href="#"><span class="material-symbols-outlined">account_circle</span>Profile</a></li>
          <li><a href="../studio/albums.html"><span class="material-symbols-outlined"> photo_library </span>Albums</a></li>
          <li><a href="{{route('myappointments')}}"><span class="material-symbols-outlined"> beenhere </span>Appointments</a></li>

          <li  onclick="logout()"><a href="{{route('UserLogout')}}"><span class="material-symbols-outlined"> logout </span>Logout</a></li>

        </ul>
      </div>
    </section>
    <!-- ! ============================ MAIN ================================= -->
    <section>
      <div class="main">
        <div class="profile-maindiv">
          <div class="profile-child-div">
           
            <div>
              <p>name: {{ session('Cuser')->name }}</p>

              <p>username: {{ session('Cuser')->username }}</p>

              <p>phone:{{ session('Cuser')->phone }}</p>
              

              <p>gender: {{ session('Cuser')->gender }}</p>
            
            </div>

            <div>
              <p>governorate: {{ session('Cuser')->governorate }}</p>
              

              <p>city: {{ session('Cuser')->city }}</p>
              

              <p>street: {{ session('Cuser')->street }}</p>
              
            </div>
       
        
          </div>
          <div class="profile-other-info">
            <div class="profile-other-info-1">
              <div class="more-info">
                <h2>Other Information</h2>
                <ul>
                  <div class="more-info-childs">
                    <li><i class="fa-solid fa-user greenli"></i></li>
                    <div id="name">Kunal</div>
                  </div>
                  <div class="more-info-childs">
                    <li><i class="fa-solid fa-venus-mars pinkli"></i></li>
                    <div id="photographer-gender">Male</div>
                  </div>
                  <div class="more-info-childs">
                    <li><i class="fa-sharp fa-solid fa-calendar-days greenli"></i></li>
                    <div id="years-old">22</div>
                  </div>
                  <div class="more-info-childs">
                    <li><span class="material-symbols-outlined pinkli">local_police</span></li>
                    <div>Photographer</div>
                  </div>
                  <div class="more-info-childs">
                    <li><i class="fa-sharp fa-solid fa-house greenli"></i></li>
                    <div id="city">Kolkata</div>
                  </div>
                </ul>
              </div>
            </div>
            <div class="profile-other-info-2">
              
            </div>
          </div>
        </div>
      </div>
    </section>

     <!-- !-------------------------------- POPUP PAGE ------------------------------ -->
     <section>        
      <div class="bg-model">
          <div class="model-content">
              <div class="top_part">
                <div class="header">Edit your profile</div>
                <div class="close" onclick="closeProfileForm()"><span class="material-symbols-outlined">close</span></div>
              </div>
              <hr>
              <form action="" id="edit_form">
                <div class="profile_details">
                  <label>Name</label>
                  <input type="text" class="mrgn-btm edit-name" placeholder="Enter your name" id="edit_name">
                  <label>Mobile Number</label>
                  <input type="text" class="mrgn-btm phone_number" placeholder="Enter new phone number" id="edit_number">
                  
                      <label>Price</label>
                      <input type="number"  class="mrgn-btm"  placeholder="Price" id="edit_price"/>
                    </div>
                  <hr>
                  <div class="button_div">
                      <button class="close_bt" onclick="closeProfileForm()">Cancel</button>
                      <input class="submit_bt" value="Edit" type="submit">
                  </div>
              </form>
          </div>
      </div>
  </section>

    {{-- <script src="../../scripts/studio/profile.js"></script> --}}
  </body>
</html>
