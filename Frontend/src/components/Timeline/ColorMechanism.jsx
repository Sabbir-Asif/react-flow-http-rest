import React from 'react';

const ColorMechanism = () => {
  const colorMechanisms = [
    { color: 'bg-red-500', mechanism: 'Error Handling' },
    { color: 'bg-blue-500', mechanism: 'Data Fetching' },
    { color: 'bg-green-500', mechanism: 'Success States' },
    { color: 'bg-yellow-500', mechanism: 'Warnings' },
    { color: 'bg-pink-500', mechanism: 'User Interactions' },
    { color: 'bg-indigo-500', mechanism: 'Navigation' },
    { color: 'bg-gray-500', mechanism: 'Disabled States' },
  ];

  return (
    <div className="w-36 p-3 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="space-y-2">
        {colorMechanisms.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className={`w-4 h-4 ${item.color} mr-2`}></div> {/* Small square color indicator */}
            <div className="text-xs text-gray-700">
              <span>{item.mechanism}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorMechanism;