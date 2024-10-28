<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    protected $routeMiddleware = [
        
        'userSignin' => \App\Http\Middleware\userSignin::class,
    ];
}
