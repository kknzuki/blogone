import React from 'react';
import Image from 'next/image';

const Category = ({ params }) => {
  return (
    <div>
      <h1 className='p-5 capitalize text-xl md:text-3xl text-green-600'>
        {params.category}
      </h1>
      {/* container for notes */}
      <div className='grid grid-cols-2'>
        {/* /first note */}
        <div className='p-5 text-center'>
          <h2 className='text-xl md:text-2xl lg:text-3xl mb-4'>Test</h2>
          <p className='mb-8'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            accusamus porro nihil. Qui.
          </p>
          <button
            className='bg-green-600 text-white p-2 rounded hover:bg-yellow-400'
            url='#'
          >
            See more
          </button>
          <div>
            <Image
              src='/public/darkmoon.jpg'
              alt='background image'
              width={300}
              height={300}
            />
          </div>
        </div>
        {/* second note */}
        <div className='p-5 text-center'>
          <h2 className='text-xl md:text-2xl lg:text-3xl mb-4'>Test 2</h2>
          <p className='mb-8'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            accusamus porro nihil. Qui.lorem12
          </p>
          <button className="bg-green-600 text-white p-2 rounded hover:bg-yellow-400 url='#'">
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
