<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Products</title>
  @vite('resources/js/app.jsx') <!-- Ensure React bundle is included -->
</head>
<body>
  <div id="root"></div>

  <!-- Embed the products data -->
  <script>
    window.__PRODUCTS__ = @json($products);
  </script>
</body>
</html>
