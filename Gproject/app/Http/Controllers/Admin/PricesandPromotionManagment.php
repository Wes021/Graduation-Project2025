<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PricesandPromotionManagment extends Controller
{


    public function displayPrices(Request $request){

        try{
                $prices = DB::table('appointment_prices')
                ->leftJoin('category_app','appointment_prices.category_app_id','=','category_app.category_app_id')
                ->leftJoin('appointment_price_status','appointment_prices.status_id','appointment_price_status.price_status_id')
                ->select('appointment_prices.base_price as price','appointment_prices.promotion_price as promotion_price','appointment_price_status.status_name as status', 'category_app.category_name as category', 'appointment_prices.price_id as price_id')
                ->get();
    
                return view('AdminView/AdminManagment', compact('prices'));
            
        }catch(Exception $e){
            redirect()->back()->with('error','Faild fetching data'.$e->getMessage());
        }

    }




    public function editPrices(Request $request){
    $request->validate([
        'editBaseprice' => 'required',
        'category_app_id' => 'required'
    ]);

    
    $category_app_id = $request->input('category_app_id');
    $new_base_price = $request->input('editBaseprice');

    
    $updated = DB::table('appointment_prices')
        ->where('category_app_id', $category_app_id)
        ->update(['base_price' => $new_base_price]);

    if (!$updated) {
        return redirect()->back()->with('error', 'Failed to update the price. Please try again.');
    }

    return redirect()->back()->with('success', 'Price updated successfully!');
}


    public function addpromotion(Request $request){
        $request->validate([
            'promotion_price' => 'required',
            'category_app_id' => 'required'
        ]);

        $category_app_id = $request->input('category_app_id');
        $promotion=$request->input('promotion_price');

        $update=DB::table('appointment_prices')
        ->where('category_app_id', $category_app_id)
        ->update(
            ['promotion_price'=>$promotion],
            ['status_id'=>101],
            
        );

        if (!$update) {
            return redirect()->back()->with('error', 'Failed to update the price. Please try again.');
        }
    
        return redirect()->back()->with('success', 'Price updated successfully!');
    }

    

    public function editpromotion(Request $request){
        $request->validate([
            'promotion_price' => 'required',
            'category_app_id' => 'required'
        ]);

        $category_app_id=$request->input('category_app_id');
        $newpromotion=$request->input('promotion_price');

        $update=DB::table('appointment_prices')
        ->where('category_app_id', $category_app_id)
        ->update(
            ['promotion_price'=>$newpromotion],
            ['status_id'=>101],
        );

        
        if (!$update) {
            return redirect()->back()->with('error', 'Failed to update the price. Please try again.');
        }
    
        return redirect()->back()->with('success', 'Price updated successfully!');


    }

    public function cancelPromotion(Request $request, $price_id)
{
    $editpromotion = DB::table('appointment_prices')
        ->where('price_id', $price_id)
        ->update([
            'promotion_price' => 0,
            'status_id' => 102,
        ]);

    return redirect()->back()->with('success', 'Promotion canceled successfully!');
}
}
