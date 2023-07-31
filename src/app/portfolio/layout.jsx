import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className='text-xl md:text-4xl lg:text-6xl text-gray-700 p-4 font-bold'>Our Works</h1>
      {children }
    </div>
  );
};

export default Layout;
