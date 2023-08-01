import React from 'react';
import Image from 'next/image';
import { items } from './data.js'
import { notFound } from "next/navigation";

const getData=(cat)=>{
  const data = items[cat]
  if (data) {
    return data
  }
  return notFound()

}


const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className=''>
      <h1 className='text-xl md:text-2xl lg:text-6xl font-bold text-green-600 mb-6 text-center capitalize p-5 '>{params.category}</h1>

      {data.map((item) => (
        <div className='p-5 grid md:grid-cols-2 lg:grid-cols-2 xs:grid-cols-2 justify-between gap-2' key={item.id}>
          <div className=''>
            <h1 className='text-xl md:text-3xl lg:text-5xl font-bold text-gray-600 mb-4'>{item.title}</h1>
            <p className=''>{item.desc}</p>
            <button className="bg-green-600 p-2 text-white mt-4 rounded hover:bg-yellow-400 visited:bg-red-400 mb-4">see more</button>
          
          </div>
          <div className=''>
            <Image
              className=''
            
              src={item.image}
              alt=""
              height={500}
              width={400}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
