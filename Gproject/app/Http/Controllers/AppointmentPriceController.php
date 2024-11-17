<?php

namespace App\Http\Controllers;

use App\Models\AppointmentPrice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use function Laravel\Prompts\table;

class AppointmentPriceController extends Controller
{

    public function index(){
        return view('AdminManagment');
    }



    public function editPrices(Request $request){
    $request->validate([
        'editBaseprice' => 'required',
        'category_app_id' => 'required'
    ]);

    // Get the category_app_id and the new base price
    $category_app_id = $request->input('category_app_id');
    $new_base_price = $request->input('editBaseprice');

    // Update the base price where the category_app_id matches
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
        ->update(['promotion_price'=>$promotion]);

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
        ->update(['promotion_price'=>$newpromotion]);

        
        if (!$update) {
            return redirect()->back()->with('error', 'Failed to update the price. Please try again.');
        }
    
        return redirect()->back()->with('success', 'Price updated successfully!');


    }








    // public function edit($id)
    // {
    //     $price = AppointmentPrice::findOrFail($id);
    //     return view('AdminManagment', compact('price'));
    // }

    // // Update the price
    // public function update(Request $request, $id)
    // {
    //     $request->validate([
    //         'base_price' => 'required|numeric|min:0',
    //         'promotion_price' => 'nullable|numeric|min:0',
    //         'promotion_start' => 'nullable|date',
    //         'promotion_end' => 'nullable|date|after_or_equal:promotion_start',
    //         'categories' => 'required|exists:category_app,category_app_id',
    //     ]);

    //     $price = AppointmentPrice::findOrFail($id);
    //     $price->update($request->all());

    //     return redirect()->route('prices.index')->with('success', 'Price updated successfully!');
    // }
}
