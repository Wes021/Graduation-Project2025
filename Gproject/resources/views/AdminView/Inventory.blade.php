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
            <table class="table">
                <thead>
                    <tr>
                        <th>Inventory ID</th>
                        <th>Inventory Quantity</th>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product description</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>statusin</th>
                        
                    </tr>
                </thead>
                <tbody>
                    @foreach($products as $product)
                        <tr>
                            <td>{{ $product->inventoryid }}</td>
                            <td>{{ $product->quantity_in_stock }}</td>
                            <td>{{ $product->product_id }}</td>
                            <td>{{ $product->product_name }}</td>
                            <th>{{$product->price}}</th>
                            <th>{{$product->description}}</th>
                            <th>{{$product->category_name}}</th>
                            <th>{{$product->produt_status_name}}</th>
                            <th>{{$product->inventory_status_name}}</th>
                            
                            <th><form action="{{ route('showEditForm', $product->product_id) }}" method="GET" style="display: inline;">
                                <button type="submit" class="btn btn-primary">Edit</button>
                            </form></a>
                            </th>
                            
                            {{-- <form action="{{ route('changestatus', $appointment->appointmentid) }}" method="POST">
                              @csrf
                              @method('PUT')
                            <th><select name="statuses">
                              <option value="">Select an item</option>
                              <option value="1" {{ $appointment->appointment_statuses_id == 1 ? 'selected' : '' }}>Confirmed</option>
                              <option value="2" {{ $appointment->appointment_statuses_id == 2 ? 'selected' : '' }}>Canceled</option>
                              <option value="3" {{ $appointment->appointment_statuses_id == 3 ? 'selected' : '' }}>Completed</option>
                          </select>
                          <button type="submit">Change</button>
                        </th>
                            <th></th>
                          </form> --}}
        
                            
                        </tr>
                    @endforeach
                </tbody>
            </table>
             
        </div>
      </div>
    </div>
            

    <script src="../../scripts/studio/apointments.js"></script>
  </body>
</html>
