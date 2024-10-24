<?php

namespace App\Http\Controllers;

use App\Models\customer;
use Illuminate\Http\Request;

class UserController extends Controller
{
     // Store a new user in the database
     public function store(Request $request)
     {
         // Validate the form input
         $validatedData = $request->validate([
             'name' => 'required|max:255',
             'email' => 'required|email|unique:users',
             'password' => 'required|min:6',
         ]);
 
         // Create a new user and save it to the database
         customer::create([
             'name' => $validatedData['name'],
             'email' => $validatedData['email'],
             'password' => bcrypt($validatedData['password']), // Encrypt the password
         ]);
 
         // Redirect back to a list of users or a success page
         return redirect()->route('users.index')->with('success', 'User added successfully!');
     }
}
