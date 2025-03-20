import React from 'react';

const Header = () => {
    return (
        <div className="bg-blue-50 rounded-t-xl px-12 py-8 mb-3 relative overflow-hidden border-b border-gray-200">

            <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-blue-100 rounded-full blur-lg"></div>

            <div className="absolute left-0 top-1/3 w-60 h-0.5 bg-gradient-to-r from-blue-200 to-blue-400"></div>

            <div className="relative">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold text-blue-primary leading-tight">
                        HTTP & REST
                    </h1>
                    <div className="inline-block px-4 py-2 bg-blue-100 border border-green-100 rounded-full shadow-sm">
                        <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                            1960 - 2022
                        </span>
                    </div>
                </div>

                <p className="text-md max-w-3xl font-roboto mb-6 text-gray-700">
                    Exploring the journey from basic HTTP to modern web architecture — covering REST APIs, cookies, CORS, caching strategies, and the protocols that shaped today's internet experience.
                </p>

                <div className="flex flex-wrap gap-2">
                    {['HTTP', 'REST', 'Cookies', 'CORS', 'Caching', 'Authentication'].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-blue-primary font-semibold shadow-sm border border-gray-200">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;