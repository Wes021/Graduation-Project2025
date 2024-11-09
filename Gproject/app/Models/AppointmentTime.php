<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AppointmentTime extends Model
{


    public $timestamps = false;
    protected $table='appointment_time';

    private $date;
    private $time;



    // Constructor to set ID
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        if (!isset($this->attributes['appointment_time_id'])) {
            $this->attributes['appointment_time_id'] = $this->generateUniqueId();
        }
    }

    // Function to generate a unique random ID
    private function generateUniqueId()
    {
        do {
            $randomId = random_int(100000, 999999); // Adjust range as needed
        } while (self::where('appointment_time_id', $randomId)->exists()); // Ensure uniqueness

        return $randomId;
    }

    ////////////setter&getterDate////////////
    public function getDateAttribute($value)
    {
        return ucfirst($value);
    }

    public function setDateAttribute($value)
    {
        $this->attributes['date'] = trim($value);
    }
    ////////////setter&getterDate////////////

     ////////////setter&getterTime////////////
     public function getTimeAttribute($value)
     {
         return ucfirst($value);
     }
 
     public function setTimeAttribute($value)
     {
         $this->attributes['time'] = trim($value);
     }
     ////////////setter&getterDate////////////

}
