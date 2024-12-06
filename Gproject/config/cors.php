<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Laravel CORS Options
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for CORS (Cross-Origin Resource Sharing).
    | The allowed_origins setting will define which domains are allowed to access your
    | application via the API.
    |
    */

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'],  // Allow all methods (GET, POST, PUT, DELETE)
    'allowed_origins' => ['http://localhost:3000'],  // Your React app's development URL
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true,
];
