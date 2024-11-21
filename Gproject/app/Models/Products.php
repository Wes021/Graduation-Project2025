<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{

    public $timestamps = false;
    protected $table='product';
    protected $product_id;

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        if (!isset($this->attributes['product_id'])) {
            $this->attributes['product_id'] = $this->generateUniqueId();
        }
    }

    // Function to generate a unique random ID
    private function generateUniqueId()
    {
        do {
            $randomId = random_int(100, 999); // Adjust range as needed
        } while (self::where('product_id', $randomId)->exists()); // Ensure uniqueness

        return $randomId;
    }
}
