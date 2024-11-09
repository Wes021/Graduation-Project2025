<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CategoryApp extends Model
{
    protected $table='category_app';
    public $timestamps = false;
    private $category_app_id;
    private $category_name;

    ////////////setter&getterCategory////////////
    public function getCategoryAttribute($value)
    {
        return ucfirst($value);
    }

    public function setCategoryAttribute($value)
    {
        $this->attributes['category_name'] = trim($value);
    }
    ////////////setter&getterName////////////



}
