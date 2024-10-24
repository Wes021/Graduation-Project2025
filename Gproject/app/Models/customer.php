<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class customer extends Model
{
    protected $table='user';
    protected $fillable=['name','username','phone','password'];
    protected $hidden=['password'];
    
}
