<?php

use App\Http\Controllers\Admin\EmployeeManagment;
use App\Http\Controllers\Employee\AdminController;
use App\Http\Controllers\AppointmentPriceController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\CustomerController;
use App\Http\Controllers\Admin\ManagerController;
use App\Http\Controllers\Admin\PricesandPromotionManagment;
use App\Http\Controllers\Admin\ProductManagment;
use App\Http\Controllers\MananerController;
use App\Http\Controllers\User\UserAppointments;
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
Route::post('/appointment',[UserAppointments::class,'userAppointment'])->name('appointmentSubmit');
Route::get('/myappointments',[UserAppointments::class,'userAppointments'])->name('myappointments');
Route::get('/appointmentpage',[CustomerController::class,'appIndex'])->name('appointmentpage');
Route::patch('/changestatuss/{appointment_id}/cancel', [UserAppointments::class, 'cancel'])->name('changestatuss');
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
// Route::get('/',function(){
//     return view('Home');
// })->name('/');
/////////Home Page/////////


/////////MnagerController/////////

//////Prices&Promotion//////
Route::get('/index', [PricesandPromotionManagment::class, 'displayPrices'])->name('index');
Route::post('/enetrprice', [PricesandPromotionManagment::class, 'addPrice'])->name('enetrprice');
Route::post('/update', [PricesandPromotionManagment::class, 'editPrices'])->name('update');
Route::post('/updatepromotion',[PricesandPromotionManagment::class, 'editpromotion'])->name('updatepromotion');
Route::post('/uptadepro',[PricesandPromotionManagment::class, 'addpromotion'])->name('uptadepro');
Route::patch('/cancel/{price_id}/cancelPromotion', [PricesandPromotionManagment::class, 'cancelPromotion'])->name('cancel');
//////Prices&Promotion//////

//////EmployeeManagment//////
Route::get('/indexx',[EmployeeManagment::class,'index'])->name('indexx');
Route::post('/addemployee',[EmployeeManagment::class,'addEmployee'])->name('addemployee');
Route::post('/editemployee',[EmployeeManagment::class, 'editEmployee'])->name('editemployee');
Route::post('/deleteemployee', [EmployeeManagment::class,'deleteemployee'])->name('deleteemployee');
//////EmployeeManagment//////

//////ProductManagment//////

//////ProdutManagment//////

Route::get(('/addproductindex'),[ProductManagment::class,'productindex'])->name('addproductindex');
Route::post(('/addproduct'),[ProductManagment::class,'addProduct'])->name('addproduct');

Route::get('/editproductt/{product_id}', [ProductManagment::class, 'showEditForm'])->name('showEditForm');
Route::put(('/editproduct/{product_id}'),[ProductManagment::class,'editProduct'])->name('editproduct');

Route::post(('/deleteproducts'),[ProductManagment::class,'deleteProduct'])->name('deleteproducts');
Route::get(('/displayProducts'),[ProductManagment::class,'displayProducts'])->name('displayProducts');

/////////ManagerController/////////



// Route::get('/{any}', function () {
//     return view('react');
// })->where('any', '.*');
Route::get('/{any}', function () {
    return file_get_contents(public_path('dist/index.html')); // Serve the React index.html
})->where('any', '.*');


// Route::get('/test/edit', function () {
//     return view('AdminManagment'); 
// });