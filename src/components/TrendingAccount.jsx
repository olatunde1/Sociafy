import React from "react";

const products = [
  { name: "Sneakers", platform: "Instagram", icon: "📸", price: 49.99, quantity: 5 },
  { name: "Handbag", platform: "Facebook", icon: "📘", price: 89.99, quantity: 3 },
  { name: "Smartwatch", platform: "Twitter/X", icon: "🐦", price: 129.99, quantity: 10 },
  { name: "Sunglasses", platform: "Instagram", icon: "📸", price: 35.00, quantity: 7 },
  { name: "Hoodie", platform: "Facebook", icon: "📘", price: 39.99, quantity: 4 },
  { name: "Earrings", platform: "Instagram", icon: "📸", price: 19.99, quantity: 12 },
  { name: "Phone Case", platform: "Twitter/X", icon: "🐦", price: 14.99, quantity: 8 },
  { name: "Perfume", platform: "Facebook", icon: "📘", price: 59.99, quantity: 6 },
  { name: "Laptop Bag", platform: "Instagram", icon: "📸", price: 45.99, quantity: 9 },
  { name: "Bracelet", platform: "Twitter/X", icon: "🐦", price: 24.99, quantity: 15 }
];

const ProductTable = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border p-3">Product (Available On)</th>
            <th className="border p-3">Amount (₦)</th>
            <th className="border p-3">Quantity</th>
            <th className="border p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="border">
              <td className="p-3 border">{product.icon} {product.name} ({product.platform})</td>
              <td className="p-3 border">${product.price.toFixed(2)}</td>
              <td className="p-3 border">{product.quantity}</td>
              <td className="p-3 border">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  🛒 Buy
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
