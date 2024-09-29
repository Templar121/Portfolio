import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1d1836] text-white py-6 px-12 flex justify-between items-center w-full">
      
      <div className="w-full sm:w-1/3 text-left sm:text-left">
        <center className="text-sm">Copyright @ 2024</center>
      </div>
      
      
      <div className="w-1/3 flex justify-end space-x-4">
       
        <a href="https://www.linkedin.com/in/subhayan-mukherjee-0906b0274/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaLinkedin size={24} />
        </a>
        
     
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <FaInstagram size={24} />
        </a>
        
       
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
          <FaFacebook size={24} />
        </a>
        
      
        <a href="https://github.com/Templar121" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
          <FaGithub size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
