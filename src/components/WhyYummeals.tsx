'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'

const carouselItems = [
  {
    id: 1,
    title: "Homemade Goodness:",
    content: "Experience the comfort of home-cooked meals without lifting a finger. Our chefs whip up mouthwatering dishes using time-honored recipes and quality ingredients, ensuring every bite is bursting with flavor.",
    image: "/yum.png",
    alt: "Homemade meal preparation"
  },
  {
    id: 2,
    title: "Convenience at its Best:",
    content: "No more grocery shopping, meal planning, or kitchen cleanup. We deliver delicious, ready-to-eat meals right to your doorstep, saving you time and energy for what matters most.",
    image: "/yum1.png",
    subcontent: "Yummeals",
    alt: "Meal delivery service"
  },
  {
    id: 3,
    title: "Health-Conscious Options:",
    content: "We cater to various dietary preferences with nutritious meals prepared using fresh, locally-sourced ingredients. Enjoy wholesome food that nourishes your body and satisfies your taste buds.",
    image: "/yum2.png",
    subcontent: "Yummeals",
    alt: "Healthy meal options"
  }
]

const WhyYummeals = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentItem = carouselItems[currentIndex]

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return (
    <section className="" aria-labelledby="why-yummeals-heading">
      <div className="px-6 md:px-20    z-10">
        <div className="flex  justify-between">
          {/* Left content */}
          <div className="sm:mt-0 mt-12 md:mt-30 w-full md:w-[31rem]">
            <h2 id="why-yummeals-heading" className=" font-torus text-2xl md:text-[3rem] leading-[120%] tracking-[-0.02em] font-semibold relative mb-8">
              Why Yummeals?
              <div className="flex gap-2 mt-6 md:mt-10">
                {carouselItems.map((item, index) => (
                  <button 
                    key={item.id} 
                    onClick={() => goToSlide(index)}
                    className={`block w-8 md:w-25 h-1 transition-all duration-300 ${index === currentIndex ? 'bg-[#F25B0A]' : 'bg-[#EDEAE8] hover:bg-[#F25B0A]/50'}`}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={index === currentIndex ? 'true' : 'false'}
                  />
                ))}
              </div>
            </h2>
            
            <div className="font-poppins flex flex-col gap-[1.5rem]">
              <h3 className="font-bold text-xl md:text-[2rem] leading-[100%] tracking-[-0.02em]">{currentItem.title}</h3>
              <p className="font-normal text-sm sm:text-[1.5rem] sm:leading-9 leading-7 ">
                {currentItem.content}
              </p>
              
              <div className="flex items-center mt-4">
                <div className="flex space-x-2">
                  <button 
                    onClick={goToPrevious}
                    className="relative w-6 h-6 md:w-10 md:h-10 rounded-full bg-[#64961A] hover:bg-[#548314] transition-colors flex items-center justify-center"
                    aria-label="Previous slide"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button 
                    onClick={goToNext}
                    className="relative w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#64961A] hover:bg-[#548314] transition-colors flex items-center justify-center"
                    aria-label="Next slide"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right image - hidden on small and medium screens, visible on large screens and up */}
          <div className="hidden lg:block lg:relative">
            <div className="relative w-full flex justify-center items-center ">
              {(currentIndex === 1 || currentIndex === 2) && (
                <div className="absolute bottom-0 text-[#F25B0A] font-torus font-bold text-[120px] lg:text-[250px] leading-[0.8] tracking-tighter -right-10 z-10">
                  <p className='pointer-none text-transparent'>Yummeals</p>
                  <Image 
                src="/yummeals.svg"
                alt="yummeals text"
                width={2000}
                height={1000}
                priority
                className="-z-20"
              />
                </div>
              )}
              {/* {currentIndex === 2 && (
                <div className="absolute bottom-0 text-[#F25B0A] font-torus font-bold text-[120px] lg:text-[250px] leading-[0.8] tracking-tighter -right-10 z-10">
                  Yummeals
                </div>
              )} */}
              <Image 
                src={currentItem.image}
                alt={currentItem.alt}
                width={1000}
                height={1000}
                priority
                className="z-20 relative max-h-[41rem] min-h-[41rem] max-w-[45rem] min-w-[45rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyYummeals 