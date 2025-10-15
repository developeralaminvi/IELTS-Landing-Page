
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h4 className="text-2xl font-semibold mb-3">
          <span role="img" aria-label="phone">📞</span> কনফিউজড?
        </h4>
        <p className="text-lg text-gray-300 mb-4">
          আমাদের এক্সপার্টকে জিজ্ঞেস করুন:
        </p>
        <a
          href="https://wa.me/8801674163570?text=I%20have%20a%20question%20about%20the%20IELTS%20package."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-xl"
        >
          WhatsApp: 01674163570
        </a>
        <p className="mt-8 text-gray-500 text-sm">© 2024 IELTS প্রস্তুতি. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
