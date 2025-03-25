import React from 'react';

const ColorMechanism = () => {
  const colorMechanisms = [
    { color: 'bg-[#DECFB9]', mechanism: 'CORS' },
    { color: 'bg-[#EAE79B]', mechanism: 'Cookies' },
    { color: 'bg-[#F8AA38]', mechanism: 'Connection' },
    { color: 'bg-[#C2EAAE]', mechanism: 'Method' },
    { color: 'bg-[#B7E7E5]', mechanism: 'Header' },
    { color: 'bg-[#98C9FE]', mechanism: 'Status Code' },
    { color: 'bg-[#E5D1E3]', mechanism: 'Caching' },
    { color: 'bg-[#D3D3D3]', mechanism: 'Event' },
    { color: 'bg-[#dfb2b2]', mechanism: 'REST' },
  ];

  return (
    <div className="p-3 lg:w-36 h-72 bg-white rounded-lg shadow-md border-4 border-solid border-black">
      <div className="flex flex-col space-y-2">
        {colorMechanisms.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className={`w-8 h-2 rounded-lg ${item.color} mr-2`}></div> {/* Small square color indicator */}
            <div className="text-sm md:text-md font-bold text-gray-700">
              <span>{item.mechanism}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorMechanism;