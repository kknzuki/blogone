import Link from 'next/link';
import React from 'react';

const Portfolio = () => {
  return (
    <section className='my-8'>
      <div>
        <h2 className='p-4 text-xl md:text-4xl'>Our Gallery</h2>
      </div>
      <div className='grid grid-cols-3 gap-3 p-5 '>
        <Link
          href='portfolio/illustrations'
          className='border-2 border-gray-400 p-4 h-[500px] w-[300px]'
        >
          <span className='text-gray-600 absolute bottom-0 hover:text-green-600 font-bold text-xl '>Illustrations</span>
        </Link>
        <Link
          href='portfolio/websites'
          className='border-2 border-gray-400 p-4 h[400px] w-[400]'
        >
          <span className='text-gray-600 absolute bottom-0 hover:text-green-600 font-bold text-xl' >Websites</span>
        </Link>
        <Link
          href='portfolio/applications'
          className='border-2 border-gray-400 p-4 h[400px] w-[400]'
        >
          <span className='text-gray-600 absolute bottom-0 hover:text-green-600 font-bold text-xl'>Application</span>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
