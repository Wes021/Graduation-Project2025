<?php

namespace App\Providers;


use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot()
    {
        if(Session::has('Cuser')){
            $user=Session::get('Cuser');
            View::share('user',$user);
        }

    }
}
