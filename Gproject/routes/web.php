<?php

use App\Http\Controllers\AuthController;
use App\Models\customer;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;


/////////CustomerController/////////
Route::resource('customers', CustomerController::class);
/////////CustomerController/////////


/////////AuthController/////////
Route::get('/signin',[AuthController::class,'signinIndex'])->name('signin');

Route::post('/login', [AuthController::class, 'login'])->name('login');
/////////AuthController/////////



Route::get('/main', function () {
    return view('main'); // Replace with your actual main view
})->name('main');