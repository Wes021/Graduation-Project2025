<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});


// Show the form to create a user
Route::get('/users/create', function () {
    return view('users.create');
});

// Store the new user
Route::post('/users', [UserController::class, 'store'])->name('users.store');
