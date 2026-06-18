import React from 'react';

const Handcrafted = ({ showDescription = true }) => {
  return (
    <section className="bg-[#f5f1ed] px-4 md:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-16">
      {/* Left image */}
      <div className="flex-1">
        <img 
          src="/handcrafted.png" 
          alt="Handcrafted Process" 
          className="w-full rounded-3xl shadow-lg"
        />
      </div>

      {/* Right content */}
      <div className="flex-1">
        <p className="text-xs font-bold text-[#b8860b] tracking-widest uppercase mb-4">MADE WITH CARE</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#2c2c2c] mb-6">Handcrafted Every Morning</h2>
        
        {showDescription && (
          <p className="text-[#666] text-lg mb-8 leading-relaxed">
            We start every morning, mixing the finest ingredients, frying to golden perfection, and finishing with a delicate snowfall of sugar.
          </p>
        )}

        <button className="border-2 border-[#b8860b] text-[#b8860b] px-8 py-3 rounded-full font-medium hover:bg-[#f5f1ed] transition">
          Learn Our Story
        </button>
      </div>
    </section>
  );
};

export default Handcrafted;
