<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AppointmentPrice extends Model
{
    public $timestamps = false;
    protected $table='appointment_prices';
    protected $fillable = [
        'base_price', 'promotion_price', 'promotion_start', 'promotion_end',
    ];


    
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        if (!isset($this->attributes['price_id'])) {
            $this->attributes['price_id'] = $this->generateUniqueId();
        }
    }

    
    private function generateUniqueId()
    {
        do {
            $randomId = random_int(100, 999); 
        } while (self::where('price_id', $randomId)->exists()); 

        return $randomId;
    }
}
