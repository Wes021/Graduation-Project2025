<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Exception;
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
            'address'=>'required|string|max:255'
        ]);
        try{
        $customer =new Customer();
        $customer->name=$validateData['name'];
        $customer->username=$validateData['username'];
        $customer->password=$validateData['password'];
        $customer->phone=$validateData['phone'];
        $customer->address=$validateData['address'];
        $customer->save();

        return redirect()->route('usersignin');
        } catch(Exception $e){
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
       

            $request->session()->put('Cuser', [
            $userId=$user->user_id,
            $usermainname=$user->name,
            $userphone=$user->phone,
            $useraddress=$user->address,
        ]);


            return redirect()->route('UserProfile');
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

}
