<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Exception;

class AdminController extends Controller
{
    


    public function AdminSigninIndex()
    {
        return view('signinAdmin');
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public function AdminSignin(Request $request)
    {
        try{
        $request->validate([
            'username'=>'required|string',
            'password'=>'required|string'
        ]);

        $userName=$request->input('username');
        $Password=$request->input('password');


        $admin=DB::table('employees')->where('username',$userName)->first();

        if($admin && $admin->password===$Password){
            
            $request->session()->put('Auser',$admin);

            return redirect()->route('AdminProfile');

        } else{
            return redirect()->back()->with('error', 'wrong input');
        }
    }
    catch (Exception $e){
        return redirect()->back()->with('error','Sign up faild, check your inserted info.'.$e->getMessage())->withInput();
    }

    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    public function adminprofile(Request $request){
        try{
        if(session()->has('Auser')){
            $admindata=session('Auser');
            return view('AdminProfile',['admindata'=>$admindata]);
        } else{
            return redirect()->route('AdminSignin')->withErrors('Session data not found.');
        }
    }catch(Exception $e){
        redirect()->back()->with('error','unexpected error'.$e->getMessage())->withInput();
    }
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    

    public function adminLogout(Request $request){
        try{
        $request->session()->forget('Auser');

        return redirect()->route('AdminSignin')->with('success', 'Logged out successfully');
        }catch(Exception $e){
            redirect()->back()->with('error','Faild signing out'.$e->getMessage())->withInput();
        }
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    public function diyplayUserAppointment(Request $request){
        try{
        $adminData =(array)session('Auser');
        $adminName=$adminData['username'];
        $adminapp = DB::table('employees')->where('username', $adminName)->first();
        

        if($adminapp){
            $appointments = DB::table('appointments')
            ->leftJoin('user', 'Appointments.user_id', '=', 'user.user_id')  // Join with the 'users' table
            ->leftJoin('employees', 'Appointments.employee_id', '=', 'employees.employee_id')  // Join with the 'employees' table
            ->leftJoin('category_app', 'Appointments.category_app_id', '=', 'category_app.category_app_id')  // Join with the 'categories' table
            ->leftJoin('location', 'Appointments.location_id', '=', 'location.location_id')  // Join with the 'locations' table
            ->leftJoin('appointment_time', 'Appointments.appointment_time_id', '=', 'appointment_time.appointment_time_id')  // Join with the 'appointment_times' table
            ->leftJoin('appointment_statuses','Appointments.appointment_statuses_id','=', 'appointment_statuses.appointment_statuses_id' )
            ->where('appointments.employee_id', $adminapp->employee_id)  // Filter appointments by user_id
            ->select('Appointments.appointment_id as appointmentid','user.phone as phone' ,'user.name as user_name', 'employees.name as employee_name', 'category_app.category_name as category_name', 'appointment_time.date as appointment_date' ,'appointment_statuses.status_name as status','appointment_statuses.appointment_statuses_id as appointment_statuses_id')
            ->get();

            return view('adminAppointment', compact('appointments'));
        }
    }catch(Exception $e){
        redirect()->back()->with('error','Faild fetching data'.$e->getMessage());
    }
    }
    
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    
    public function changeStatus(Request $request, $appointment_id){
        try{
        $request->validate([
            'statuses' => 'required|integer|in:1,2,3', // Validate the status input
        ]);
    
        // Retrieve the appointment based on the ID
        $appointment = DB::table('Appointments')->where('appointment_id', $appointment_id)->first();
    
        if (!$appointment) {
            return redirect()->back()->with('error', 'Appointment not found.');
        }
    
        // Update the appointment status
        DB::table('Appointments')
            ->where('appointment_id', $appointment_id)
            ->update([
                'appointment_statuses_id' => $request->input('statuses'),
            ]);
    
        return redirect()->back()->with('success', 'Appointment status updated successfully!');

        }catch(Exception $e){
            redirect()->back()->with('error','Error in changing status'.$e->getMessage())->withInput();
        }
    }
        
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
    }
    