
import React from 'react';

const highlights = [
  'সমস্ত অফিসিয়াল কেমব্রিজ বই (10-20)',
  'বাংলায় সম্পূর্ণ সলিউশন',
  '২০২৫ এর আপডেটেড ম্যকার সিরিজ',
  'এক্সপার্ট গাইড (Simon, Liz, Reachel)',
  'ব্রিটিশ কাউন্সিলের অরিজিনাল CUE কার্ড',
];

const Highlights: React.FC = () => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
      <h3 className="text-3xl font-bold text-gray-900 mb-6">
        <span role="img" aria-label="target">🎯</span> প্যাকেজ হাইলাইটস
      </h3>
      <h4 className="text-xl font-semibold text-green-700 mb-4">কমপ্লিট কালেকশন সুবিধা</h4>
      <ul className="space-y-3">
        {highlights.map((item, index) => (
          <li key={index} className="flex items-center text-lg text-gray-700">
             <span className="text-2xl mr-3">✅</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Highlights;
