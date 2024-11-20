<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AppointmentPriceController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ManagerController;
use App\Http\Controllers\MananerController;
use App\Models\Appointments;

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
Route::patch('/changestatuss/{appointment_id}/cancel', [CustomerController::class, 'cancel'])->name('changestatuss');
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


/////////MnagerController/////////

//////Prices&Promotion//////
Route::get('/index', [ManagerController::class, 'displayPrices'])->name('index');
Route::post('/enetrprice', [ManagerController::class, 'addPrice'])->name('enetrprice');
Route::post('/update', [ManagerController::class, 'editPrices'])->name('update');
Route::post('/updatepromotion',[ManagerController::class, 'editpromotion'])->name('updatepromotion');
Route::post('/uptadepro',[ManagerController::class, 'addpromotion'])->name('uptadepro');
Route::patch('/cancel/{price_id}/cancelPromotion', [ManagerController::class, 'cancelPromotion'])->name('cancel');
//////Prices&Promotion//////

//////EmployeeManagment//////
Route::get('/indexx',[ManagerController::class,'index'])->name('indexx');
Route::post('/addemployee',[ManagerController::class,'addEmployee'])->name('addemployee');
Route::post('/editemployee',[ManagerController::class, 'editEmployee'])->name('editemployee');
Route::post('/deleteemployee', [ManagerController::class,'deleteemployee'])->name('deleteemployee');
//////EmployeeManagment//////

/////////ManagerController/////////



// Route::get('/employees', [ManagerController::class, 'index'])->name('employees.index');
// Route::get('/employee/create', [ManagerController::class, 'create'])->name('employee.create');
// Route::post('/employee/store', [ManagerController::class, 'store'])->name('employee.store');
// Route::get('/employee/{id}/edit', [ManagerController::class, 'edit'])->name('employee.edit');
// Route::post('/employee/{id}/update', [ManagerController::class, 'update'])->name('employee.update');
// Route::post('/employee/{id}/delete', [ManagerController::class, 'destroy'])->name('employee.destroy');


// Route::get('/test/edit', function () {
//     return view('AdminManagment'); 
// });