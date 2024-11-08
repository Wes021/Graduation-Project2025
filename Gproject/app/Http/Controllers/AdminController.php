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

        

        
    }
    