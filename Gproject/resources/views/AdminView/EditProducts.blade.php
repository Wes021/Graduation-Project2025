<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
    <form action="{{ route('editproduct', $product->product_id) }}" method="POST">
        @csrf
        @method('PUT')
        
        <label for="product_name">Product Name:</label>
        <input type="text" id="product_name" name="product_name" value="{{ old('product_name', $product->product_name) }}" required><br>
    
        <label for="price">Price:</label>
        <input type="text" id="price" name="price" value="{{ old('price', $product->price) }}" required><br>
    
        <label for="description">Description:</label>
        <textarea id="description" name="description">{{ old('description', $product->description) }}</textarea><br>
    
        <label for="quantity_in_stock">Quantity:</label>
        <input type="number" id="price" name="quantity_in_stock" value="{{ old('quantity_in_stock', $product->quantity_in_stock) }}" required><br>

    <br>
    
        <button type="submit">Update Product</button>
    </form>
</body>
</html>