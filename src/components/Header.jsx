import React from 'react';

const Header = ({ cartCount }) => {
  return (
    <header className="bg-[#f5f1ed] px-4 md:px-12 py-4 flex items-center justify-between border-b border-[#e8ddd0]">
      {/* Logo */}
      <div className="text-2xl font-bold text-[#b8860b] tracking-widest">
        DAILY DOUGH
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex gap-8 items-center">
        <a href="#home" className="text-[#2c2c2c] hover:text-[#b8860b] transition font-medium">Home</a>
        <a href="#menu" className="text-[#2c2c2c] hover:text-[#b8860b] transition font-medium">Menu</a>
        <a href="#story" className="text-[#2c2c2c] hover:text-[#b8860b] transition font-medium">Our Story</a>
        <a href="#reviews" className="text-[#2c2c2c] hover:text-[#b8860b] transition font-medium">Reviews</a>
        <a href="#contact" className="text-[#2c2c2c] hover:text-[#b8860b] transition font-medium">Contact</a>
      </nav>

      {/* Cart button */}
      <div className="flex items-center gap-4">
        <button className="bg-[#b8860b] text-white px-6 py-2 rounded-full font-medium hover:bg-[#9a7008] transition">
          Order Now
        </button>
        <div className="relative">
          <svg className="w-6 h-6 text-[#2c2c2c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
