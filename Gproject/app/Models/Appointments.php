<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Appointments extends Model
{
    public $timestamps = false;
    protected $table='Appointments';
    
    protected $primaryKey = 'appointment_id';
    private $employee_id;
    private $appointment_statuses_id;
   


    
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        if (!isset($this->attributes['appointment_id'])) {
            $this->attributes['appointment_id'] = $this->generateUniqueId();
        }
    }

    
    private function generateUniqueId()
    {
        do {
            $randomId = random_int(100000, 999999); 
        } while (self::where('appointment_id', $randomId)->exists()); 

        return $randomId;
    }


    

}
