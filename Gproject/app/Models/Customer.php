<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table='user';
    private $name;
    private $username;
    private $password;
    private $phone;
    private $address;

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
    public function setusernameAttribute($value)
    {
        return ($value);
    }

    public function getusernameAttribute($value)
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
