<?php
namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;

use App\Models\Address;
use App\Models\Admin;
use App\Models\Appointments;
use App\Models\AppointmentTime;
use App\Models\CategoryApp;
use App\Models\Customer;
use App\Models\Location;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CustomerController extends Controller
{

    public function Index(){
        return view('UserView/signup');
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public function appIndex(){
        return view('UserView/appointment');
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    public function SignUpUser(Request $request){
        try{
        $validateData=$request->validate([
            'name' =>  'required|string|max:255',
            'username'=> 'required|string|max:255|unique:user,username',
            'password'=> 'required|max:255|unique:user,password',
            'phone'=> 'required|string|max:255|unique:user,phone',
            'gender'=>'required',
            

            'governorate'=>'string|max:255',
            'city'=>'string|max:255',
            'street'=>'string|max:255',
            
        ]);

        
        $address=new Address();
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
        $customer->address_Id = $address->address_Id;
        
        $customer->save();
        

        return redirect()->route('usersignin');
    }
    catch(Exception $e){
        return redirect()->back()->with('error','Sign up faild, check your inserted info.'.$e->getMessage())->withInput();
    }
         
        
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public function UsersigninIndex()
    {
        return view('UserView/signin'); 
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    

    public function Usersignin(Request $request){
        try{
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


            return redirect()->route('/');
        }
        else{
            return redirect()->back()->with('error', 'The Username or password you entered is wrong ');
        }
    }catch(Exception $e){
        redirect()->back()->with('error','Sign in faild, check your inserted info.'.$e->getMessage());
    }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    public function userprofile(Request $request){
        try{
        
        if (session()->has('Cuser')) {
            $userData = session('Cuser'); 
            return view('UserView/userProfile', ['userData' => $userData]);
        } else {
            return redirect('/usersignin')->withErrors('Session data not found.');
        }
    } catch(Exception $e){
        redirect()->back()->with('error','Sign up faild, check your inserted info.'.$e->getMessage())->withInput();
    }
    }


    

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    

    public function userLogout(Request $request){
        try{

        $request->session()->forget('Cuser');
        

        return redirect()->route('usersignin')->with('success', 'Logged out successfully');
        } catch(Exception $e){
            redirect()->back()->with('error','Sign up faild, check your inserted info.'.$e->getMessage())->withInput();
        }
    }


    

    
   

}
