<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    public $timestamps = false;
    protected $table='user';
    private $user_Id;
    private $name;
    private $username;
    private $password;
    private $phone;
    // private $address;

    // Constructor to set ID
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        if (!isset($this->attributes['user_id'])) {
            $this->attributes['user_id'] = $this->generateUniqueId();
        }
    }

    // Function to generate a unique random ID
    private function generateUniqueId()
    {
        do {
            $randomId = random_int(100000, 999999); // Adjust range as needed
        } while (self::where('user_id', $randomId)->exists()); // Ensure uniqueness

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

    ////////////setter&getterUserName////////////
    public function getusernameAttribute($value)
    {
        return ($value);
    }

    public function setusernameAttribute($value)
    {
        $this->attributes['username']=trim($value);
    }
    ////////////setter&getterUserName////////////

    ////////////setter&getterPassword////////////
    public function getpasswordAttribute($value)
    {
        return ($value);
    }

    public function setpasswordAttribute($value)
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

    ////////////setter&getteraddress////////////
    public function setaddressAttribute($value)
    {
        $this->attributes['address']=trim($value);
    }
    ////////////setter&getteraddress////////////

    


}
