// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaUserCircle } from "react-icons/fa";
// import Castine from "../../assets/images/castine.png";

// const Navbar = ({ onAddLog }) => {
//   const navigate = useNavigate();
//   const [showAddLog, setShowAddLog] = useState(false);

//   const user = {
//     name: "Castine",
//     email: "castiin@sociafy.com",
//     balance: "NGN 179,000",
//     add: "Add New Log",
//     image: Castine,
//   };

//   const handleAddLog = () => {
//     setShowAddLog(true);
//     if (onAddLog) onAddLog();
//   };

//   return (
//     <>
//       {/* Header Section */}
//       <div className="flex items-center justify-between gap-4 mb-8 font-custom">
//         <div className="flex items-center gap-4">
//           {user.image ? (
//             <img
//               src={user.image}
//               alt="User"
//               className="w-14 h-14 rounded-full object-cover"
//             />
//           ) : (
//             <FaUserCircle className="text-gray-400 w-14 h-14" />
//           )}
//           <div>
//             <h2 className="text-xl font-bold">Welcome, {user.name}</h2>
//             <p className="text-sm text-gray-500">{user.email}</p>
//           </div>
//         </div>

//         <button
//           onClick={handleAddLog}
//           className="rounded-lg px-6 py-3 bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white font-medium hover:opacity-90 transition-all"
//         >
//           {user.add}
//         </button>
//       </div>

//       {/* Optional Navigation Section */}
//       {/* 
//       <div className="text-sm text-gray-500 mb-2 cursor-pointer" onClick={() => navigate(-1)}>
//         Go Back /{" "}
//         <span className="text-[#351A60] font-semibold capitalize">
//           Facebook Logs
//         </span>
//       </div> 
//       */}
//     </>
//   );
// };

// export default Navbar;
