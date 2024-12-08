<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
   
    protected $middleware = [
        // Other middlewares...
        \Illuminate\Http\Middleware\HandleCors::class,
    ];
}
