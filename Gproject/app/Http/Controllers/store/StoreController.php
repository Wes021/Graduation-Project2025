<?php

namespace App\Http\Controllers;

use App\Models\Order;
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
                'product_status.product_status_name as product_status_name'
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
        $userID = $userData['user_id'];

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

        return response()->json(['message' => 'Product added to cart successfully.'], 200);
    }

    public function checkout(Request $request)
    {
        $cartItems = $request->input('items');

        if (!$cartItems || !is_array($cartItems)) {
            return response()->json(['message' => 'Cart is empty or invalid.'], 400);
        }

        session(['cart_items' => $cartItems]);

        return response()->json(['message' => 'Cart items stored successfully.'], 200);
    }

    public function handlePayment(Request $request)
    {
        $data = $request->validate([
            'method' => 'required|string|in:visa,paypal',
            'amount' => 'required|numeric|min:0.01',
            'product_id' => 'required|integer|exists:products,id',
        ]);

        $userData = (array) session('Cuser');
        $userID = $userData['user_id'];

        try {
            $paymentId = $data['method'] === 'visa' ? 1 : 2;

            $order = Order::create([
                'user_id' => $userID,
                'product_id' => $data['product_id'],
                'payment_id' => $paymentId,
            ]);

            return response()->json([
                'message' => 'Payment processed successfully.',
                'order' => $order,
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to process payment.'], 500);
        }
    }

    public function displayOrder(Request $request)
    {
        $orders = DB::table('order')
            ->leftJoin('product', 'order.product_id', '=', 'product.product_id')
            ->leftJoin('payment', 'order.payment_id', '=', 'payment.payment_id')
            ->leftJoin('status', 'order.status_id', '=', 'status.status_id')
            ->leftJoin('user', 'order.user_id', '=', 'user.user_id')
            ->select(
                'product.product_name as product_name',
                'status.status_name as status_name',
                'payment.payment_id as payment_id',
                'user.user_name as user_name',
                'order.created_at as order_date'
            )
            ->get();
    }
}
