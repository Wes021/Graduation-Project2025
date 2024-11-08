<?php

use App\Http\Controllers\AdminController;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;


/////////CustomerController/////////

//////UserSignUp//////
Route::get('/usersignup',[CustomerController::class,'Index'])->name('usersignup');
Route::post('/usersignuproccss',[CustomerController::class,'SignUpUser'])->name('usersignuproccss');
//////UserSignUp//////

//////UserSignIn//////
Route::get('/usersignin',[CustomerController::class,'UsersigninIndex'])->name('usersignin');
Route::post('/usersigninroccss',[CustomerController::class,'Usersignin'])->name('usersigninroccss');
Route::get('/Userlogout',[CustomerController::class, 'userLogout'])->name('UserLogout');
Route::get('/UserProfile',[CustomerController::class,'userprofile'])->name('UserProfile');
//////UserSignIn//////

/////////CustomerController/////////

/////////AdminController/////////

//////AdminSignUp//////
Route::get('/AdminSignin', [AdminController::class, 'AdminSigninIndex'])->name('AdminSignin');
Route::post('/Adminloginproccss', [AdminController::class, 'AdminSignin'])->name('Adminloginproccss');
Route::get('/Adminlogout', [AdminController::class,'adminLogout'])->name('AdminLogOut');
Route::get('/AdminProfile', [AdminController::class,'adminprofile'])->name('AdminProfile');
//////AdminSignUp//////

/////////AdminController/////////

/////////Home Page/////////
Route::get('/',function(){
    return view('Home');
})->name('/');
/////////Home Page/////////





Route::get('/profile', function () {
    return view('userProfile'); 
})->name('profile');