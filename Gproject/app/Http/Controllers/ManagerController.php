<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Support\Facades\DB;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ManagerController extends Controller
{
    public function index(){
        return view('ManageEmployee');
    }


    public function addEmployee(Request $request){

        $validateData=$request->validate([
            'name' =>  'required|string|max:255',
            'username'=> 'required|string|max:255|unique:employees,username',
            'password'=> 'required|max:255|unique:employees,password',
            'phone'=> 'required|string|max:255|unique:employees,phone',
            'gender'=>'required',
            'email'=>'required',
            
        ]);

        $admin = new Admin();

        $admin->name=$validateData['name'];
        $admin->username=$validateData['username'];
        $admin->password=$validateData['password'];
        $admin->phone=$validateData['phone'];
        $admin->gender=$validateData['gender'];
        $admin->email=$validateData['email'];

        $admin->save();
        
        return redirect()->back();

    }


    public function editEmployee(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'userID' => 'required|exists:employees,employee_id',
            'name' => 'nullable|string|max:255',
            'username' => 'nullable|string|max:255|unique:employees,username,' . $request->userID . ',employee_id',
            'password' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:255|unique:employees,phone,' . $request->userID . ',employee_id',
            'email' => 'nullable|string|email|max:255',
        ]);

        $em_id = $validatedData['userID'];
        $updateData = [];

        // Add fields to the update array only if they're provided
        if (!empty($validatedData['name'])) {
            $updateData['name'] = $validatedData['name'];
        }
        if (!empty($validatedData['username'])) {
            $updateData['username'] = $validatedData['username'];
        }
        if (!empty($validatedData['password'])) {
            $updateData['password'] = Hash::make($validatedData['password']); // Hash password before saving
        }
        if (!empty($validatedData['phone'])) {
            $updateData['phone'] = $validatedData['phone'];
        }
        if (!empty($validatedData['email'])) {
            $updateData['email'] = $validatedData['email'];
        }

        // Perform the update only if there is data to update
        if (!empty($updateData)) {
            $updated = DB::table('employees')
                ->where('employee_id', $em_id)
                ->update($updateData);

            if (!$updated) {
                return redirect()->back()->with('error', 'Failed to update the employee. Please try again.');
            }

            return redirect()->back()->with('success', 'Employee updated successfully!');
        }

        return redirect()->back()->with('info', 'No changes were made to the employee.');
    }

    public function deleteemployee(Request $request){
        $validatedData = $request->validate([
            'userID' => 'required|exists:employees,employee_id',
        ]);
    
        $em_id = $validatedData['userID'];
    
        $deleted = DB::table('employees')
                    ->where('employee_id', $em_id)
                    ->delete();
    
        // Check if the delete was successful
        if ($deleted) {
            
        } else {
           
        }

    }

























    public function displayPrices(Request $request){

        try{
                $prices = DB::table('appointment_prices')
                ->leftJoin('category_app','appointment_prices.category_app_id','=','category_app.category_app_id')
                ->leftJoin('appointment_price_status','appointment_prices.status_id','appointment_price_status.price_status_id')
                ->select('appointment_prices.base_price as price','appointment_prices.promotion_price as promotion_price','appointment_price_status.status_name as status', 'category_app.category_name as category', 'appointment_prices.price_id as price_id')
                ->get();
    
                return view('AdminManagment', compact('prices'));
            
        }catch(Exception $e){
            redirect()->back()->with('error','Faild fetching data'.$e->getMessage());
        }

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
