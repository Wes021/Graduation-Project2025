<!DOCTYPE html>
<html>
  <head>
    <title>Photography Management System</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>
    <link rel="stylesheet" href="frontend/styles/studio/apointments.css" />
    <link rel="stylesheet" href="frontend/styles/studio/navbar.css" />
    <link rel="icon" href="frontend/images/logo-without-bg.png" type="image/x-icon">
  </head>
  <body>
    <!-- ! ============================ NAVBAR ================================= -->
    <section>
      <div class="sidenav">
        <a class="logo-a-tag" href="../studio/DashBoard.html"><img src="../../images/logo-without-bg.png" alt=""></a>
        <ul class="sidenav-list">
          <li><a href="../studio/DashBoard.html"><span class="material-symbols-outlined"> dashboard_customize </span>DashBoard</a></li>
          <li><a href="{{route('AdminProfile')}}"><span class="material-symbols-outlined">account_circle</span>Profile</a></li>
          {{-- <li><a href="{{route('')}}"><span class="material-symbols-outlined"> photo_library </span>Management</a></li> --}}
          <li><a href="{{route('diyplayUserAppointment')}}"><span class="material-symbols-outlined"> beenhere </span>Appointments</a></li>

          <li><a href="{{route('AdminLogOut')}}"><span class="material-symbols-outlined"> logout </span>Logout</a></li>

        </ul>
      </div>
    </section>
    <!-- ! ============================ NAVBAR ================================= -->
    <section>
      <div class="main">
        <div class="appointment-parent">
          <div class="appointment-head">
            <div>
              <p>Appointment Details</p> 
            </div>
            <div class="sort_filter">
              <select name="status-filter" id="status-filter">
                <option value="Pending">Pending</option>
                <option value="Accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
              </select>
              <input type="date" name="date-filter" id="date-filter">
            </div>
          </div>
          <div>
            <section>
              <h1>Add a price</h1>

            <form action="{{ route('enetrprice') }}" method="POST">
              @csrf
              <label for="Baseprice">Price</label>
              <input type="text" name="base_price">

              <label for="category_app_id"></label>
              <select name="category_app_id">
                <option value="">Select an item</option>
                <option value="10">In Studio</option>
                <option value="20">Wedding</option>
                <option value="21">Holiday</option>
                <option value="22">Family</option>
                <option value="23">Birthday</option>
                <option value="24">Graduation</option>
                <option value="30">Other</option>
              </select>
              <button type="submit">Submit the new price</button>
            </form>
            </section>

            <section>
              <h1>EDIT</h1>
              <form action="{{ route('update') }}" method="POST">
              @csrf
              {{-- @method("PUT") --}}
              <label for="editBaseprice">Price</label>
              <input type="text" name="editBaseprice" required>
          
              <label for="category_app_id">Select Category</label>
              <select name="category_app_id" required>
                  <option value="">Select an item</option>
                  <option value="10">In Studio</option>
                  <option value="20">Wedding</option>
                  <option value="21">Holiday</option>
                  <option value="22">Family</option>
                  <option value="23">Birthday</option>
                  <option value="24">Graduation</option>
                  <option value="30">Other</option>
              </select>
          
              <input type="submit" value="Update Price">
          </form>
        </section>

        <section>
          <h1>Add, edit and delete promotions</h1>
          <form action="{{route('uptadepro')}}" method="POST">
            @csrf
            {{-- @method("PUT") --}}
            <label for="promotion_price">Price</label>
            <input type="text" name="promotion_price" required>
        
            <label for="category_app_id">Select Category</label>
            <select name="category_app_id" required>
                <option value="">Select an item</option>
                <option value="10">In Studio</option>
                <option value="20">Wedding</option>
                <option value="21">Holiday</option>
                <option value="22">Family</option>
                <option value="23">Birthday</option>
                <option value="24">Graduation</option>
                <option value="30">Other</option>
            </select>
            <input type="submit" value="add">
        </section>
          
          
          </div>

            

    <script src="../../scripts/studio/apointments.js"></script>
  </body>
</html>
