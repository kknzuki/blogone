import React from 'react';
import Image from "next/image";
import clipartmessage from "/public/clipartmessage.jpg"

const Contact = () => {
  return (
    <div className='grid grid-cols-2 justify-between gap-2 p-5'>
      <section>
        <Image src={clipartmessage} alt='' width={400} height={400}  className="animate-pulse duration-100 ease-in-out"/>
      </section>
      <section className='p-5'>
        <form className='text-black grid' action=''>
          <input
            className='shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 mb-8'
            type='text'
            placeholder='Name'
            label='Name'
          />
          <input
            type='email'
            placeholder='email'
            label='email'
            className='shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 mb-8'
          />
          <textarea
            name=''
            id=''
            cols='30'
            rows='10'
            label='here'
            placeholder='Text'
            className='shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 mb-8'
          ></textarea>
          <button className='rounded bg-green-600 p-5 text-center'>Send</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
