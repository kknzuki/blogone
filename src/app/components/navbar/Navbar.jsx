import React from 'react';
import Link from 'next/link';
import DarkModeToggle from "../darkmodeToggle/DarkModeToggle";

const links = [

  {
    id: 1,
    url: '/',
    name: 'Home',
  },
 
  {
    id: 2,
    url: '/dashboard',
    name: 'Dashboard',
  },
  {
    id: 3,
    url: '/portfolio',
    name: 'Portfolio',
  },
  {
    id: 4,
    url: '/contact',
    name: 'Contact',
  },
  {
    id: 5,
    url: '/about',
    name: 'About',
  },
  {
    id: 6,
    url: '/blog',
    name: 'Blog',
  },
];

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5 border border-b-gray-400">
    
      <Link className="text-xl font-bold md:text-3xl uppercase text-green-600 p-5" href='/'>Kenki blog</Link>
      <div className="text-green-600 flex flex-row justify-between gap-2">
      <DarkModeToggle/>
      {links.map((link) => (
          <Link key={link.id} href={link.url} className=''>
            {link.name}
          </Link>
      ))}
        {/* <button onClick={handleLogout}>Logout</button> */}
      </div>
    </div>
  );
};

export default Navbar;
