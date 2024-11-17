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


    // Constructor to set ID
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        if (!isset($this->attributes['price_id'])) {
            $this->attributes['price_id'] = $this->generateUniqueId();
        }
    }

    // Function to generate a unique random ID
    private function generateUniqueId()
    {
        do {
            $randomId = random_int(100, 999); // Adjust range as needed
        } while (self::where('price_id', $randomId)->exists()); // Ensure uniqueness

        return $randomId;
    }
}
