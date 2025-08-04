// 'use client'

// import Image from 'next/image'
// import { useState, useEffect, useCallback } from 'react'

// const carouselItems = [
//   {
//     id: 1,
//     title: "Great Food, Every Time",
//     content: "We don’t just serve meals — we serve moments of joy. Every Yummeals dish is crafted by expert chefs using quality ingredients, cooked fresh and delivered hot. From first bite to last, you get consistent flavor, freshness, and satisfaction — no compromises.",
//     image: "/woman-chef.svg",
//     alt: "Homemade meal preparation"
//   },
//   {
//     id: 2,
//     title: "Affordable for Everyone",
//     content: "Good food shouldn’t be a luxury. That’s why we’ve priced our meals to fit into real lives and real budgets. Whether you're feeding one or a family of five, Yummeals brings you generous portions, everyday deals, and unbeatable value — so you can eat well, more often.",
//     image: "/view-woman.png",
//     // subcontent: "Yummeals",
//     alt: "Meal delivery service"
//   },
//   {
//     id: 3,
//     title: "Unrivalled Convenience",
//     content: "Whether you're at home, at work, or on the move — Yummeals meets you where you are. Order effortlessly through our mobile app, website, or find us at one of our mobile food vans. With fast delivery and multiple access points, enjoying a fresh, delicious meal has never been this convenient.",
//     image: "/food.png",
//     // subcontent: "Yummeals",
//     alt: "Healthy meal options"
//   }
// ]

// const Whyyumeal = () => {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const currentItem = carouselItems[currentIndex]

//   // Auto-rotate carousel every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => 
//         prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000);
    
//     return () => clearInterval(interval);
//   }, []);

//   const goToPrevious = useCallback(() => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
//     );
//   }, []);

//   const goToNext = useCallback(() => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
//     );
//   }, []);

//   const goToSlide = useCallback((index: number) => {
//     setCurrentIndex(index);
//   }, []);

//   return (
//     <section className=" bg-[#FFEFE5] py-8 " aria-labelledby="why-yummeals-heading">
//       <div className="lg:px-20 md:px-20 flex justify-center items-center z-10 px-6">
//         <div className="flex w-full justify-between items-center">
//           {/* Left content */}
//           <div className="sm:mt-0  md:mt-5 w-full md:w-[31rem]">
//             <h2 id="why-yummeals-heading" className="font-torus font-semibold sm:text-[3rem] text-2xl leading-[100%] tracking-[-0.02em] mb-4 text-[#1A0901]">
//               Why Yummeals?
//               <div className="flex gap-2 mt-6 md:my-8">
//                 {carouselItems.map((item, index) => (
//                   <button 
//                     key={item.id} 
//                     onClick={() => goToSlide(index)}
//                     className={`block w-8 md:w-25 h-1 transition-all duration-300 ${index === currentIndex ? 'bg-[#F25B0A]' : 'bg-[#EDEAE8] hover:bg-[#F25B0A]/50'}`}
//                     aria-label={`Go to slide ${index + 1}`}
//                     aria-current={index === currentIndex ? 'true' : 'false'}
//                   />
//                 ))}
//               </div>
//             </h2>
            
//             <div className="font-poppins  flex flex-col gap-[1rem]">
//               <h3 className="font-bold md:text-xl md:text-[2rem] leading-[100%] tracking-[-0.02em]">{currentItem.title}</h3>
//               <p className="font-normal  md:text-2xl sm:text-[1.5rem] sm:leading-9 lg:leading-[2.5rem] leading-[1.7rem] tracking-[-0.02rem]  ">
//                 {currentItem.content}
//               </p>
              
//               <div className="flex items-center mt-4">
//                 <div className="flex space-x-2">
//                   <button 
//                     onClick={goToPrevious}
//                     className="relative w-6 h-6 md:w-10 md:h-10 rounded-full bg-[#64961A] hover:bg-[#548314] transition-colors flex items-center justify-center"
//                     aria-label="Previous slide"
//                   >
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                   </button>
//                   <button 
//                     onClick={goToNext}
//                     className="relative w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#64961A] hover:bg-[#548314] transition-colors flex items-center justify-center"
//                     aria-label="Next slide"
//                   >
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Right image - hidden on small and medium screens, visible on large screens and up */}
//           <div className="hidden lg:block lg:relative py-20  ">
//             <div className="relative w-full flex justify-center items-center min-h-[37.5rem] max-h-[37.5rem] ">
              
//                 <div className="absolute top-30  text-[#F25B0A] font-torus font-bold text-[120px]  lg:text-[250px] leading-[0.8] tracking-tighter -right-12 z-50">
                  
//                   <Image 
//                 src="/onions.png"
//                 alt="yummeals text"
//                 width={2500}
//                 height={1000}
//                 priority
//                 className="z-50 w-full "
//               />
//                 </div>
            
//               {/* {currentIndex === 2 && (
//                 <div className="absolute bottom-0 text-[#F25B0A] font-torus font-bold text-[120px] lg:text-[250px] leading-[0.8] tracking-tighter -right-10 z-10">
//                   Yummeals
//                 </div>
//               )} */}
//               <Image 
//                 src={currentItem.image}
//                 alt={currentItem.alt}
//                 width={1000}
//                 height={1000}
//                 priority
//                 className="z-20 relative max-h-[41rem] min-h-[41rem] max-w-[35rem] min-w-[35rem]"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Whyyumeal


