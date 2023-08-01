import Image from 'next/image';
import React from 'react';
import darkmoon from 'public/darkmoon.jpg';
import {notFound} from 'next/navigation'

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}


const BlogPost =async ({ params }) => {
  const data = await getData(params.id)
  return (
    
    <div>
      {/* first blog */}
      <div className="grid grid-cols-2">
      <div>
        <Image src={darkmoon} alt='' width={400} height={250} className="p-5" />
        </div>
        <div>
        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold mb-4 p-4'>
          {data.title}
        </h1>
        <p className='mb-4 p-4'>
     {data.content}
        </p>
      </div>
     
      </div>
      
      
      {/* author pic and name */}
      <div className='inline-flex text-center self-center p-5'>
        {' '}
        <Image
          src={data.img}
          alt=''
          width={80}
          height={25}
          className='rounded-full p-2'
        />
        <p className="">{data.username} <br/>
        <span>developer</span></p>
      </div>

    </div>
  );
};

export default BlogPost;
