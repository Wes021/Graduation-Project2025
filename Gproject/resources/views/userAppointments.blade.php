<!DOCTYPE html>
<html>
  <head>
    <title>Photography Management System</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>
    <link rel="stylesheet" href="frontend/styles/studio/apointments.css" />
    <link rel="stylesheet" href="frontend/styles/studio/navbar.css" />
    <link rel="icon" href="frontend/images/logo-without-bg.png" type="image/x-icon">

    <style>
      /* Modal styles */
      .modal {
          display: none; /* Hidden by default */
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
          justify-content: center;
          align-items: center;
      }

      .modal-content {
          background: #fff;
          padding: 20px;
          border-radius: 5px;
          width: 400px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          text-align: center;
      }

      .close {
          color: #aaa;
          float: right;
          font-size: 24px;
          font-weight: bold;
          cursor: pointer;
      }

      .close:hover,
      .close:focus {
          color: red;
          text-decoration: none;
          cursor: pointer;
      }
  </style>
  </head>
  <body>
    <!-- ! ============================ NAVBAR ================================= -->
    <section>
      <div class="sidenav">
        <a class="logo-a-tag" href="../studio/DashBoard.html"><img src="frontend/images/logo-without-bg.png" alt=""></a>
        <ul class="sidenav-list">
          
          <li><a href="{{route('UserProfile')}}"><span class="material-symbols-outlined">account_circle</span>Profile</a></li>
          <li><a href="../studio/albums.html"><span class="material-symbols-outlined"> photo_library </span>Albums</a></li>
          <li><a href="#"><span class="material-symbols-outlined"> beenhere </span>Appointments</a></li>
          <li onclick="logout()"><a href="{{route('UserLogout')}}"><span class="material-symbols-outlined"> logout </span>Logout</a></li>
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
            {{-- <div class="sort_filter">
              <select name="status-filter" id="status-filter">
                <option value="Pending">Pending</option>
                <option value="Accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
              </select>
              <input type="date" name="date-filter" id="date-filter">
            </div> --}}
          </div>
          <div class="appointment-child">
            @if($appointments->isEmpty())
            <p>You have no appointments.</p>
        @else
            <table class="table">
                <thead>
                    <tr>
                        <th>Your Name</th>
                        <th>Mobile Number</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Assigned to</th>
                        <th>contact</th>
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
                            <th>{{$appointment->em_phone}}</th>
                            <th>{{$appointment->status}}</th>
                            
                            <th><form action="{{ route('changestatuss', $appointment->appointment_id) }}" method="POST">
                              @csrf
                              @method('PATCH') <!-- Use PATCH if you're updating the resource -->
                              <button type="submit" class="btn btn-danger">Cancel</button>
                        </th>
                          </form>
                          <th><button id="editBtn">Edit</button>

                            <!-- Modal -->
                            <div id="editModal" class="modal">
                                <div class="modal-content">
                                    <span class="close">&times;</span>
                                    <h2>Edit Item</h2>
                                    <form action="/edit-item" method="POST">
                                        <label for="day">edit day to:</label>
                                        <input type="date" id="itemName" name="time" required>
                                        <br><br>
                                        <label for="time">Details:</label>
                                        <input type="time" name="time">
                                        <br><br>
                                        <label for="category">category</label>
                                        <select name="categotry" id="">
                                          <option value="">Select</option>
                                          <option value="1"></option>
                                          <option value="2"></option>
                                          <option value="3"></option>

                                        </select>
                                        <button type="submit">Save Changes</button>
                                    </form>
                                </div>
                            </div></th>
                            

                            
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
    <script>
      // Get modal elements
      const modal = document.getElementById('editModal');
      const btn = document.getElementById('editBtn');
      const closeBtn = document.querySelector('.close');

      // Open modal
      btn.onclick = () => {
          modal.style.display = 'flex';
      };

      // Close modal
      closeBtn.onclick = () => {
          modal.style.display = 'none';
      };

      // Close modal when clicking outside content
      window.onclick = (event) => {
          if (event.target == modal) {
              modal.style.display = 'none';
          }
      };
  </script>
  </body>
</html>
