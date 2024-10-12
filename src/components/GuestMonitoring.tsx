import React from 'react';

const GuestMonitoring: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full">
      <h2 className="text-md font-semibold mb-4">Guest Monitoring</h2>
      <div className="flex justify-center items-center">
        <div className="relative w-24 h-24">
          {/* Replace with actual gauge chart */}
          <div className="h-full w-full bg-blue-100 rounded-full flex justify-center items-center">
            <span className="text-xl font-bold text-blue-600">12,040</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div className="text-center">
          <span className="block text-blue-600 font-bold">8,040</span>
          <span className="text-gray-500 text-sm">Active</span>
        </div>
        <div className="text-center">
          <span className="block text-gray-500 font-bold">4,000</span>
          <span className="text-gray-500 text-sm">Inactive</span>
        </div>
      </div>
    </div>
  );
};

export default GuestMonitoring;
