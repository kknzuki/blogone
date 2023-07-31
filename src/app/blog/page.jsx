import Image from 'next/image';
import React from 'react';
import darkmoon from 'public/darkmoon.jpg';
import r43ockjN from 'public/r43ockjN.jpeg';
import Link from 'next/link';

const Blog = () => {
  return (
    <div >
      <Link href='/blog/test1'className='grid grid-cols-2 gap-2  p-5'>
        <div>
          <Image src={darkmoon} alt='' width={400} height={250} />
        </div>
        <div>
          <h1 className='text-xl md:text-2xl lg:text-3xl font-bold mb-4 p-4'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam rem
            impedit soluta!
          </h1>
          <p className='mb-4 p-4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            exercitationem voluptatibus nemo esse sint debitis ut porro iste
            excepturi dolor ex, quos officiis, eveniet rem quasi molestias?
            Ipsam magni quidem molestias natus tempore obcaecati.
          </p>
        </div>
      </Link>
      {/* second blog */}
      <Link href='/blog/test2'className='grid grid-cols-2 gap-2  p-5'>
        <div>
          <Image src={r43ockjN} alt='' width={400} height={250} />
        </div>
        <div>
          <h1 className='text-xl md:text-2xl lg:text-3xl font-bold mb-4 p-4'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam rem
            impedit soluta!
          </h1>
          <p className='mb-4 p-4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            exercitationem voluptatibus nemo esse sint debitis ut porro iste
            excepturi dolor ex, quos officiis, eveniet rem quasi molestias?
            Ipsam magni quidem molestias natus tempore obcaecati.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
