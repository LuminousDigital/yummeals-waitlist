'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Delivery: React.FC = () => {
  return (
    <div className="relative py-10  px-4 sm:px-6 md:px-8  bg-white text-center">
      {/* Food images positioned absolutely - responsive sizes */}
      <div className="absolute top-[5%] -left-[2.1%] rounded-full z-10 hidden sm:block" 
           style={{ width: 'clamp(80px, 10vw, 160px)', height: 'clamp(80px, 10vw, 160px)' }}>
        <Image
          src="/rice.svg"
          alt="Food image"
          width={160}
          height={160}
          className="object-cover"
        />
      </div>
      
      <div className="absolute bottom-[50%] right-[0%] rounded-full z-10 hidden sm:block" 
           style={{ width: 'clamp(70px, 8vw, 140px)', height: 'clamp(70px, 8vw, 140px)' }}>
        <Image
          src="/egusright.svg"
          alt="Food image"
          width={140}
          height={140}
          className="object-cover w-full"
        />
      </div>
      
      {/* Content */}
      <div className=" sm:mt-6 md:mt-8  max-w-6xl mx-auto md:mb-10 lg:mb-80 xl:mb-40 relative z-20">
        <h1 className="sm:font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[4.0625rem] leading-tight sm:leading-tight md:leading-tight lg:leading-[4.375rem] tracking-[-0.08125rem] text-center font-semibold">
          Delivering Happiness, <br />One Meal at a time
        </h1>
        <div className='max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-10'>
          <p className="font-normal text-base sm:text-lg md:text-xl lg:text-2xl mt-4 sm:mt-6 md:mt-8 lg:mt-10 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-[2.3rem] text-center">
            We&apos;re giving away over ₦10 MILLION in food vouchers and other goodies, 
            from August 1st - 31st, and you could be one of the lucky winners! Don&apos;t miss 
            out — join our waitlist now to participate.
          </p>
        </div>
        <Link href="/#waitlist-form">
        <button className="bg-[#64961A] text-white rounded px-6 sm:px-10 lg:pl-[40px] lg:pr-[40px] py-3 sm:py-4 font-semibold text-sm sm:text-base leading-[1rem] text-center align-middle capitalize sm:mb-30 mb-20 cursor-pointer">
          Join Waitlist
        </button>
        </Link>
      </div>
      
      {/* Full width image at the bottom - responsive */}
      <div className="absolute bottom-0 left-0 right-0 w-full  z-50 translate-y-1/2">
        <Image
          src="/mult.svg"
          alt="Food collage"
          width={450}
          height={450}
          sizes="100vw"
          className="w-full  object-cover  object-center "
          priority
        />
      </div>
    </div>
  );
};

export default Delivery;
