import Link from 'next/link';
import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className='flex justify-between p-5 bg-black text-white'>
      <Link href='/'>kenki blog</Link>
      <section className="flex justify-evenly place-items-center gap-2">
        <p>Facebook
          <span >
            <BsFacebook className="bg-blue-600" size={20}/>
          </span>
        </p>
        <p>Twitter
          <span>
            <BsTwitter className="bg-blue-600" size={20} />
          </span>
        </p>
        <p>Instagram
          <span>
            <BsInstagram className="bg-pink-600" size={20}/>
          </span>
        </p>
        <p>LinkedIn
          <span>
            <BsLinkedin size={20}/>
          </span>
        </p>
      </section>

      <p>&copy; All rights reserved {year}</p>
    </div>
  );
};

export default Footer;
