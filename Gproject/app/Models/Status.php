<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    protected $table='appointment_statuses';
    public $timestamps = false;
    private $appointment_statuses_id;
    private $status_name;


   

    ////////////setter&getterCategory////////////
    public function getStatusAttribute($value)
    {
        return ucfirst($value);
    }

    public function setStatusAttribute($value)
    {
        $this->attributes['status_name'] = trim($value);
    }
    ////////////setter&getterName////////////

}
