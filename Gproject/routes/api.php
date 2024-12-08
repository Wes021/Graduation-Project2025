<?php

use Illuminate\Routing\Route;

Route::get('/your-endpoint', function () {
    return response()->json(['message' => 'Success']);
});
