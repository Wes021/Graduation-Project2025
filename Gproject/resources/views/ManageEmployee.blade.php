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
          <li><a href="../studio/DashBoard.html"><span class="material-symbols-outlined"> dashboard_customize </span>Add employee</a></li>
          <li><a href=""><span class="material-symbols-outlined">account_circle</span>Profile</a></li>
          <li><a href=""><span class="material-symbols-outlined"> photo_library </span>Appointment Management</a></li>
          <li><a href=""><span class="material-symbols-outlined"> photo_library </span>store Management</a></li>
          <li><a href=""><span class="material-symbols-outlined"> beenhere </span>Appointments</a></li>

          <li><a href="{{route('AdminLogOut')}}"><span class="material-symbols-outlined"> logout </span>Logout</a></li>

        </ul>
      </div>
    </section>
    <!-- ! ============================ NAVBAR ================================= -->
    <div class="main">
      <div class="appointment-parent">
        <div class="appointment-head">
    <section>
      <h1>Add emoloyee</h1>

      <form action="{{route('addemployee')}}" method="post">
        @csrf
        <label for="name">Name</label>
        <input type="text" name="name" id=""><br>

        <label for="username">Username</label>
        <input type="text" name="username" id=""><br>

        <label for="password">Password</label>
        <input type="text" name="password" id=""><br>

        <label for="phone">Phone</label>
        <input type="text" name="phone" id=""><br> 

        <label for="email">email</label>
        <input type="email" name="email" id=""><br> 

        <label for="gender">Gender</label>
        <label for="male">Male</label>
        <input type="radio" id="male" name="gender" value="male">

        <label for="femail">Female</label>
        <input type="radio" id="female" name="gender" value="female"><br>

        <input type="submit" value="Add">

      </form>

        <section>
          <h1>edit emoloyee</h1>
    
          <form action="{{route('editemployee')}}" method="post">
            @csrf
            @method('post')
            <label for="userId">user id</label>
            <input type="number" name="userID" id="">

            <label for="name">Name</label>
            <input type="text" name="name" id=""><br>
    
            <label for="username">Username</label>
            <input type="text" name="username" id=""><br>
    
            <label for="password">Password</label>
            <input type="text" name="password" id=""><br>
    
            <label for="phone">Phone</label>
            <input type="text" name="phone" id=""><br> 
    
            <label for="email">email</label>
            <input type="email" name="email" id=""><br> 
    
            <label for="gender">Gender</label>
            <label for="male">Male</label>
            <input type="radio" id="male" name="gender" value="male">
    
            <label for="femail">Female</label>
            <input type="radio" id="female" name="gender" value="female"><br>
    
            <input type="submit" value="Add">
    
    
        </form>

        

    </section>

    <section>
      <h1>Delete</h1>
      <form action="{{route('deleteemployee')}}" method="POST">
        @csrf
          @method('post')
          <label for="userId">user id</label>
          <input type="number" name="userID" id="">

          <input type="submit" value="delete">
      </form>
    </section>
             
        </div>
      </div>
    </div>
            

    <script src="../../scripts/studio/apointments.js"></script>
  </body>
</html>
