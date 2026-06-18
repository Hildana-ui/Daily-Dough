import React from 'react';

const CTA = ({ onOfferClick }) => {
  return (
    <section className="bg-[#f5f1ed] px-4 md:px-12 py-16 md:py-20">
      <div className="bg-gradient-to-r from-[#b8860b] to-[#c9a961] rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row">
        {/* Left side - text */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center text-white">
          <p className="text-xs font-bold tracking-widest uppercase mb-4 opacity-90">THIS WEEK'S SPECIAL</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Buy a box of 12 and get 2 free!</h2>
          <button 
            onClick={onOfferClick}
            className="bg-white text-[#b8860b] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition w-fit"
          >
            Claim Offer
          </button>
        </div>

        {/* Right side - image */}
        <div className="flex-1 h-48 md:h-auto bg-cover bg-center opacity-80" style={{backgroundImage: 'url(/flavor-honey.png)'}} />
      </div>
    </section>
  );
};

export default CTA;
