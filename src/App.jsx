import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import FlavorCarousel from './components/FlavorCarousel';
import Handcrafted from './components/Handcrafted';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
 
  const [cartCount, setCartCount] = useState(0);
  const [isOrderMenuOpen, setIsOrderMenuOpen] = useState(false);
  const [showStory, setShowStory] = useState(false);

  
  useEffect(() => {
    console.log('Daily Dough landing page loaded!');
    
    
    const savedCart = localStorage.getItem('cartCount');
    if (savedCart) {
      setCartCount(parseInt(savedCart));
    }
  }, []); 

  
  useEffect(() => {
    localStorage.setItem('cartCount', cartCount.toString());
  }, [cartCount]); 

 
  const handleOrderClick = () => {
    setIsOrderMenuOpen(true);
    setCartCount(cartCount + 1);
    alert('✨ Added a box to your order! Check your cart.');
  };

  
  const handleStoryClick = () => {
    setShowStory(true);
  };

  
  const handleOfferClick = () => {
    alert('🎉 Special offer applied! You get 2 free pastries with a box of 12!');
    setCartCount(cartCount + 1);
  };

  
  const renderOrderMenu = () => {
    if (!isOrderMenuOpen) return null;

    return (
      <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-8 max-w-md w-full">
          <h3 className="text-2xl font-bold text-[#2c2c2c] mb-4">Quick Order</h3>
          <p className="text-[#666] mb-6">
            Choose your box size and we'll prepare your fresh pasti!
          </p>
          <div className="space-y-4 mb-6">
            <button className="w-full border-2 border-[#b8860b] text-[#b8860b] px-4 py-3 rounded-lg hover:bg-[#f5f1ed] transition font-medium">
              Small Box (6) - 20 Birr
            </button>
            <button className="w-full bg-[#b8860b] text-white px-4 py-3 rounded-lg hover:bg-[#9a7008] transition font-medium">
              Medium Box (12) - 40 Birr ⭐
            </button>
            <button className="w-full border-2 border-[#b8860b] text-[#b8860b] px-4 py-3 rounded-lg hover:bg-[#f5f1ed] transition font-medium">
              Large Box (24) - 80 Birr
            </button>
          </div>
          <button
            onClick={() => setIsOrderMenuOpen(false)}
            className="w-full text-[#666] hover:text-[#2c2c2c] transition"
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  
  const renderStoryModal = () => {
    if (!showStory) return null;

    return (
      <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-96 overflow-y-auto shadow-2xl">
          <h2 className="text-3xl font-bold text-[#2c2c2c] mb-4">Our Story</h2>
          <p className="text-[#666] mb-4 leading-relaxed">
             Daily Dough was born from a simple passion: to share the authentic taste of Ethiopian pasti with the world. Our journey began in the heart of Addis Ababa, where our founder learned the traditional art of making these golden delights from their grandmother.
          </p>
          <p className="text-[#666] mb-4 leading-relaxed">
            Every morning, our skilled artisans craft each batch by hand using only the finest ingredients. We believe in quality over shortcuts, which is why we use premium butter, fresh eggs, and the perfect blend of spices.
          </p>
          <p className="text-[#666] mb-6 leading-relaxed">
            Today, Daily Dough is committed to bringing you the warmth and love of Ethiopian traditions in every bite. We deliver fresh, handcrafted pasti directly to your door, because you deserve nothing but the best.
          </p>
          <button
            onClick={() => setShowStory(false)}
            className="w-full bg-[#b8860b] text-white px-4 py-3 rounded-lg hover:bg-[#9a7008] transition font-medium"
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  return (
    <main className="bg-[#f5f1ed]">
      {/* Header with cart count from global state */}
      <Header cartCount={cartCount} />

      {/* Hero section with order and story handlers */}
      <Hero onOrderClick={handleOrderClick} onStoryClick={handleStoryClick} />

      {/* Features section */}
      <Features />

      {/* Flavor carousel with pagination - This shows partial rendering */}
      <FlavorCarousel itemsPerPage={3} />

      {/* Handcrafted section */}
      <Handcrafted showDescription={true} />

      {/* How it works */}
      <HowItWorks />

      {/* Reviews section */}
      <Reviews />

      {/* Call to action */}
      <CTA onOfferClick={handleOfferClick} />

      {/* Footer */}
      <Footer year={2024} />

      {/* Conditional rendering of order menu based on state */}
      {renderOrderMenu()}

      {/* Conditional rendering of story modal based on state */}
      {renderStoryModal()}
    </main>
  );
}

export default App;
