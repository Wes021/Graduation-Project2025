import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useProductsStore } from "../products/store/productsStore";
import { Product } from "../products/types";

export default function ProductManagement() {
  const { t } = useTranslation();
  const { products, addProduct, updateProduct, deleteProduct } =
    useProductsStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState<Partial<Product>>({
    name: "",
    nameAr: "",
    description: "",
    descriptionAr: "",
    price: 0,
    originalPrice: 0,
    category: "cameras",
    image: "",
    stock: 0,
    hasDiscount: false,
    discountPercentage: 0,
  });

  console.log(t("admin.productManagement.addProduct"));
  console.log("first");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Calculate the discounted price if there's a discount
    const finalFormData = {
      ...formData,
      price: formData.hasDiscount
        ? Number(formData.originalPrice) *
          (1 - Number(formData.discountPercentage) / 100)
        : Number(formData.originalPrice),
      originalPrice: formData.hasDiscount
        ? Number(formData.originalPrice)
        : undefined,
    };

    if (editingProduct) {
      updateProduct(editingProduct.id, finalFormData as Product);
    } else {
      addProduct({
        ...finalFormData,
        id: Math.random().toString(36).substring(2, 9),
        rating: 0,
        reviews: 0,
      } as Product);
    }
    setIsModalOpen(false);
    setEditingProduct(null);
    setFormData({
      name: "",
      nameAr: "",
      description: "",
      descriptionAr: "",
      price: 0,
      originalPrice: 0,
      category: "cameras",
      image: "",
      stock: 0,
      hasDiscount: false,
      discountPercentage: 0,
    });
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      ...product,
      originalPrice: product.originalPrice || product.price,
      hasDiscount: !!product.originalPrice,
      discountPercentage: product.originalPrice
        ? Math.round((1 - product.price / product.originalPrice) * 100)
        : 0,
    });
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          {t("admin.productManagement.title")}
        </h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          {t("admin.productManagement.addProduct")}
        </button>
      </div>

      {/* Products Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b dark:border-gray-700">
              <th className="text-left py-4 px-4">
                {t("admin.productManagement.image")}
              </th>
              <th className="text-left py-4 px-4">
                {t("admin.productManagement.productName")}
              </th>
              <th className="text-left py-4 px-4">
                {t("admin.productManagement.category")}
              </th>
              <th className="text-left py-4 px-4">
                {t("admin.productManagement.price")}
              </th>
              <th className="text-left py-4 px-4">
                {t("admin.productManagement.discount")}
              </th>
              <th className="text-left py-4 px-4">
                {t("admin.productManagement.stock")}
              </th>
              <th className="text-left py-4 px-4">
                {t("admin.productManagement.actions")}
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b dark:border-gray-700">
                <td className="py-4 px-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="py-4 px-4">{product.name}</td>
                <td className="py-4 px-4">
                  {t(`products.categories.${product.category}`)}
                </td>
                <td className="py-4 px-4">
                  <div className="flex flex-col">
                    <span className="font-medium">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-4 px-4">
                  {product.originalPrice && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {Math.round(
                        (1 - product.price / product.originalPrice) * 100
                      )}
                      %
                    </span>
                  )}
                </td>
                <td className="py-4 px-4">{product.stock}</td>
                <td className="py-4 px-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                      title={t("admin.productManagement.editProduct")}
                    >
                      <Pencil className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                      title={t("admin.productManagement.delete")}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Product Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full p-6">
            <h3 className="text-xl font-semibold mb-4">
              {editingProduct
                ? t("admin.productManagement.editProduct")
                : t("admin.productManagement.addProduct")}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Product Name */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    {t("admin.productManagement.productName")} (English)
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    {t("admin.productManagement.productName")} (العربية)
                  </label>
                  <input
                    type="text"
                    value={formData.nameAr}
                    onChange={(e) =>
                      setFormData({ ...formData, nameAr: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    {t("admin.productManagement.description")} (English)
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    {t("admin.productManagement.description")} (العربية)
                  </label>
                  <textarea
                    value={formData.descriptionAr}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        descriptionAr: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>

                {/* Price and Discount */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    {t("admin.productManagement.originalPrice")}
                  </label>
                  <input
                    type="number"
                    value={formData.originalPrice}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        originalPrice: Number(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    {t("admin.productManagement.hasDiscount")}
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={formData.hasDiscount}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            hasDiscount: e.target.checked,
                          })
                        }
                        className="rounded border-gray-300"
                      />
                      {t("admin.productManagement.applyDiscount")}
                    </label>
                    {formData.hasDiscount && (
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={formData.discountPercentage}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            discountPercentage: Number(e.target.value),
                          })
                        }
                        className="w-20 px-3 py-2 border rounded-md"
                        placeholder="%"
                      />
                    )}
                  </div>
                </div>

                {/* Stock */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    {t("admin.productManagement.stock")}
                  </label>
                  <input
                    type="number"
                    value={formData.stock}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        stock: Number(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    {t("admin.productManagement.category")}
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        category: e.target.value as any,
                      })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  >
                    {Object.keys(
                      t("products.categories", { returnObjects: true })
                    ).map((category) => (
                      <option key={category} value={category}>
                        {t(`products.categories.${category}`)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Image URL */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">
                    {t("admin.productManagement.imageUrl")}
                  </label>
                  <input
                    type="url"
                    value={formData.image}
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setEditingProduct(null);
                  }}
                  className="px-4 py-2 border rounded-md"
                >
                  {t("admin.productManagement.cancel")}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  {editingProduct
                    ? t("admin.productManagement.save")
                    : t("admin.productManagement.addProduct")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
