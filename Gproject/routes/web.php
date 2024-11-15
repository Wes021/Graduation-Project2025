<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;
use App\Models\CategoryApp;
use App\Models\Customer;

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

//////UserAppointment//////
Route::post('/appointment',[CustomerController::class,'userAppointment'])->name('appointmentSubmit');
Route::get('/myappointments',[CustomerController::class,'userAppointments'])->name('myappointments');
Route::get('/appointmentpage',[CustomerController::class,'appIndex'])->name('appointmentpage');
//////UserAppointment//////

/////////CustomerController/////////

/////////AdminController/////////

//////AdminSignUp//////
Route::get('/AdminSignin', [AdminController::class, 'AdminSigninIndex'])->name('AdminSignin');
Route::post('/Adminloginproccss', [AdminController::class, 'AdminSignin'])->name('Adminloginproccss');
Route::get('/Adminlogout', [AdminController::class,'adminLogout'])->name('AdminLogOut');
Route::get('/AdminProfile', [AdminController::class,'adminprofile'])->name('AdminProfile');
//////AdminSignUp//////

//////AdminAppointment//////
Route::get('/diyplayUserAppointment',[AdminController::class,'diyplayUserAppointment'])->name('diyplayUserAppointment');

Route::put('/changestatus/{appointment_id}',[AdminController::class,'changeStatus'])->name('changestatus');
//////AdminAppointment//////
/////////AdminController/////////

/////////Home Page/////////
Route::get('/',function(){
    return view('Home');
})->name('/');
/////////Home Page/////////






// Route::get('/test', function () {
//     return view('Home'); 
// })->name('Home');