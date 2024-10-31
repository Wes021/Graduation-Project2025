<?php

use App\Http\Controllers\AuthController;
use App\Models\customer;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;




// Route::get('/test', function() {
//     return view('index');
// });

Route::resource('customers', CustomerController::class);

Route::get('/process', function(){
    return view('welcome');
})->name('signed')->middleware('userSignin');



Route::get('/signin',[AuthController::class,'signin'])->name('signin')->middleware('userSignin');