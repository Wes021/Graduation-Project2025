<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public $timestamps = false;
    protected $table='order';
    protected $order_id;


    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        if (!isset($this->attributes['order_id'])) {
            $this->attributes['order_id'] = $this->generateUniqueId();
        }
    }

    // Function to generate a unique random ID
    private function generateUniqueId()
    {
        do {
            $randomId = random_int(100, 999); // Adjust range as needed
        } while (self::where('order_id', $randomId)->exists()); // Ensure uniqueness

        return $randomId;
    }
}
