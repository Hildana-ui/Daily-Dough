import React, { useState } from 'react';
import flavors from '../data/flavors';


const FlavorCarousel = ({ itemsPerPage = 3 }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(flavors.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const displayedFlavors = flavors.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section id="menu" className="bg-[#f5f1ed] px-4 md:px-12 py-16 md:py-24">
      <div className="flex items-center justify-between mb-12">
        <div>
          <p className="text-xs font-bold text-[#b8860b] tracking-widest uppercase mb-2">OUR FLAVORS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c2c2c]">Discover Your Favorite</h2>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={handlePrev}
            disabled={currentPage === 0}
            className="w-10 h-10 rounded-full border-2 border-[#b8860b] text-[#b8860b] hover:bg-[#b8860b] hover:text-white disabled:opacity-50 transition flex items-center justify-center"
          >
            ←
          </button>
          <button 
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            className="w-10 h-10 rounded-full border-2 border-[#b8860b] text-[#b8860b] hover:bg-[#b8860b] hover:text-white disabled:opacity-50 transition flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {displayedFlavors.map((flavor) => (
          <div key={flavor.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
            <img src={flavor.image} alt={flavor.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#2c2c2c] mb-2">{flavor.name}</h3>
              <p className="text-[#666] text-sm mb-4">{flavor.description}</p>
              <div className="flex items-center gap-2 text-[#b8860b]">
                <span className="text-sm font-medium">Learn More</span>
                <span>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`w-2 h-2 rounded-full transition ${
              i === currentPage ? 'bg-[#b8860b]' : 'bg-[#d4a574]'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default FlavorCarousel;
