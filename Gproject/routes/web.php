<?php

use App\Models\customer;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;


Route::get('/', function () {
    return view('welcome');
});

// Route::get('/test', function() {
//     return view('index');
// });

Route::resource('customers', CustomerController::class);



