import React from 'react';

const ColorMechanism = () => {
  const colorMechanisms = [
    { color: 'bg-red-500', mechanism: 'CORS' },
    { color: 'bg-blue-500', mechanism: 'Cookies' },
    { color: 'bg-green-500', mechanism: 'Connection' },
    { color: 'bg-yellow-500', mechanism: 'Method' },
    { color: 'bg-pink-500', mechanism: 'Header' },
    { color: 'bg-indigo-500', mechanism: 'Status Code' },
    { color: 'bg-gray-500', mechanism: 'Caching' },
    { color: 'bg-pink-500', mechanism: 'Event' },
  ];

  return (
    <div className=" p-3 w-52 mr-4 h-72 my-32 bg-white rounded-lg shadow-md border border-4 border-solid border-black ">
      <div className="flex flex-col space-y-2 ">
        {colorMechanisms.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className={`w-10 h-2 rounded-lg ${item.color} mr-2`}></div> {/* Small square color indicator */}
            <div className="text-base font-bold  text-gray-700">
              <span>{item.mechanism}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorMechanism;