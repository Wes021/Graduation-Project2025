<?php

namespace App\Http\Controllers;

use App\Models\Customer; // Assuming this is your model for the customers table

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use function Illuminate\Log\log;

class AuthController extends Controller
{
    public function signinIndex()
    {
        return view('signin'); // The view for your sign-in page
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
            return redirect()->route('main');
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
            return redirect()->route('main');
        } else{
            return redirect()->back()->with('error', 'wrong input');
        }
    }
    
}
