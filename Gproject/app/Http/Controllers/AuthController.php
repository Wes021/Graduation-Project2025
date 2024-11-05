<?php

namespace App\Http\Controllers;

use App\Models\Customer; 
use App\Models\Admin;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use function Illuminate\Log\log;

class AuthController extends Controller
{
    public function signinIndex()
    {
        return view('signin'); 
    }

    public function login(Request $request){

        $request->validate([
            'username'=>'required|string',
            'password'=>'required|string'   
        ]);

        $username=$request->input('username');
        $password=$request->input('password');

        $user=DB::table('user')->where('username', $username)->first();
    

        if($user && $user->password===$password){
        //    session([
        //     $userId=$user->id;
        //     $usermainname=$user->name;
        //     $userphone=$user->phone;
        //     $useraddress=$user->address;
        //    ]);

            $request->session()->put('Cuser', [
            $userId=$user->user_id,
            $usermainname=$user->name,
            $userphone=$user->phone,
            $useraddress=$user->address,
        ]);


            return redirect()->route('getinfo');
        }else{
            return redirect()->back()->with('error', 'Invalid ');
        }

    }




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
            $request->session()->put('user', $request->input('username'));
            return redirect()->route('getinfo');
        } else{
            return redirect()->back()->with('error', 'wrong input');
        }

        $request->session()->put('user', $request->input('username'));  
         
    }

    public function displayinfo(Request $request){
        
        
    if (session()->has('Cuser')) {
        $userData = session('Cuser'); 
        return view('userProfile', ['userData' => $userData]);
    } else {
        return redirect('/login')->withErrors('Session data not found.');
    }
}

        

        
    }
    

