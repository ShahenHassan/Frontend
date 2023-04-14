import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Login from "../../pages/login/Login";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
   return (
     <nav className="w-full bg-red-600 shadow ">
       <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
         <div>
           <div className="flex items-center justify-between py-3 md:py-5 md:block">
             <a href="javascript:void(0)">
               <h2 className="text-2xl font-bold text-white">KurdishFood</h2>
             </a>
             <div className="md:hidden">
               <button
                 className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                 onClick={() => setNavbar(!navbar)}
               >
                                </button>
             </div>
           </div>
         </div>
         <div>
           <div
             className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
               navbar ? "block" : "hidden"
             }`}
           >
             <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
               <li className="text-white hover:text-indigo-200">
                 <Link to="/">Home</Link>
               </li>

               <li className="text-white hover:text-indigo-200">
                 <Link to="/about">About</Link>
               </li>
               <li className="text-white hover:text-indigo-200">
                 <Link to="/contact">Contact</Link>
               </li>
               <li className="text-white hover:text-indigo-200  ">
                 <Link to="/login">Login</Link>
               </li>
               <li className="text-white hover:text-indigo-200  ">
                 <Link to="/shop">Onlin-order</Link>
               </li>
             </ul>

             <div className="mt-3 space-y-2 lg:hidden md:inline-block"></div>
           </div>
         </div>
         <div className="hidden space-x-2 md:inline-block"></div>
       </div>
     </nav>
   );
}
export default Navbar;
