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
    
    $product = DB::table('product')
        ->leftJoin('inventory', 'inventory.product_id', '=', 'product.product_id')
        ->select(
            'product.product_id as product_id',
            'product.product_name as product_name',
            'product.price as price',
            'product.description as description',
            'inventory.quantity_in_stock as quantity_in_stock'
        )
        ->where('product.product_id', $product_id)
        ->first();  

    
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

        
        $inventory = new Inventory();
        $inventory->product_id = $product->product_id; 
        $inventory->quantity_in_stock = $validatedData['quantity'];
        $product->save();
        $inventory->save();
        

       return redirect()->back();
        

    }

    public function editProduct(Request $request, $product_id)
{
    $validatedData = $request->validate([
        'product_name' => 'nullable|string|max:255',
        'price' => 'nullable|string',
        'description' => 'nullable|string|max:255',
        'quantity_in_stock' => 'nullable|integer',
    ]);

    
    $updateProductData = [];
    $updateInventoryData = [];

    
    if (!empty($validatedData['product_name'])) {
        $updateProductData['product_name'] = $validatedData['product_name'];
    }
    if (!empty($validatedData['price'])) {
        $updateProductData['price'] = $validatedData['price'];
    }
    if (!empty($validatedData['description'])) {
        $updateProductData['description'] = $validatedData['description'];
    }

    
    if (!empty($validatedData['quantity_in_stock'])) {
        $updateInventoryData['quantity_in_stock'] = $validatedData['quantity_in_stock'];
    }

    
    $productUpdated = false;
    if (!empty($updateProductData)) {
        $productUpdated = DB::table('product')
            ->where('product_id', $product_id)
            ->update($updateProductData);
    }

    $inventoryUpdated = false;
    if (!empty($updateInventoryData)) {
        $inventoryUpdated = DB::table('inventory')
            ->where('product_id', $product_id)
            ->update($updateInventoryData);
    }

    
    if ($productUpdated || $inventoryUpdated) {
        return redirect()->back()->with('success', 'Product updated successfully!');
    }

    
    return redirect()->back()->with('info', 'No changes were made to the product.');
}




    public function deleteProduct(Request $request){
        $validatedData = $request->validate([
            'product_id' => 'required|exists:product,product_id',
        ]);
    
        $pro_id = $validatedData['product_id'];
    
        $deleted = DB::table('product')
                    ->where('product_id', $pro_id)
                    ->delete();
    
        
        if ($deleted) {
            redirect()->back();
        } else {
           
        }

    }
}
