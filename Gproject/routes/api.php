<?php
use Illuminate\Routing\Route;
use App\Http\Controllers\Admin\EmployeeManagment as AdminEmployeeManagment;
use App\Http\Controllers\Admin\PricesandPromotionManagment as AdminPricesandPromotionManagment;
use App\Http\Controllers\Admin\ProductManagment as AdminProductManagment;
use App\Http\Controllers\Employee\AdminController as EmployeeAdminController;
use App\Http\Controllers\User\CustomerController as UserCustomerController;
use App\Http\Controllers\User\UserAppointments as UserUserAppointments;

// Customer Routes

    Route::get('/usersignup', [UserCustomerController::class, 'Index'])->name('usersignup');
    Route::post('/usersignuproccss', [UserCustomerController::class, 'SignUpUser'])->name('usersignuproccss');

    Route::get('/usersignin', [UserCustomerController::class, 'UsersigninIndex'])->name('usersignin');
    Route::post('/usersigninroccss', [UserCustomerController::class, 'Usersignin'])->name('usersigninroccss');
    Route::get('/userlogout', [UserCustomerController::class, 'userLogout'])->name('userlogout');
    Route::get('/userprofile', [UserCustomerController::class, 'userprofile'])->name('userprofile');

    Route::get('/appointmentpage', [UserCustomerController::class, 'appIndex'])->name('appointmentpage');
////

// User Appointment Routes

    Route::post('/', [UserUserAppointments::class, 'userAppointment'])->name('appointmentSubmit');
    Route::get('/myappointments', [UserUserAppointments::class, 'userAppointments'])->name('myappointments');
    Route::patch('/changestatuss/{appointment_id}/cancel', [UserUserAppointments::class, 'cancel'])->name('changestatuss');

// Admin Routes

    Route::get('/signin', [EmployeeAdminController::class, 'AdminSigninIndex'])->name('adminsignin');
    Route::post('/loginproccss', [EmployeeAdminController::class, 'AdminSignin'])->name('adminloginproccss');
    Route::get('/logout', [EmployeeAdminController::class, 'adminLogout'])->name('adminlogout');
    Route::get('/profile', [EmployeeAdminController::class, 'adminprofile'])->name('adminprofile');
    Route::get('/appointments', [EmployeeAdminController::class, 'diyplayUserAppointment'])->name('diyplayuserappointment');
    Route::put('/changestatus/{appointment_id}', [EmployeeAdminController::class, 'changeStatus'])->name('changestatus');

// Manager Routes

    // Prices and Promotions
    Route::get('/prices', [AdminPricesandPromotionManagment::class, 'displayPrices'])->name('index');
    Route::post('/enterprice', [AdminPricesandPromotionManagment::class, 'addPrice'])->name('enterprice');
    Route::post('/updateprice', [AdminPricesandPromotionManagment::class, 'editPrices'])->name('updateprice');
    Route::post('/updatepromotion', [AdminPricesandPromotionManagment::class, 'editpromotion'])->name('updatepromotion');
    Route::post('/addpromotion', [AdminPricesandPromotionManagment::class, 'addpromotion'])->name('addpromotion');
    Route::patch('/cancel/{price_id}/cancelPromotion', [AdminPricesandPromotionManagment::class, 'cancelPromotion'])->name('cancelpromotion');

    // Employee Management
    Route::get('/employees', [AdminEmployeeManagment::class, 'index'])->name('indexx');
    Route::post('/addemployee', [AdminEmployeeManagment::class, 'addEmployee'])->name('addemployee');
    Route::post('/editemployee', [AdminEmployeeManagment::class, 'editEmployee'])->name('editemployee');
    Route::post('/deleteemployee', [AdminEmployeeManagment::class, 'deleteemployee'])->name('deleteemployee');

    // Product Management
    Route::get('/addproductindex', [AdminProductManagment::class, 'productindex'])->name('addproductindex');
    Route::post('/addproduct', [AdminProductManagment::class, 'addProduct'])->name('addproduct');
    Route::get('/editproduct/{product_id}', [AdminProductManagment::class, 'showEditForm'])->name('showEditForm');
    Route::put('/editproduct/{product_id}', [AdminProductManagment::class, 'editProduct'])->name('editproduct');
    Route::post('/deleteproducts', [AdminProductManagment::class, 'deleteProduct'])->name('deleteproducts');
    Route::get('/displayProducts', [AdminProductManagment::class, 'displayProducts'])->name('displayProducts');

