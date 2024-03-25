const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/example', icon: 'fab fa-twitter' },
    { name: 'Facebook', url: 'https://facebook.com/example', icon: 'fab fa-facebook' },
    { name: 'Instagram', url: 'https://instagram.com/example', icon: 'fab fa-instagram' },
    // Add more social links as needed
];


// components/SideNavbar.js
import React from 'react';

const SideNavbar = () => {
    return (
        <>

<nav className="fixed top-0 right-10 bottom-0 flex items-center justify-center z-50">
  <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-md shadow-lg rounded-2xl border p-4 text-white flex flex-col items-center">
    {socialLinks.map((link, index) => (
      <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-xl mb-4">
        <i className={`${link.icon} mr-2`}></i> {link.name}
      </a>
    ))}
  </div>
</nav>


        </>
    );
};

export default SideNavbar;
