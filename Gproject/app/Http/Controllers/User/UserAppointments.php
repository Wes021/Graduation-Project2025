<?php

namespace App\Http\Controllers\User;
use App\Models\Address;
use App\Models\Admin;
use App\Models\Appointments;
use App\Models\AppointmentTime;
use App\Models\CategoryApp;
use App\Models\Customer;
use App\Models\Location;
use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserAppointments extends Controller
{
    public function userAppointments(Request $request){
        try{
                $userData = (array) session('Cuser');
                $userName=$userData['username'];
                $userapp=$userapp = DB::table('user')->where('username', $userName)->first();
        
                
                if($userapp){
                    $appointments = DB::table('appointments')
                    ->leftJoin('user', 'Appointments.user_id', '=', 'user.user_id')  // Join with the 'users' table
                    ->leftJoin('employees', 'Appointments.employee_id', '=', 'employees.employee_id')  // Join with the 'employees' table
                    ->leftJoin('category_app', 'Appointments.category_app_id', '=', 'category_app.category_app_id')  // Join with the 'categories' table
                    ->leftJoin('location', 'Appointments.location_id', '=', 'location.location_id')  // Join with the 'locations' table
                    ->leftJoin('appointment_time', 'Appointments.appointment_time_id', '=', 'appointment_time.appointment_time_id')  // Join with the 'appointment_times' table
                    ->leftJoin('appointment_statuses','Appointments.appointment_statuses_id','=', 'appointment_statuses.appointment_statuses_id' )
                    ->where('appointments.user_id', $userapp->user_id)  // Filter appointments by user_id
                    ->select('Appointments.appointment_id as appointment_id','user.phone as phone' ,'user.name as user_name', 'employees.name as employee_name','employees.phone as em_phone', 'category_app.category_name as category_name', 'appointment_time.date as appointment_date','appointment_statuses.status_name as status','appointment_statuses.appointment_statuses_id as appointment_statuses_id')
                    ->get();
        
                    return view('UserView/userAppointments', compact('appointments'));
                }else{
                    return redirect()->route('usersignin')->withErrors(['error' => 'User not found or session expired']);
                }
            }catch(Exception $e){
                redirect()->back()->with('error','Sign up faild, check your inserted info.'.$e->getMessage())->withInput();
            }
     }


     public function userAppointment(Request $request){
        try{
        
        $appointmenttime=new AppointmentTime();
        $appointment= new Appointments();
        $location=new Location();

        $validatedData = $request->validate([
            'categories' => 'required|exists:category_app,category_app_id',
            'date' => 'required|date',              
            'time' => 'required|date_format:H:i', 
               
        ]);
    
        
            $userData = (array) session('Cuser'); 

           

            $existingAppointment = Appointments::where('user_id', $userData['user_id'])->first();

        if ($existingAppointment) {
            
         return redirect()->back()->withErrors(['error' => 'You can only create one appointment.']);
        }
        
        //$assignEmployee=Admin::inRandomOrder()->first();

        $appointmenttime->date=$validatedData['date'];
        $appointmenttime->time=$validatedData['time'];
        
        
        
        $appointment->appointment_time_id = $appointmenttime->appointment_time_id;
        $appointment->category_app_id = $request->input('categories');
        $appointment->location_id = $location->location_id;
        $appointment->user_id = $userData['user_id'];
        //$appointment->employee_id=$assignEmployee->employee_id;
        $location->save();
        $appointmenttime->save();
        $appointment->save();
    

        $assignEmployees = Admin::inRandomOrder()->limit(3)->get(); // Select 3 random employees
foreach ($assignEmployees as $employee) {
    DB::table('employees')
        ->where('employee_id', $employee->employee_id) // Update only this specific employee
        ->update(['appointment_id' => $appointment->appointment_id]);
}

    }catch(Exception $e){
        redirect()->route('usersignin')->with('error','Sign up faild, check your inserted info.'.$e->getMessage())->withInput();
    }
        
    }


    public function cancel(Request $request, $appointment_id){

        $appointment = DB::table('Appointments')->where('appointment_id', $appointment_id)->first();
    
        if (!$appointment) {
            return redirect()->back()->with('error', 'Appointment not found.');
        }
    
        DB::table('Appointments')
            ->where('appointment_id', $appointment_id)
            ->update([
                'appointment_statuses_id' => 2,
            ]);
    
        return redirect()->back()->with('success', 'Appointment status updated successfully!');
    }


    
    public function editAppointment(Request $request){
            $request->validate([
                'statuses' => 'required|integer|in:1,2,3', // Validate the status input
            ]);
    }

}
