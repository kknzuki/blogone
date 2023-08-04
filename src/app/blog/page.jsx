import Image from 'next/image';
import React from 'react';
import darkmoon from 'public/darkmoon.jpg';
import r43ockjN from 'public/r43ockjN.jpeg';
import Link from 'next/link';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const post=await getData(params.id)
 return {title:post.title,
  description: post.desc,}
}



const Blog = async () => {
  const data = await getData();
  return (
    <div>
      {data.map((item) => (
        <Link
          href='blog/test1'
          className='grid grid-cols-2 gap-2  p-5'
          key={item.id}
        >
          <div>
            <Image src={darkmoon} alt='' width={400} height={250} />
          </div>
          <div>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold mb-4 p-4'>
              {item.title}
            </h1>
            <small>{item.userId}</small>
            <p className='mb-4 p-4'>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
