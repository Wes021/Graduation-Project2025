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
          <li><a href="{{route('index')}}"><span class="material-symbols-outlined"> photo_library </span>Management</a></li>
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
          <div class="appointment-child">
            @if($appointments->isEmpty())
            <p>You have no appointments.</p>
        @else
            <table class="table">
                <thead>
                    <tr>
                        <th>Client Name</th>
                        <th>Mobile Number</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Assigned to</th>
                        <th>Status</th>
                        
                    </tr>
                </thead>
                <tbody>
                    @foreach($appointments as $appointment)
                        <tr>
                            <td>{{ $appointment->user_name }}</td>
                            <td>{{ $appointment->phone }}</td>
                            <td>{{ $appointment->appointment_date }}</td>
                            <td>{{ $appointment->category_name }}</td>
                            <th>{{$appointment->employee_name}}</th>
                            <th>{{$appointment->status}}</th>
                            <form action="{{ route('changestatus', $appointment->appointmentid) }}" method="POST">
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
                          </form>

                            
                        </tr>
                    @endforeach
                </tbody>
            </table>
        @endif
          </div>
        </div>
      </div>
    </section>

    <script src="../../scripts/studio/apointments.js"></script>
  </body>
</html>
