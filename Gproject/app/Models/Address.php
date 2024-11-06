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

    // Function to generate a unique random ID
    private function generateUniqueId()
    {
        do {
            $randomId = random_int(100000, 999999); // Adjust range as needed
        } while (self::where('address_Id', $randomId)->exists()); // Ensure uniqueness

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
        $this->attributes['city'] = trim($value);
    }
    ////////////setter&getterStreet////////////

}