import Image from 'next/image';
import React from 'react';
import darkmoon from 'public/darkmoon.jpg';


const BlogPost = () => {
  return (
    <div>
      {/* first blog */}
      <div className="grid grid-cols-2">
      <div>
        <Image src={darkmoon} alt='' width={400} height={250} className="p-5" />
        </div>
        <div>
        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold mb-4 p-4'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        </h1>
        <p className='mb-4 p-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          exercitationem voluptatibus nemo esse sint debitis ut porro iste
          excepturi dolor ex, quos officiis, eveniet rem quasi molestias? Ipsam
          magni quidem molestias natus tempore obcaecati.
        </p>
      </div>
     
      </div>
      
      
      {/* author pic and name */}
      <div className='inline-flex text-center self-center p-5'>
        {' '}
        <Image
          src={darkmoon}
          alt=''
          width={80}
          height={25}
          className='rounded-full p-2'
        />
        <p className="">Joe Doe <br/>
        <span>developer</span></p>
      </div>

      {/* blog post long format */}
      <p className="mb-4 p-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugiat
        molestias et mollitia quo natus alias assumenda harum, possimus
        voluptatibus non sapiente, commodi repudiandae nobis, vitae ipsa
        excepturi quibusdam maxime hic facilis quisquam? Voluptas, consequuntur,
        velit voluptatibus illum minus a maiores consequatur facilis ea, eum
        tempore exercitationem sunt ut? Consectetur deserunt voluptates, sit a
        modi dolorum eveniet.
      </p>
      <p className="mb-8 p-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugiat
        molestias et mollitia quo natus alias assumenda harum, possimus
        voluptatibus non sapiente, commodi repudiandae nobis, vitae ipsa
        excepturi quibusdam maxime hic facilis quisquam? Voluptas, consequuntur,
        velit voluptatibus illum minus a maiores consequatur facilis ea, eum
        tempore exercitationem sunt ut? Consectetur deserunt voluptates, sit a
        modi dolorum eveniet.
      </p>
    </div>
  );
};

export default BlogPost;
