import React from 'react';

const Header = () => {
    return (
        <div className='p-8 bg-[#CECECE]'>
            <h2 className='text-4xl text-gray-700 font-extrabold font-nunito'>What is HTTP?</h2>
            <p className='text-md text-gray-700 font-light mt-4'>
                The Hypertext Transfer Protocol is used to load pages on the Internet using hyperlinks.
            </p>
        </div>
    );
};

export default Header;