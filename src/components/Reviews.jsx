import React, { useState } from 'react';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      text: 'The softest, warmest dessert I\'ve had in Addis! Absolutely addictive.',
      author: 'Hana M.',
      rating: 5
    },
    {
      id: 2,
      text: 'The honey glaze tastes like childhood memories. Simply perfect.',
      author: 'Daniel T.',
      rating: 5
    },
    {
      id: 3,
      text: 'Fresh, delicious, and always consistent. My go-to treat!',
      author: 'Sara K.',
      rating: 5
    },
    {
      id: 4,
      text: 'You can taste the quality in every bite. Highly recommended!',
      author: 'Michael Y.',
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="bg-[#f5f1ed] px-4 md:px-12 py-16 md:py-24">
      <div className="mb-12">
        <p className="text-xs font-bold text-[#b8860b] tracking-widest uppercase mb-2">WHAT OUR CUSTOMERS SAY</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#2c2c2c]">Loved by Thousands</h2>
      </div>

      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
        <div className="mb-8">
          <div className="flex gap-1 mb-4">
            {Array(reviews[currentReview].rating).fill(0).map((_, i) => (
              <span key={i} className="text-2xl">⭐</span>
            ))}
          </div>
          <p className="text-lg text-[#666] mb-6 italic">"{reviews[currentReview].text}"</p>
          <p className="text-[#2c2c2c] font-bold">{reviews[currentReview].author}</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-[#666]">
            {currentReview + 1} / {reviews.length} reviews
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentReview(currentReview === 0 ? reviews.length - 1 : currentReview - 1)}
              className="w-10 h-10 rounded-full border-2 border-[#b8860b] text-[#b8860b] hover:bg-[#b8860b] hover:text-white transition flex items-center justify-center"
            >
              ←
            </button>
            <button
              onClick={() => setCurrentReview((currentReview + 1) % reviews.length)}
              className="w-10 h-10 rounded-full border-2 border-[#b8860b] text-[#b8860b] hover:bg-[#b8860b] hover:text-white transition flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentReview(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === currentReview ? 'bg-[#b8860b]' : 'bg-[#d4a574]'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
