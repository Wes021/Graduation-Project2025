<?php

use App\Http\Controllers\AuthController;
use App\Models\customer;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;


/////////CustomerController/////////
Route::get('/usersignup',[CustomerController::class,'Index'])->name('usersignup');
Route::post('/usersignuproccss',[CustomerController::class,'SignUpUser'])->name('usersignuproccss');
Route::get('/usersignin',[CustomerController::class,'UsersigninIndex'])->name('usersignin');
Route::post('/usersigninroccss',[CustomerController::class,'Usersignin'])->name('usersigninroccss');
Route::get('/Profile',[CustomerController::class,'userprofile'])->name('UserProfile');
/////////CustomerController/////////


/////////AuthController/////////
// Route::get('/signin',[AuthController::class,'signinIndex'])->name('signin');

// Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::get('/AdminSignin', [AuthController::class, 'AdminSigninIndex'])->name('AdminSignin');

Route::post('/Adminloginproccss', [AuthController::class, 'AdminSignin'])->name('Adminloginproccss');

Route::get('/getinfo',[AuthController::class,'displayinfo'])->name('getinfo');
/////////AuthController/////////



Route::get('/profile', function () {
    return view('userProfile'); 
})->name('profile');