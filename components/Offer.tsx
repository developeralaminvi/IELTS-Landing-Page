
import React from 'react';

const Offer: React.FC = () => {
  const offerItems = [
    '১টি ফ্রী মক টেস্ট',
    'স্টাডি প্ল্যান গাইড',
    'এক্সট্রা প্র্যাকটিস মেটেরিয়াল',
  ];

  return (
    <div className="bg-gradient-to-br from-yellow-300 to-orange-400 p-6 rounded-2xl shadow-2xl border-4 border-white">
      <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">
        <span role="img" aria-label="gift">🎁</span> স্পেশাল অফার
      </h3>
      <p className="text-center text-gray-800 font-semibold text-lg mb-6">
        আজই বুক করলে পাচ্ছেন:
      </p>
      <ul className="space-y-3">
        {offerItems.map((item, index) => (
          <li key={index} className="flex items-center text-gray-900">
            <svg
              className="w-6 h-6 text-green-700 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span className="font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Offer;
