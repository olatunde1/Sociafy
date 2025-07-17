import React from "react";
import IconBuy from "../assets/images/bag.png";
import getWebLogs from "@/hooks/api/queries/getWebLogs";

const products = [
  {
    name: "USA 🇺🇸 Standard IG",
    title: "5-8yrs with posts | 1000 followers",
    icon: "📸",
    price: 30000,
    quantity: 231,
  },
  { name: "Handbag Facebook", icon: "📘", price: 30000, quantity: 231 },
  { name: "Smartwatch Twitter/X", icon: "🐦", price: 30000, quantity: 231 },
  { name: "Sunglasses Instagram", icon: "📸", price: 30000, quantity: 231 },
  { name: "Hoodie Facebook", icon: "📘", price: 30000, quantity: 231 },
  { name: "Earrings Instagram", icon: "📸", price: 30000, quantity: 231 },
  { name: "Phone Case Twitter/X", icon: "🐦", price: 30000, quantity: 231 },
  { name: "Perfume Facebook", icon: "📘", price: 30000, quantity: 231 },
  { name: "Laptop Bag Instagram", icon: "📸", price: 30000, quantity: 231 },
  { name: "Bracelet Twitter/X", icon: "🐦", price: 30000, quantity: 231 },
];

const ProductTable = () => {

  const { data, isPending } = getWebLogs();

  return (
    <div className=" mx-auto px-4 w-full max-w-[1200px] py-12 bg-white rounded-lg mt-20">
      <h1 className="text-center font-extrabold text-3xl md:text-4xl mb-4">
        Trending <span className="text-[#7B36E7]">Accounts</span>
      </h1>
      <p className="text-center mb-10 text-base text-gray-600">
        See our high-demand and top-selling accounts
      </p>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#FAFAFB] text-left border-b border-[#EDF2F7]">
              <th className="p-4 text-[#949494] font-semibold">Product</th>
              <th className="p-4 text-[#949494] font-semibold">Amount (₦)</th>
              <th className="p-4 text-[#949494] font-semibold">Quantity</th>
              <th className="p-4 text-[#949494] font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b border-[#EDF2F7]">
                <td className="p-4 flex items-center gap-4">
                  <span className="text-2xl">{product.icon || "🛒"}</span>
                  <div>
                    <div className="font-semibold text-sm">{product.name}</div>
                    {product.title && (
                      <div className="text-gray-500 text-xs">{product.title}</div>
                    )}
                  </div>
                </td>
                <td className="p-4 text-[#515151] font-medium text-sm">
                  ₦{product.price.toLocaleString()}
                </td>
                <td className="p-4 text-sm text-[#515151]">
                  <span className="bg-[#E5E5EA] py-1 px-3 rounded-3xl font-semibold text-xs">
                    {product.quantity} pcs
                  </span>
                </td>
                <td className="p-4">
                  <button className="flex items-center gap-2 bg-[#F2EBFD] text-[#7B36E7] px-4 py-2 rounded font-bold text-sm hover:scale-105 transition-transform">
                    <img src={IconBuy} alt="Buy" className="w-5 h-5" />
                    Buy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-6">
        {products.map((product, index) => (
          <div key={index} className="border border-[#EDF2F7] rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-3xl">{product.icon || "🛒"}</span>
              <div>
                <div className="font-semibold text-base">{product.name}</div>
                {product.title && <div className="text-sm text-gray-600">{product.title}</div>}
              </div>
            </div>

            <div className="text-sm text-[#515151] mb-2">
              <strong>Amount:</strong> ₦{product.price.toLocaleString()}
            </div>

            <div className="text-sm text-[#515151] mb-4">
              <strong>Quantity:</strong>{" "}
              <span className="bg-[#E5E5EA] py-1 px-3 rounded-3xl font-semibold">
                {product.quantity} pcs
              </span>
            </div>

            <button className="w-full flex justify-center items-center gap-2 bg-[#F2EBFD] text-[#7B36E7] px-4 py-2 rounded font-bold hover:scale-105 transition-transform">
              <img src={IconBuy} alt="Buy" className="w-5 h-5" />
              Buy
            </button>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white px-10 py-3 rounded-lg shadow-md hover:scale-105 transition-transform">
          View More
        </button>
      </div>
    </div>
  );
};

export default ProductTable;
