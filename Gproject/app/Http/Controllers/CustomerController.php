<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Appointments;
use App\Models\AppointmentTime;
use App\Models\CategoryApp;
use App\Models\Customer;
use App\Models\Location;
use Exception;
use Illuminate\Contracts\Support\ValidatedData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CustomerController extends Controller
{

    public function Index(){
        return view('signup');
    }


    public function SignUpUser(Request $request){
        $validateData=$request->validate([
            'name' =>  'required|string|max:255',
            'username'=> 'required|string|max:255|unique:user,username',
            'password'=> 'required|max:255|unique:user,password',
            'phone'=> 'required|string|max:255|unique:user,phone',
            'gender'=>'required',
            // 'address'=>'required|string|max:255',

            'governorate'=>'string|max:255',
            'city'=>'string|max:255',
            'street'=>'string|max:255',
            // 'address_Id'=>'string|max:255'
        ]);

        try{
        $address=new Address();
        // $address->address_Id=$validateData['address_Id'];
        $address-> governorate=$validateData['governorate'];
        $address->city=$validateData['city'];
        $address->street=$validateData['street'];
        

        $address->save();


        $customer =new Customer();
        
        $customer->name=$validateData['name'];
        $customer->username=$validateData['username'];
        $customer->password=$validateData['password'];
        $customer->phone=$validateData['phone'];
        $customer->gender=$validateData['gender'];
        // $customer->address=$validateData['address'];
        $customer->address_Id = $address->address_Id;
        
        $customer->save();
        

        return redirect()->route('usersignin');
    }
    catch(Exception $e){
        return redirect()->back()->with('error','Sign up faild, check your inserted info.'.$e->getMessage())->withInput();
    }
         
        
    }

    public function UsersigninIndex()
    {
        return view('signin'); 
    }

    public function Usersignin(Request $request){
        $request->validate([
            'username'=>'required|string',
            'password'=>'required|string'   
        ]);

        $username=$request->input('username');
        $password=$request->input('password');

        $user=DB::table('user')->where('username', $username)->first();
        
        

        if($user && $user->password===$password){
       
            $userId=$user->user_id;
            $userdata = DB::table('user')
        ->leftJoin('address', 'user.address_id', '=', 'address.address_id')
        ->where('user.user_id', $userId)
        ->first();

            $request->session()->put('Cuser',$userdata);


            return redirect()->route('userProfile');
        }else{
            return redirect()->back()->with('error', 'Invalid ');
        }
    }

    public function userprofile(Request $request){
        
        
        if (session()->has('Cuser')) {
            $userData = session('Cuser'); 
            return view('userProfile', ['userData' => $userData]);
        } else {
            return redirect('/usersignin')->withErrors('Session data not found.');
        }
    }

    

    public function userLogout(Request $request){
        $request->session()->forget('Cuser');
        

        return redirect()->route('usersignin')->with('success', 'Logged out successfully');
    }


    public function userAppointment(Request $request){
        $category=new CategoryApp();
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
    

        $appointmenttime->date=$validatedData['date'];
        $appointmenttime->time=$validatedData['time'];
        
        
        
        $appointment->appointment_time_id = $appointmenttime->appointment_time_id;
        $appointment->category_app_id = $request->input('categories');
        $appointment->location_id = $location->location_id;
        $appointment->user_id = $userData['user_id'];
        $location->save();
        $appointmenttime->save();
        $appointment->save();
        
        
        



        
    }
   

}
