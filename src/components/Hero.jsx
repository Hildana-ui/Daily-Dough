import React from 'react';
import heroPasti from "../assets/hero-pasti.png"

const Hero = ({ onOrderClick, onStoryClick }) => {
  return (
    <section id="home" className="bg-[#f5f1ed] px-4 md:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-16">
      <div className="flex-1">
        <p className="text-xs font-bold text-[#b8860b] tracking-widest uppercase mb-4">
          FRESHLY CRAFTED. PERFECTLY SWEET.
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2c2c2c] mb-6 leading-tight">
          Crispy on the outside. Soft on the inside.
        </h1>
        <p className="text-[#666] text-lg mb-8 leading-relaxed">
          Handmade dough bites, golden fried to perfection and dusted with love.
        </p>

        <div className="flex gap-4 mb-8">
          <button 
            onClick={onOrderClick}
            className="bg-[#b8860b] text-white px-8 py-3 rounded-full font-medium hover:bg-[#9a7008] transition"
          >
            Order Now
          </button>
          <button 
            onClick={onStoryClick}
            className="border-2 border-[#b8860b] text-[#b8860b] px-8 py-3 rounded-full font-medium hover:bg-[#f5f1ed] transition"
          >
            Our Story
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <img 
          src={heroPasti}
          alt="Daily Dough Pastries" 
          className="w-full max-w-sm rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