'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const carouselItems = [
  {
    id: 1,
    title: "Great Food, Every Time",
    content: "We don't just serve meals — we serve moments of joy. Every Yummeals dish is crafted by expert chefs using quality ingredients, cooked fresh and delivered hot. From first bite to last, you get consistent flavor, freshness, and satisfaction — no compromises.",
    image: "/woman-chef.svg",
    alt: "Homemade meal preparation"
  },
  {
    id: 2,
    title: "Affordable for Everyone",
    content: "Good food shouldn't be a luxury. That's why we've priced our meals to fit into real lives and real budgets. Whether you're feeding one or a family of five, Yummeals brings you generous portions, everyday deals, and unbeatable value — so you can eat well, more often.",
    image: "/view-woman.png",
    alt: "Meal delivery service"
  },
  {
    id: 3,
    title: "Unrivalled Convenience",
    content: "Whether you're at home, at work, or on the move — Yummeals meets you where you are. Order effortlessly through our mobile app, website, or find us at one of our mobile food vans. With fast delivery and multiple access points, enjoying a fresh, delicious meal has never been this convenient.",
    image: "/food.png",
    alt: "Healthy meal options"
  }
]

const Whyyumeal = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const currentItem = carouselItems[currentIndex]

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('right')
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = useCallback(() => {
    if (currentIndex === 0) return;
    setDirection('left')
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  }, [currentIndex]);

  const goToNext = useCallback(() => {
    if (currentIndex === carouselItems.length - 1) return;
    setDirection('right')
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  }, [currentIndex]);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left')
    setCurrentIndex(index);
  }, [currentIndex]);

  // Animation variants
  const variants = {
    enter: (direction: 'left' | 'right') => {
      return {
        x: direction === 'right' ? 100 : -100,
        opacity: 0
      };
    },
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    exit: (direction: 'left' | 'right') => {
      return {
        x: direction === 'right' ? -100 : 100,
        opacity: 0,
        transition: {
          duration: 0.5,
          ease: "easeInOut"
        }
      };
    }
  };

  return (
    <section className="bg-[#FFEFE5] py-8" aria-labelledby="why-yummeals-heading">
      <div className="lg:px-20 md:px-20 lg:mt-60 mt-10 md:mt-20 flex justify-center items-center z-10 px-6">
        <div className="flex w-full justify-between items-center">
          {/* Left content */}
          <div className="sm:mt-0 md:mt-5 w-full md:w-[31rem]">
            <h2 id="why-yummeals-heading" className="font-torus font-semibold sm:text-[3rem] text-2xl leading-[100%] tracking-[-0.02em] mb-4 text-[#1A0901]">
              Why Yummeals?
              <div className="flex gap-2 sm:gap-4 my-6 sm:my-8">
                {carouselItems.map((item, index) => (
                  <button 
                    key={item.id} 
                    onClick={() => goToSlide(index)}
                    className={`block w-8  sm:w-25 h-1 transition-all duration-300 ${index === currentIndex ? 'bg-[#F25B0A]' : 'bg-[#EDEAE8] hover:bg-[#F25B0A]/50'}`}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={index === currentIndex ? 'true' : 'false'}
                  />
                ))}
              </div>
            </h2>
            
            <div className="font-poppins flex flex-col gap-[1rem]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentItem.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <h3 className="font-bold md:text-xl md:text-[2rem] leading-[100%] tracking-[-0.02em] mb-4">
                    {currentItem.title}
                  </h3>
                  <p className="font-normal md:text-2xl sm:text-[1.5rem] sm:leading-9 lg:leading-[2.5rem] leading-[1.7rem] tracking-[-0.02rem]">
                    {currentItem.content}
                  </p>
                </motion.div>
              </AnimatePresence>
              
              <div className="flex items-center mt-4">
                <div className="flex space-x-2 sm:space-x-4">
                  <button 
                    onClick={goToPrevious}
                    disabled={currentIndex === 0}
                    className={`relative w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors ${currentIndex === 0 ? 'bg-[#F7F4F2] cursor-not-allowed' : 'bg-[#64961A] hover:bg-[#548314]'}`}
                    aria-label="Previous slide"
                    aria-disabled={currentIndex === 0}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 18L9 12L15 6" stroke={currentIndex === 0 ? "#D1CBC9" : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button 
                    onClick={goToNext}
                    disabled={currentIndex === carouselItems.length - 1}
                    className={`relative w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors ${currentIndex === carouselItems.length - 1 ? 'bg-[#F7F4F2] cursor-not-allowed' : 'bg-[#64961A] hover:bg-[#548314]'}`}
                    aria-label="Next slide"
                    aria-disabled={currentIndex === carouselItems.length - 1}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke={currentIndex === carouselItems.length - 1 ? "#D1CBC9" : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right image - hidden on small and medium screens, visible on large screens and up */}
          <div className="hidden lg:block lg:relative py-20">
            <div className="relative w-full flex justify-center items-center min-h-[37rem] max-h-[37rem]">
              <div className="absolute top-30 text-[#F25B0A] font-torus font-bold text-[120px] lg:text-[250px] leading-[0.8] tracking-tighter -right-12 z-50">
                <Image 
                  src="/onions.png"
                  alt="yummeals text"
                  width={2500}
                  height={8000}
                  priority
                  className="z-50 w-full"
                />
              </div>
              
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentItem.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="z-20 relative max-h-[41rem] min-h-[41rem] max-w-[35rem] min-w-[35rem]"
                >
                  <Image 
                    src={currentItem.image}
                    alt={currentItem.alt}
                    width={1000}
                    height={1000}
                    priority
                    className="max-h-[41rem] min-h-[41rem] max-w-[35rem] min-w-[35rem]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Whyyumeal