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
            $request->session()->put('user', $request->input('username'));
            return  redirect()->back()->with('good', 'Invalid ');
        } else{
            return redirect()->back()->with('error', 'wrong input');
        }

        $request->session()->put('user', $request->input('username'));  
         
    }

        

        
    }
    

