<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    public $timestamps = false;
    protected $table='employees';
    private $employee_id;
    private $name;
    private $username;
    private $password;
    private $phone;



    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        if (!isset($this->attributes['employee_id'])) {
            $this->attributes['employee_id'] = $this->generateUniqueId();
        }
    }

    
    private function generateUniqueId()
    {
        do {
            $randomId = random_int(100, 999); 
        } while (self::where('employee_id', $randomId)->exists()); 

        return $randomId;
    }

    


    ////////////setter&getterName////////////
    public function getNameAttribute($value)
    {
        return ucfirst($value);
    }

    public function setNameAttribute($value)
    {
        $this->attributes['name'] = trim($value);
    }
    ////////////setter&getterName////////////

    ////////////setter&getterUsername////////////
    public function getUsernameAttribute($value)
    {
        return($value);
    }

    public function setUsernameAttribute($value)
    {
        $this->attributes['username']=trim($value);
    }
    ////////////setter&getterUsername////////////

    ////////////setter&getterPassword////////////
    public function getPassswordAttribute($value)
    {
        return($value);
    }

    public function setPasswordAttribute($value)
    {
        $this->attributes['password']=trim($value);

    }
    ////////////setter&getterPassword////////////

    ////////////setter&getterPhone////////////
    public function getphoneAttribute($value)
    {
        return ($value);
    }

    public function setphoneAttribute($value)
    {
        $this->attributes['phone']=trim($value);
    }
    ////////////setter&getterphone////////////


}
