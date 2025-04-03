import React from "react";
import IconBuy from '../assets/images/bag.png'

const products = [
  { name: "USA 🇺🇸 Standard IG", icon: "📸", price: 30000, quantity: 231 },
  { name: "Handbag", platform: " Facebook", icon: "📘", price: 30000, quantity: 231 },
  { name: "Smartwatch", platform: " Twitter/X", icon: "🐦", price: 30000, quantity: 231 },
  { name: "Sunglasses", platform: " Instagram", icon: "📸", price: 30000, quantity: 231 },
  { name: "Hoodie", platform: " Facebook", icon: "📘", price: 30000, quantity: 231 },
  { name: "Earrings", platform: " Instagram", icon: "📸", price: 30000, quantity: 231 },
  { name: "Phone Case", platform: " Twitter/X", icon: "🐦", price: 30000, quantity: 231 },
  { name: "Perfume", platform: " Facebook", icon: "📘", price: 30000, quantity: 231 },
  { name: "Laptop Bag", platform: " Instagram", icon: "📸", price: 30000, quantity: 231 },
  { name: "Bracelet", platform: " Twitter/X", icon: "🐦", price: 30000, quantity: 231 }
];

const ProductTable = () => {
  return (
    <div className="container mx-auto px-4 w-full max-w-[1200px] p-6 bg-white shadow-lg rounded-lg mt-20">
        <h1  className="text-center font-extrabold text-3xl md:text-4xl mb-4"> Trending <span className="text-[#7B36E7]" >Accounts</span></h1>
        <p className="text-center mb-16 text-[20px] leading-8">See our high-demand and top-selling accounts</p>
        
      <table className="w-full">
        <thead>
          <tr className="bg-[#FAFAFB] text-left border-b border-[#EDF2F7]">
            <th className="p-3 text-[#949494] font-medium">Product</th>
            <th className="p-3 text-[#949494] font-medium">Amount (₦)</th>
            <th className="p-3 text-[#949494] font-medium">Quantity</th>
            <th className="p-3 text-[#949494] font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className=" border-b border-[#EDF2F7]">
              <td className="p-3 ">{product.icon} {product.name}{product.platform}</td>
              <td className="p-3 text-[#515151] font-medium ">₦{product.price.toLocaleString()}</td>
              <td className="p-3 text-[#515151]">
              <span className="bg-[#E5E5EA] py-1.5 font-semibold rounded-3xl px-2.5 ">{product.quantity} pcs</span>
              </td>
              <td className="p-3 flex justify-center items-center">
                    <button className="flex bg-[#F2EBFD] text-[#7B36E7] px-4 py-2 gap-5 rounded font-bold hover:bg-[#F2EBFD]">
                        <img src={IconBuy} alt="" /> Buy
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
