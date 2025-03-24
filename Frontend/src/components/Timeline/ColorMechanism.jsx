import React from 'react';

const ColorMechanism = () => {
  const colorMechanisms = [
    { color: 'bg-red-500', mechanism: 'Error Handling' },
    { color: 'bg-blue-500', mechanism: 'Data Fetching' },
    { color: 'bg-green-500', mechanism: 'Success States' },
    { color: 'bg-yellow-500', mechanism: 'Warnings' },
    { color: 'bg-purple-500', mechanism: 'Authentication' },
    { color: 'bg-pink-500', mechanism: 'User Interactions' },
    { color: 'bg-indigo-500', mechanism: 'Navigation' },
    { color: 'bg-gray-500', mechanism: 'Disabled States' },
  ];

  return (
    <div className="p-2 w-36  bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Color Mechanisms</h2>
      <p className="text-gray-600 mb-6">
        Below is a list of colors and their corresponding mechanisms used in the application:
      </p>
      <div className="space-y-4">
        {colorMechanisms.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className={`w-8 h-8 rounded-full ${item.color} mr-4`}></div>
            <div className="text-gray-700">
              <span className="font-semibold">{item.mechanism}</span>
              <span className="text-gray-500 ml-2">({item.color.replace('bg-', '')})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorMechanism;