<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Inventory;
use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductManagment extends Controller
{
    public function productindex(){
        return view('AdminView/ManageProducts');
    }

    public function showEditForm($product_id)
{
    // Fetch the product from the database based on the product_id
    $product = DB::table('product')
        ->select(
            'product.product_id as product_id',
            'product.product_name as product_name',
            'product.price as price',
            'product.description as description',
        )
        ->where('product.product_id', $product_id)
        ->first();  // Use first() to get a single product record

    // Pass the product to the view
    return view('AdminView.EditProducts', compact('product'));
}

    public function displayProducts(Request $request){
        $products = DB::table('product')
    ->leftJoin('category', 'product.category_id', '=', 'category.category_id')
    ->leftJoin('product_status', 'product.product_status_id', '=', 'product_status.product_status_id')
    ->leftJoin('inventory as inventory1', 'inventory1.product_id', '=', 'product.product_id')
    ->leftJoin('inventory_status', 'inventory_status.inventory_status_id', '=', 'inventory1.inventory_status_id')
    ->select(
        'inventory1.inventory_id as inventoryid',
        'inventory1.quantity_in_stock as quantity_in_stock',
        'product.product_id as product_id',
        'product.product_name as product_name',
        'product.price as price',
        'product.description as description',
        'category.category_name as category_name',
        'product_status.produt_status_name as produt_status_name',
        'inventory_status.inventory_status_name as inventory_status_name'
    )
    ->get();


        return view('AdminView/Inventory', compact('products'));
    }


    public function addProduct(Request $request){

        $validatedData=$request->validate([
            'product_name' =>  'required|string|max:255|unique:product',
            'price'=> 'required|string',
            'description'=> 'required',
            'quantity'=> 'required|max:255',

        ]);

        $product = new Products();
        $product->product_name = $validatedData['product_name'];
        $product->price = $validatedData['price'];
        $product->description = $validatedData['description'];
        $product->save();

        // Create the inventory record linked to the product
        $inventory = new Inventory();
        $inventory->product_id = $product->product_id; // Assuming product_id is auto-incremented
        $inventory->quantity_in_stock = $validatedData['quantity'];
        $product->save();
        $inventory->save();
        

       return redirect()->back();
        

    }

    public function editProduct(Request $request,$product_id)
    {
        // Validate the request data
        $validatedData = $request->validate([
            // 'product_id' => 'required|exists:product,product_id',
            'product_name' => 'nullable|string|max:255',
            'price' => 'nullable|string',
            'description' => 'nullable|string|max:255',
            
        ]);

        // $pro_id = $validatedData['product_id'];
         
        $updateData = [];

        // Add fields to the update array only if they're provided
        if (!empty($validatedData['product_name'])) {
            $updateData['product_name'] = $validatedData['product_name'];
        }
        if (!empty($validatedData['price'])) {
            $updateData['price'] = $validatedData['price'];
        }
        if (!empty($validatedData['description'])) {
            $updateData['description'] =$validatedData['description']; // Hash password before saving
        }
       
        

        // Perform the update only if there is data to update
        if (!empty($updateData)) {
            $updated = DB::table('product')
                ->where('product_id', $product_id)
                ->update($updateData);

            if (!$updated) {
                return redirect()->back()->with('error', 'Failed to update the employee. Please try again.');
            }

            return redirect()->back()->with('success', 'Employee updated successfully!');
        }

        return redirect()->back()->with('info', 'No changes were made to the employee.');
    }



    public function deleteProduct(Request $request){
        $validatedData = $request->validate([
            'product_id' => 'required|exists:product,product_id',
        ]);
    
        $pro_id = $validatedData['product_id'];
    
        $deleted = DB::table('product')
                    ->where('product_id', $pro_id)
                    ->delete();
    
        // Check if the delete was successful
        if ($deleted) {
            redirect()->back();
        } else {
           
        }

    }
}
