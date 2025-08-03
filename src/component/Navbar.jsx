
// Navbar.jsx

import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const email = sessionStorage.getItem("Email");

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("Email");
    navigate("/");
  }

  return (
    <nav className="bg-blue-600 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Left - Logo and Links */}
        <div className="flex items-center gap-6">
          <a className="text-2xl font-bold">Shopi</a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4 text-sm">
            <Link to="/all" className="hover:underline">All</Link>
            <Link to="/clothes" className="hover:underline">Clothes</Link>
            <Link to="/electronics" className="hover:underline">Electronics</Link>
            <Link to="/furnitures" className="hover:underline">Furnitures</Link>
            <Link to="/toys" className="hover:underline">Toys</Link>
            
          </div>
        </div>

        {/* Right - User Info and Cart */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          <span className="text-blue-200 text-xs">{email}</span>
          <Link to="/search-product" className="block hover:underline">Search product</Link>
          <Link to="/my-cart" className="hover:underline">My Carts</Link>
          <Link to="/my-account" className="hover:underline">My Account</Link>
          <Link to="/my-cart" className="flex items-center gap-1 bg-white text-blue-600 px-2 py-1 rounded" >
            <FaShoppingCart />
            <span>0</span>
          </Link>
          <button onClick={handleLogout} className="hover:underline bg-red-500 p-3 rounded">Logout</button>
        </div>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm">
          <Link to="/all" className="block hover:underline">All</Link>
          <Link to="/clothes" className="block hover:underline">Clothes</Link>
          <Link to="/electronics" className="block hover:underline">Electronics</Link>
          <Link to="/furnitures" className="block hover:underline">Furnitures</Link>
          <Link to="/toys" className="block hover:underline">Toys</Link>
          <hr />
          <span className="text-xs text-blue-200">{email}</span>
          <Link to="/search-product" className="block hover:underline">Search product</Link>
          <Link to="/my-cart" className="block hover:underline">My Carts</Link>
          <Link to="/my-account" className="block hover:underline">My Account</Link>
          <Link  to="/my-cart" className="flex items-center gap-1 mt-2 bg-white text-blue-600 w-max px-2 py-1 rounded">
            <FaShoppingCart />
            <span>0</span>
          </Link>

          <button to={handleLogout} className="block hover:underline bg-red-500 p-3 rounded">Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


