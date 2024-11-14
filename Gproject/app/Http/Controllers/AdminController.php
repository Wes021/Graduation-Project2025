<?php

namespace App\Http\Controllers;

use App\Models\Customer; 
use App\Models\Admin;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use function Illuminate\Log\log;

class AdminController extends Controller
{
    


    public function AdminSigninIndex()
    {
        return view('signinAdmin');
    }

    public function AdminSignin(Request $request)
    {
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

    public function adminprofile(Request $request){
        
        if(session()->has('Auser')){
            $admindata=session('Auser');
            return view('AdminProfile',['admindata'=>$admindata]);
        } else{
            return redirect()->route('AdminSignin')->withErrors('Session data not found.');
        }

    }

    public function adminLogout(Request $request){
        $request->session()->forget('Auser');

        return redirect()->route('AdminSignin')->with('success', 'Logged out successfully');
    }

    public function diyplayUserAppointment(Request $request){
        $adminData =session('Auser');
        $adminName=$adminData['username'];
        $adminapp = DB::table('employee')->where('username', $adminName)->first();

        if($adminapp){
            $appointments = DB::table('appointments')
            ->leftJoin('user', 'Appointments.user_id', '=', 'user.user_id')  // Join with the 'users' table
            ->leftJoin('employees', 'Appointments.employee_id', '=', 'employees.employee_id')  // Join with the 'employees' table
            ->leftJoin('category_app', 'Appointments.category_app_id', '=', 'category_app.category_app_id')  // Join with the 'categories' table
            ->leftJoin('location', 'Appointments.location_id', '=', 'location.location_id')  // Join with the 'locations' table
            ->leftJoin('appointment_time', 'Appointments.appointment_time_id', '=', 'appointment_time.appointment_time_id')  // Join with the 'appointment_times' table
            ->where('appointments.employee_id', $adminapp->employee_id)  // Filter appointments by user_id
            ->select('Appointments.appointment_id','user.phone as phone' ,'user.name as user_name', 'employees.name as employee_name', 'category_app.category_name as category_name', 'appointment_time.date as appointment_date')
            ->get();

            return view('adminAppointment', compact('appointments'));
        }else{
            return redirect()->route('login')->withErrors(['error' => 'User not found or session expired']);
        }
    }
        

        
    }
    