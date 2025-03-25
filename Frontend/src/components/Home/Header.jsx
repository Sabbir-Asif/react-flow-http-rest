import React from 'react';

const Header = () => {
    return (
        <section>
            <div className='p-8 bg-gray-100'>
                <div className='max-w-6xl mx-auto'>
                    <h2 className='text-4xl text-gray-700 font-extrabold font-nunito'>What is HTTP?</h2>
                    <p className='text-md text-black font-light mt-4'>
                        The Hypertext Transfer Protocol is used to load pages on the Internet using hyperlinks.
                    </p>
                </div>
            </div>
            <div className='p-2 bg-[#CAFEE7] border-y-2 border-black'>
                <p className='text-lg text-center text-gray-700 font-medium'>
                This documentation is created for learning about HTTP evolutions in chronological order
                </p>
            </div>
        </section>
    );
};

export default Header;