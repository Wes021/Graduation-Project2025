<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Appointments extends Model
{
    public $timestamps = false;
    protected $table='Appointments';
    private $appointment_id;
    private $employee_id;
   


    // Constructor to set ID
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        if (!isset($this->attributes['appointment_id'])) {
            $this->attributes['appointment_id'] = $this->generateUniqueId();
        }
    }

    // Function to generate a unique random ID
    private function generateUniqueId()
    {
        do {
            $randomId = random_int(100000, 999999); // Adjust range as needed
        } while (self::where('appointment_id', $randomId)->exists()); // Ensure uniqueness

        return $randomId;
    }


    

}
