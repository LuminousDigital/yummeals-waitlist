'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#1A0C05] text-white py-8 z-50">
      <div className=" mx-auto sm:px-20 px-4">
        <div className="flex flex-col md:flex-row p-4 justify-between sm:items-end items-center gap-12 sm:gap-0">
          <div className="flex flex-col gap-4 items-center sm:items-start">
            <div className="relative  mr-3">
              <Link href="/">
                <Image 
                  src="/logo.png" 
                  alt="Yummeals logo" 
                  
                  className="object-contain"
                  width={140}
                  height={100}
                />
              </Link>
            </div>
            <p className="font-normal sm:text-[1.125rem] text-[1rem] leading-[1.75rem] tracking-normal text-center sm:text-start font-poppins text-[#EDEAE8]">Delivering Happiness, One Meal at a Time!</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://web.facebook.com/profile.php?id=61576968240974" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full   flex items-center justify-center hover:bg-opacity-20 transition-all"
            >
              <div className="relative w-4 h-4">
                <Image 
                  src="/facebook.svg" 
                  alt="Facebook" 
                  fill
                  className="object-contain"
                />
              </div>
            </a>
            <a 
              href="https://www.instagram.com/yummeals.ng" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full  flex items-center justify-center hover:bg-opacity-20 transition-all"
            >
              <div className="relative w-4 h-4">
                <Image 
                  src="/instagram.png" 
                  alt="Instagram" 
                  fill
                  className="object-contain"
                />
              </div>
            </a>
            <a 
              href="https://x.com/Yummeals_NG" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full  flex items-center justify-center hover:bg-opacity-20 transition-all"
            >
              <div className="relative w-4 h-4">
                <Image 
                  src="/x.png" 
                  alt="Twitter" 
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
