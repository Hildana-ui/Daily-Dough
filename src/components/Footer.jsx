import React from 'react';

const Footer = ({ year = 2024 }) => {
  return (
    <footer id="contact" className="bg-[#2c2c2c] text-white px-4 md:px-12 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-[#b8860b] mb-2">DAILY DOUGH</h3>
          <p className="text-gray-400 text-sm">Handmade with love. Delivered with care.</p>
        </div>

        {/* Location */}
        <div>
          <h4 className="font-bold mb-3">📍 Location</h4>
          <p className="text-gray-400 text-sm">Addis Ababa, Ethiopia</p>
          <p className="text-gray-400 text-sm">+251 900 123 456</p>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-bold mb-3">🕐 Hours</h4>
          <p className="text-gray-400 text-sm">Open Daily</p>
          <p className="text-gray-400 text-sm">7:00 AM - 9:00 PM</p>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-bold mb-3">Follow Us</h4>
        
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 pt-8">
        <p className="text-gray-500 text-sm text-center">
          © {year} Daily Dough. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
