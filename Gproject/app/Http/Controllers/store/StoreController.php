<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    public function displayproducts(Request $request)
{
    $products = DB::table('product')
        ->leftJoin('product_status', 'product.product_status_id', '=', 'product_status.product_status_id')
        ->leftJoin('category', 'product.category_id', '=', 'category.category_id')
        ->select(
            'product.product_id as product_id',
            'product.product_name as product_name',
            'product.price as price',
            'product.description as description',
            'category.category_name as category_name',
            'product_status.produt_status_name as produt_status_name'
        )
        ->get();

    return view('products', ['products' => $products]);
}




public function addToCart(Request $request)
{
    $validated = $request->validate([
        'user_id' => 'required|exists:users,id',
        'product_id' => 'required|exists:products,id',
        'quantity' => 'required|integer|min:1',
    ]);

    $userData = (array) session('Cuser');
    $userID=$userData['user_id'];
    
    $existingCart = DB::table('cart')
        ->where('user_id', $userID)
        ->where('product_id', $validated['product_id'])
        ->first();

    if ($existingCart) {
        
        DB::table('cart')
            ->where('id', $existingCart->id)
            ->update([
                'quantity' => $existingCart->quantity + $validated['quantity'],
                
            ]);
    } else {
        
        DB::table('cart')->insert([
            'user_id' => $userID,
            'product_id' => $validated['product_id'],
            'quantity' => $validated['quantity'],
            
        ]);
    }

}
}
