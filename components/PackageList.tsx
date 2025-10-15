
import React from 'react';
import { packageItems } from '../constants';

const PackageList: React.FC = () => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
      <h3 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-green-200 pb-4">
        প্যাকেজে যা যা থাকছে
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
        {packageItems.map((item, index) => (
          <div key={index} className="flex items-start">
            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
              {index + 1}
            </span>
            <p className="text-gray-700">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageList;
