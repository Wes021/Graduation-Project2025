<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    public $timestamps = false;
    protected $table='inventory';
    protected $inventory_id;

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        if (!isset($this->attributes['inventory_id'])) {
            $this->attributes['inventory_id'] = $this->generateUniqueId();
        }
    }

    // Function to generate a unique random ID
    private function generateUniqueId()
    {
        do {
            $randomId = random_int(100, 999); // Adjust range as needed
        } while (self::where('inventory_id', $randomId)->exists()); // Ensure uniqueness

        return $randomId;
    }
}
