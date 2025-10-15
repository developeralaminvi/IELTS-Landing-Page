
import React from 'react';

const features = [
  'সর্বশেষ ২০২৫-২০২৬ এডিশন',
  'বাংলা এক্সপ্ল্যানেশন সহ',
  'কমপ্লিট ভোকাবুলারি গাইড',
  'অফিসিয়াল ও থার্ড-পার্টি রিসোর্স মিক্স',
];

const Features: React.FC = () => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
      <h3 className="text-3xl font-bold text-gray-900 mb-6">
        স্পেশাল ফিচারস
      </h3>
      <ul className="space-y-3">
        {features.map((item, index) => (
          <li key={index} className="flex items-center text-lg text-gray-700">
            <span className="text-2xl mr-3">✅</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
