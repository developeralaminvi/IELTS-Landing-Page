
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-green-700">IELTS প্রস্তুতি</h1>
          <a
            href="#cta"
            className="hidden sm:inline-block bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-300"
          >
            অর্ডার করুন
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
