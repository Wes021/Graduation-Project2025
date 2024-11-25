<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    public $timestamps = false;
    protected $table='Address';
    private $address_Id;
    private $governorate;
    private $city;
    private $street;
    

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        if (!isset($this->attributes['address_Id'])) {
            $this->attributes['address_Id'] = $this->generateUniqueId();
        }
    }

    
    private function generateUniqueId()
    {
        do {
            $randomId = random_int(100000, 999999); 
        } while (self::where('address_Id', $randomId)->exists()); 

        return $randomId;
    }

    


    ////////////setter&gettergovernorate////////////
    public function getGovernorateAttribute($value)
    {
        return ucfirst($value);
    }

    public function setGovernorateAttribute($value)
    {
        $this->attributes['governorate'] = trim($value);
    }
    ////////////setter&gettergovernorate////////////
    
    ////////////setter&gettercity////////////
    public function getCityAttribute($value)
    {
        return ucfirst($value);
    }

    public function setCityAttribute($value)
    {
        $this->attributes['city'] = trim($value);
    }
    ////////////setter&gettercity////////////


    ////////////setter&getterStreet////////////
    public function getStreetAttribute($value)
    {
        return ucfirst($value);
    }

    public function setStreetAttribute($value)
    {
        $this->attributes['street'] = trim($value);
    }
    ////////////setter&getterStreet////////////

}