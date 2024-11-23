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
      <h1>Add Product</h1>

      <form action="{{route('addproduct')}}" method="post">
        @csrf
        <label for="product_name">product name</label>
        <input type="text" name="product_name" id=""><br>

        <label for="price">price</label>
        <input type="text" name="price" id=""><br>

        <label for="description">description</label>
        <input type="text" name="description" id=""><br>

        <label for="quantity">quantity</label>
        <input type="number" name="quantity" id=""><br> 


        <input type="submit" value="Add">

      </form>

        {{-- <section>
          <h1>edit Product</h1>
    
          <form action="{{route('editproduct')}}" method="post">
            @csrf
            @method('post')

            <label for="product_id">Product ID</label>
            <input type="number" name="product_id">

            <label for="product_name">product name</label>
        <input type="text" name="product_name" id=""><br>

        <label for="price">price</label>
        <input type="text" name="price" id=""><br>

        <label for="description">description</label>
        <input type="text" name="description" id=""><br>

        <label for="quantity">quantity</label>
        <input type="number" name="quantity" id=""><br>
    
            <input type="submit" value="Add">
    
    
        </form>

        

    </section> --}}

    <section>
      <h1>Delete Product</h1>
      <form action="{{route('deleteproducts')}}" method="POST">
        @csrf
          @method('post')
          <label for="product_id">product_id</label>
          <input type="number" name="product_id" id="">

          <input type="submit" value="delete">
      </form>
    </section>
             
        </div>
      </div>
    </div>
            

    <script src="../../scripts/studio/apointments.js"></script>
  </body>
</html>
