import React from "react";
import IconBuy from '../assets/images/bag.png'
import Instagram from '../assets/images/instagram.png'

const products = [
  { name: "USA 🇺🇸 Standard IG", title: "5-8yrs with posts | 1000 followers",  icon: Instagram, price: 30000, quantity: 231 },
  { name: "Handbag Facebook", platform: " ", icon: Instagram, price: 30000, quantity: 231 },
  { name: "Smartwatch Twitter/X", platform: " ", icon: "🐦", price: 30000, quantity: 231 },
  { name: "Sunglasses Instagram", platform: " ", icon: "📸", price: 30000, quantity: 231 },
  { name: "Hoodie Facebook", platform: " ", icon: "📘", price: 30000, quantity: 231 },
  { name: "Earrings Instagram", platform: " ", icon: "📸", price: 30000, quantity: 231 },
  { name: "Phone Case Twitter/X ", platform: " ", icon: "🐦", price: 30000, quantity: 231 },
  { name: "Perfume Facebook", platform: " ", icon: "📘", price: 30000, quantity: 231 },
  { name: "Laptop Bag Instagram", platform: " ", icon: "📸", price: 30000, quantity: 231 },
  { name: "Bracelet Twitter/X", platform: " ", icon: "🐦", price: 30000, quantity: 231 }
];

const ProductTable = () => {
  return (
    <div className="container mx-auto px-4 w-full max-w-[1200px] p-6 bg-white  rounded-lg mt-20">
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
            <tr key={index} className=" border-b border-[#EDF2F7] justify-center items-center">
              <td className="p-3 flex">
                    <img src={product.icon} alt="" height="32 px" width="32px" />
                    <span className="grid grid-cols-1 gap-1">
                        <span className="font-semibold">{product.name}</span>
                        <span className="text-gray-600">{product.title}</span>
                    </span>
                </td>

              <td className="p-3 text-[#515151] font-medium ">₦{product.price.toLocaleString()}</td>
              <td className="p-3 text-[#515151]">
              <span className="bg-[#E5E5EA] py-1.5 font-semibold rounded-3xl px-2.5 ">{product.quantity} pcs</span>
              </td>
              <td className="p-3 flex justify-center items-center text-center">
                    <button className="flex bg-[#F2EBFD] text-[#7B36E7] px-4 py-2 gap-5 rounded font-bold hover:bg-[#F2EBFD]">
                        <img src={IconBuy} alt="" /> Buy
                    </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
     <div className="text-center">
        <button className="mx-auto md:mt-12 mt-4 md:mb-20 bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white px-32 py-3 rounded-lg shadow-md hover:bg-gradient-to-r from-[#622BB9] to-[#351A60] transition">
             View More
        </button>
     </div>
    </div>
  );
};

export default ProductTable;
