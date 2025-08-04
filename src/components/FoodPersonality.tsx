// 'use client'

// import React, { useState } from 'react'
// import Image from 'next/image'

// // Define personality types
// const personalityTypes = [
//   {
//     id: 'fitness-buff',
//     icon: '/buff.png',
//     title: 'Fitness Buffs',
//     description: 'Protein-packed meals that fuel workouts and wellness. You are dedicated to maintaining a healthy nutritional balance while staying energized for a fitness challenge!'
//   },
//   {
//     id: 'foodies',
//     icon: '/foodie.png',
//     title: 'Foodies',
//     description: 'You appreciate the artistry of a well-made food. You love exploring new cuisines, diving into complex flavors, and discovering specialized high-quality ingredients. Essential for those who genuinely treasure food.'
//   },
//   {
//     id: 'home-cooks',
//     icon: '/cooks.png',
//     title: 'Home Cooks',
//     description: 'You enjoy the process of making food, but sometimes lack the time or inspiration for cooking full meals. Yummeals helps you learn new techniques while saving time in the kitchen.'
//   },
//   {
//     id: 'party-lovers',
//     icon: '/party.png',
//     title: 'Party Lovers',
//     description: 'Shareable dishes that consistently amaze guests. Perfect for hosting parties, enjoying movie nights, game days, or special celebrations.'
//   },
//   {
//     id: 'healthy-eaters',
//     icon: '/healthy.png',
//     title: 'Healthy Eaters',
//     description: 'Healthy options provide nutrition and balance with fresh, whole foods. Our chefs create dishes where vegetables, legumes, pulses, or gluten-free for health-conscious meals.'
//   },
//   {
//     id: 'early-risers',
//     icon: '/early.png',
//     title: 'Early Risers',
//     description: 'Morning meals that energize and wake up early to get a head start on the day. Perfect for those who value a nutritious breakfast to fuel the day.'
//   },
//   {
//     id: 'healthy-eaters',
//     icon: '/healthy.png',
//     title: 'Healthy Eaters',
//     description: 'Healthy options provide nutrition and balance with fresh, whole foods. Our chefs create dishes where vegetables, legumes, pulses, or gluten-free for health-conscious meals.'
//   },
//   {
//     id: 'early-risers',
//     icon: '/early.png',
//     title: 'Early Risers',
//     description: 'Morning meals that energize and wake up early to get a head start on the day. Perfect for those who value a nutritious breakfast to fuel the day.'
//   },
//   {
//     id: 'foodies',
//     icon: '/foodie.png',
//     title: 'Foodies',
//     description: 'You appreciate the artistry of a well-made food. You love exploring new cuisines, diving into complex flavors, and discovering specialized high-quality ingredients. Essential for those who genuinely treasure food.'
//   },
//   {
//     id: 'home-cooks',
//     icon: '/cooks.png',
//     title: 'Home Cooks',
//     description: 'You enjoy the process of making food, but sometimes lack the time or inspiration for cooking full meals. Yummeals helps you learn new techniques while saving time in the kitchen.'
//   },
//   {
//     id: 'party-lovers',
//     icon: '/party.png',
//     title: 'Party Lovers',
//     description: 'Shareable dishes that consistently amaze guests. Perfect for hosting parties, enjoying movie nights, game days, or special celebrations.'
//   },
// ]

// const CARD_WIDTH = 340; // px

// const FoodPersonality = () => {
//   return (
//     <section className="py-16 px-4">
//       <div className="mx-auto">
//         <div className="mb-12  lg:px-20">
//           <h2 className="font-torus-pro font-semibold text-[2.5rem] leading-[100%] tracking-[-0.02em] mb-4">
//             Your food personality
//           </h2>
//           <p className="text-[#948D8A] text-lg">
//             What personality best describes the relationship with you and food?
//           </p>
//         </div>
//         <div
//           className="overflow-x-auto"
//           style={{
//             WebkitOverflowScrolling: 'touch',
//             paddingBottom: '1rem',
//           }}
//         >
//           <div
//             className="grid gap-8"
//             style={{
//               gridAutoFlow: 'column',
//               gridTemplateRows: 'repeat(2, min-content)',
//               width: `max-content`,
//               alignItems: 'start',
//             }}
//           >
//             {personalityTypes.map((type, idx) => (
//               <div
//                 key={type.id + '-' + idx}
//                 style={{
//                   width: CARD_WIDTH,
//                   background: 'white',
//                   borderRadius: '1rem',
//                   padding: '2rem',
//                   boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
//                   display: 'flex',
//                   flexDirection: 'column',
//                 }}
//               >
//                 <div className="flex items-start gap-4 mb-4">
//                   <div className="relative w-14 h-14 flex-shrink-0">
//                     <Image
//                       src={type.icon}
//                       alt={`${type.title} icon`}
//                       fill
//                       className="object-contain"
//                     />
//                   </div>
//                   <h3 className="text-[1.5rem] font-semibold leading-tight">{type.title}</h3>
//                 </div>
//                 <p className="font-poppins font-normal text-[1.25rem] leading-[130%] tracking-[-0.02em] text-gray-700 break-words">
//                   {type.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FoodPersonality;

// 'use client'

// import React, { useState, useEffect, useRef } from 'react'
// import Image from 'next/image'

// // Define personality types
// const personalityTypes = [
//   {
//     id: 'fitness-buff',
//     icon: '/buff.png',
//     title: 'Fitness Buffs',
//     description: 'Protein-packed meals that fuel workouts and wellness. You are dedicated to maintaining a healthy nutritional balance while staying energized for a fitness challenge!'
//   },
//   {
//     id: 'foodies',
//     icon: '/foodie.png',
//     title: 'Foodies',
//     description: 'You appreciate the artistry of a well-made food. You love exploring new cuisines, diving into complex flavors, and discovering specialized high-quality ingredients. Essential for those who genuinely treasure food.'
//   },
//   {
//     id: 'home-cooks',
//     icon: '/cooks.png',
//     title: 'Home Cooks',
//     description: 'You enjoy the process of making food, but sometimes lack the time or inspiration for cooking full meals. Yummeals helps you learn new techniques while saving time in the kitchen.'
//   },
//   {
//     id: 'party-lovers',
//     icon: '/party.png',
//     title: 'Party Lovers',
//     description: 'Shareable dishes that consistently amaze guests. Perfect for hosting parties, enjoying movie nights, game days, or special celebrations.'
//   },
//   {
//     id: 'healthy-eaters',
//     icon: '/healthy.png',
//     title: 'Healthy Eaters',
//     description: 'Healthy options provide nutrition and balance with fresh, whole foods. Our chefs create dishes where vegetables, legumes, pulses, or gluten-free for health-conscious meals.'
//   },
//   {
//     id: 'early-risers',
//     icon: '/early.png',
//     title: 'Early Risers',
//     description: 'Morning meals that energize and wake up early to get a head start on the day. Perfect for those who value a nutritious breakfast to fuel the day.'
//   },
//   {
//     id: 'healthy-eaters',
//     icon: '/healthy.png',
//     title: 'Healthy Eaters',
//     description: 'Healthy options provide nutrition and balance with fresh, whole foods. Our chefs create dishes where vegetables, legumes, pulses, or gluten-free for health-conscious meals.'
//   },
//   {
//     id: 'early-risers',
//     icon: '/early.png',
//     title: 'Early Risers',
//     description: 'Morning meals that energize and wake up early to get a head start on the day. Perfect for those who value a nutritious breakfast to fuel the day.'
//   },
//   {
//     id: 'foodies',
//     icon: '/foodie.png',
//     title: 'Foodies',
//     description: 'You appreciate the artistry of a well-made food. You love exploring new cuisines, diving into complex flavors, and discovering specialized high-quality ingredients. Essential for those who genuinely treasure food.'
//   },
//   {
//     id: 'home-cooks',
//     icon: '/cooks.png',
//     title: 'Home Cooks',
//     description: 'You enjoy the process of making food, but sometimes lack the time or inspiration for cooking full meals. Yummeals helps you learn new techniques while saving time in the kitchen.'
//   },
//   {
//     id: 'party-lovers',
//     icon: '/party.png',
//     title: 'Party Lovers',
//     description: 'Shareable dishes that consistently amaze guests. Perfect for hosting parties, enjoying movie nights, game days, or special celebrations.'
//   },
// ]

// const CARD_WIDTH = 340; // px

// const FoodPersonality = () => {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const [displayedCards, setDisplayedCards] = useState([...personalityTypes]);

//   useEffect(() => {
//     const scrollContainer = scrollContainerRef.current;
//     if (!scrollContainer) return;

//     // Duplicate the cards to create seamless infinite scroll
//     setDisplayedCards([...personalityTypes, ...personalityTypes]);

//     let animationFrameId: number;
//     let scrollSpeed = 1; // pixels per frame

//     const scroll = () => {
//       if (scrollContainer) {
//         // Reset scroll position when reaching the end of the duplicated content
//         if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth / 2)) {
//           scrollContainer.scrollLeft -= (scrollContainer.scrollWidth / 2);
//         } else {
//           scrollContainer.scrollLeft += scrollSpeed;
//         }
//       }
//       animationFrameId = requestAnimationFrame(scroll);
//     };

//     animationFrameId = requestAnimationFrame(scroll);

//     // Pause on hover
//     const handleMouseEnter = () => {
//       cancelAnimationFrame(animationFrameId);
//     };

//     const handleMouseLeave = () => {
//       animationFrameId = requestAnimationFrame(scroll);
//     };

//     scrollContainer.addEventListener('mouseenter', handleMouseEnter);
//     scrollContainer.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
//       scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, []);

//   return (
//     <section className="py-16 px-16">
//       <div className="mx-auto">
//         <div className="mb-12">
//           <h2 className="font-torus-pro font-semibold text-[2.5rem] leading-[100%] tracking-[-0.02em] mb-4">
//             Your food personality
//           </h2>
//           <p className="text-[#948D8A] text-lg">
//             What personality best describes the relationship with you and food?
//           </p>
//         </div>
//         <div
//           ref={scrollContainerRef}
//           className="overflow-x-auto"
//           style={{
//             WebkitOverflowScrolling: 'touch',
//             paddingBottom: '1rem',
//           }}
//         >
//           <div
//             className="grid gap-8"
//             style={{
//               gridAutoFlow: 'column',
//               gridTemplateRows: 'repeat(2, min-content)',
//               width: `max-content`,
//               alignItems: 'start',
//             }}
//           >
//             {displayedCards.map((type, idx) => (
//               <div
//                 key={type.id + '-' + idx}
//                 style={{
//                   width: CARD_WIDTH,
//                   background: 'white',
//                   borderRadius: '1rem',
//                   padding: '2rem',
//                   boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
//                   display: 'flex',
//                   flexDirection: 'column',
//                 }}
//               >
//                 <div className="flex items-start gap-4 mb-4">
//                   <div className="relative w-14 h-14 flex-shrink-0">
//                     <Image
//                       src={type.icon}
//                       alt={`${type.title} icon`}
//                       fill
//                       className="object-contain"
//                     />
//                   </div>
//                   <h3 className="text-[1.5rem] font-semibold leading-tight">{type.title}</h3>
//                 </div>
//                 <p className="font-poppins font-normal text-[1.25rem] leading-[130%] tracking-[-0.02em] text-gray-700 break-words">
//                   {type.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FoodPersonality;

// 'use client'

// import React, { useState, useEffect, useRef } from 'react'
// import Image from 'next/image'

// // Define personality types
// const personalityTypes = [
//   {
//     id: 'fitness-buff',
//     icon: '/buff.png',
//     title: 'Fitness Buffs',
//     description: 'Protein-packed meals that fuel workouts and wellness. You are dedicated to maintaining a healthy nutritional balance while staying energized for a fitness challenge!'
//   },
//   {
//     id: 'foodies',
//     icon: '/foodie.png',
//     title: 'Foodies',
//     description: 'You appreciate the artistry of a well-made food. You love exploring new cuisines, diving into complex flavors, and discovering specialized high-quality ingredients. Essential for those who genuinely treasure food.'
//   },
//   {
//     id: 'home-cooks',
//     icon: '/cooks.png',
//     title: 'Home Cooks',
//     description: 'You enjoy the process of making food, but sometimes lack the time or inspiration for cooking full meals. Yummeals helps you learn new techniques while saving time in the kitchen.'
//   },
//   {
//     id: 'party-lovers',
//     icon: '/party.png',
//     title: 'Party Lovers',
//     description: 'Shareable dishes that consistently amaze guests. Perfect for hosting parties, enjoying movie nights, game days, or special celebrations.'
//   },
//   {
//     id: 'healthy-eaters',
//     icon: '/healthy.png',
//     title: 'Healthy Eaters',
//     description: 'Healthy options provide nutrition and balance with fresh, whole foods. Our chefs create dishes where vegetables, legumes, pulses, or gluten-free for health-conscious meals.'
//   },
//   {
//     id: 'early-risers',
//     icon: '/early.png',
//     title: 'Early Risers',
//     description: 'Morning meals that energize and wake up early to get a head start on the day. Perfect for those who value a nutritious breakfast to fuel the day.'
//   },
//   {
//     id: 'healthy-eaters',
//     icon: '/healthy.png',
//     title: 'Healthy Eaters',
//     description: 'Healthy options provide nutrition and balance with fresh, whole foods. Our chefs create dishes where vegetables, legumes, pulses, or gluten-free for health-conscious meals.'
//   },
//   {
//     id: 'early-risers',
//     icon: '/early.png',
//     title: 'Early Risers',
//     description: 'Morning meals that energize and wake up early to get a head start on the day. Perfect for those who value a nutritious breakfast to fuel the day.'
//   },
//   {
//     id: 'foodies',
//     icon: '/foodie.png',
//     title: 'Foodies',
//     description: 'You appreciate the artistry of a well-made food. You love exploring new cuisines, diving into complex flavors, and discovering specialized high-quality ingredients. Essential for those who genuinely treasure food.'
//   },
//   {
//     id: 'home-cooks',
//     icon: '/cooks.png',
//     title: 'Home Cooks',
//     description: 'You enjoy the process of making food, but sometimes lack the time or inspiration for cooking full meals. Yummeals helps you learn new techniques while saving time in the kitchen.'
//   },
//   {
//     id: 'party-lovers',
//     icon: '/party.png',
//     title: 'Party Lovers',
//     description: 'Shareable dishes that consistently amaze guests. Perfect for hosting parties, enjoying movie nights, game days, or special celebrations.'
//   },
// ]

// const FoodPersonality = () => {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const [displayedCards, setDisplayedCards] = useState([...personalityTypes]);

//   useEffect(() => {
//     const scrollContainer = scrollContainerRef.current;
//     if (!scrollContainer) return;

//     // Duplicate the cards to create seamless infinite scroll
//     setDisplayedCards([...personalityTypes, ...personalityTypes]);

//     let animationFrameId: number;
//     let scrollSpeed = 1; // pixels per frame

//     const scroll = () => {
//       if (scrollContainer) {
//         // Reset scroll position when reaching the end of the duplicated content
//         if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth / 2)) {
//           scrollContainer.scrollLeft -= (scrollContainer.scrollWidth / 2);
//         } else {
//           scrollContainer.scrollLeft += scrollSpeed;
//         }
//       }
//       animationFrameId = requestAnimationFrame(scroll);
//     };

//     animationFrameId = requestAnimationFrame(scroll);

//     // Pause on hover
//     const handleMouseEnter = () => {
//       cancelAnimationFrame(animationFrameId);
//     };

//     const handleMouseLeave = () => {
//       animationFrameId = requestAnimationFrame(scroll);
//     };

//     scrollContainer.addEventListener('mouseenter', handleMouseEnter);
//     scrollContainer.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
//       scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, []);

//   return (
//     <section className="py-16 px-16">
//       <div className="mx-auto">
//         <div className="mb-12">
//           <h2 className="font-torus-pro font-semibold text-[2.5rem] leading-[100%] tracking-[-0.02em] mb-4">
//             Your food personality
//           </h2>
//           <p className="text-[#948D8A] text-lg">
//             What personality best describes the relationship with you and food?
//           </p>
//         </div>
//         <div
//           ref={scrollContainerRef}
//           className="overflow-x-hidden" // Changed from overflow-x-auto to hide scrollbar
//           style={{
//             WebkitOverflowScrolling: 'touch',
//             paddingBottom: '1rem',
//           }}
//         >
//           <div
//             className="grid gap-8"
//             style={{
//               display: 'grid',
//               gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
//               gridAutoFlow: 'column',
//               gridTemplateRows: 'auto auto', // Explicitly set to 2 rows
//               gridAutoColumns: 'minmax(340px, 1fr)',
//               width: 'max-content',
//               height: 'auto',
//             }}
//           >
//             {displayedCards.map((type, idx) => (
//               <div
//                 key={type.id + '-' + idx}
//                 style={{
//                   width: '340px',
//                   minWidth: '340px',
//                   background: 'white',
//                   borderRadius: '1rem',
//                   padding: '2rem',
//                   boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
//                   display: 'flex',
//                   flexDirection: 'column',
//                 }}
//               >
//                 <div className="flex items-start gap-4 mb-4">
//                   <div className="relative w-14 h-14 flex-shrink-0">
//                     <Image
//                       src={type.icon}
//                       alt={`${type.title} icon`}
//                       fill
//                       className="object-contain"
//                     />
//                   </div>
//                   <h3 className="text-[1.5rem] font-semibold leading-tight">{type.title}</h3>
//                 </div>
//                 <p className="font-poppins font-normal text-[1.25rem] leading-[130%] tracking-[-0.02em] text-gray-700 break-words">
//                   {type.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FoodPersonality;

// 'use client'

// import React, { useRef, useEffect } from 'react'
// import Image from 'next/image'
// import Masonry from 'masonry-layout';
// import imagesLoaded from 'imagesloaded'

// // Your original array content exactly as provided
// const personalityTypes = [
//   {
//     id: 'fitness-buff',
//     icon: '/buff.png',
//     title: 'Fitness Buffs',
//     description: 'Protein-packed meals that fuel workouts and wellness. You are dedicated to maintaining a healthy nutritional balance while staying energized for a fitness challenge!'
//   },
//   {
//     id: 'foodies',
//     icon: '/foodie.png',
//     title: 'Foodies',
//     description: 'You appreciate the artistry of a well-made food. You love exploring new cuisines, diving into complex flavors, and discovering specialized high-quality ingredients. Essential for those who genuinely treasure food.'
//   },
//   {
//     id: 'home-cooks',
//     icon: '/cooks.png',
//     title: 'Home Cooks',
//     description: 'You enjoy the process of making food, but sometimes lack the time or inspiration for cooking full meals. Yummeals helps you learn new techniques while saving time in the kitchen.'
//   },
//   {
//     id: 'party-lovers',
//     icon: '/party.png',
//     title: 'Party Lovers',
//     description: 'Shareable dishes that consistently amaze guests. Perfect for hosting parties, enjoying movie nights, game days, or special celebrations.'
//   },
//   {
//     id: 'healthy-eaters',
//     icon: '/healthy.png',
//     title: 'Healthy Eaters',
//     description: 'Healthy options provide nutrition and balance with fresh, whole foods. Our chefs create dishes where vegetables, legumes, pulses, or gluten-free for health-conscious meals.'
//   },
//   {
//     id: 'early-risers',
//     icon: '/early.png',
//     title: 'Early Risers',
//     description: 'Morning meals that energize and wake up early to get a head start on the day. Perfect for those who value a nutritious breakfast to fuel the day.'
//   },
//   {
//     id: 'healthy-eaters',
//     icon: '/healthy.png',
//     title: 'Healthy Eaters',
//     description: 'Healthy options provide nutrition and balance with fresh, whole foods. Our chefs create dishes where vegetables, legumes, pulses, or gluten-free for health-conscious meals.'
//   },
//   {
//     id: 'early-risers',
//     icon: '/early.png',
//     title: 'Early Risers',
//     description: 'Morning meals that energize and wake up early to get a head start on the day. Perfect for those who value a nutritious breakfast to fuel the day.'
//   },
//   {
//     id: 'foodies',
//     icon: '/foodie.png',
//     title: 'Foodies',
//     description: 'You appreciate the artistry of a well-made food. You love exploring new cuisines, diving into complex flavors, and discovering specialized high-quality ingredients. Essential for those who genuinely treasure food.'
//   },
//   {
//     id: 'home-cooks',
//     icon: '/cooks.png',
//     title: 'Home Cooks',
//     description: 'You enjoy the process of making food, but sometimes lack the time or inspiration for cooking full meals. Yummeals helps you learn new techniques while saving time in the kitchen.'
//   },
//   {
//     id: 'party-lovers',
//     icon: '/party.png',
//     title: 'Party Lovers',
//     description: 'Shareable dishes that consistently amaze guests. Perfect for hosting parties, enjoying movie nights, game days, or special celebrations.'
//   }
// ];

// const FoodPersonality = () => {
//   const gridRef = useRef<HTMLDivElement>(null);
//   const masonryRef = useRef<Masonry | null>(null);
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const duplicatedCards = [...personalityTypes, ...personalityTypes];

//   // Initialize Masonry
//   useEffect(() => {
//     if (!gridRef.current) return;

//     // Wait for images to load
//     imagesLoaded(gridRef.current, () => {
//       masonryRef.current = new Masonry(gridRef.current!, {
//         itemSelector: '.grid-item',
//         columnWidth: 340,
//         gutter: 24,
//         horizontalOrder: true,
//         fitWidth: true,
//         stagger: 30
//       });
//     });

//     return () => {
//       masonryRef.current?.destroy?.();
//     };
//   }, []);

//   // Infinite scroll effect
//   useEffect(() => {
//     const scrollContainer = scrollContainerRef.current;
//     if (!scrollContainer) return;

//     let animationFrameId: number;
//     let scrollSpeed = 1;
//     let isPaused = false;

//     const scroll = () => {
//       if (!isPaused && scrollContainer) {
//         if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth / 2)) {
//           scrollContainer.scrollLeft -= (scrollContainer.scrollWidth / 2);
//         } else {
//           scrollContainer.scrollLeft += scrollSpeed;
//         }
//         masonryRef.current?.layout?.();
//       }
//       animationFrameId = requestAnimationFrame(scroll);
//     };

//     animationFrameId = requestAnimationFrame(scroll);

//     const handleMouseEnter = () => {
//       isPaused = true;
//       scrollContainer.style.scrollBehavior = 'smooth';
//     };

//     const handleMouseLeave = () => {
//       isPaused = false;
//       scrollContainer.style.scrollBehavior = 'auto';
//     };

//     scrollContainer.addEventListener('mouseenter', handleMouseEnter);
//     scrollContainer.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
//       scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, []);

//   return (
//     <section className="py-16 px-4 sm:px-8 lg:px-16">
//       <div className="mx-auto max-w-7xl">
//         <div className="mb-12 text-center lg:text-left">
//           <h2 className="font-torus-pro font-semibold text-3xl md:text-4xl lg:text-[2.5rem] leading-[100%] tracking-[-0.02em] mb-4">
//             Your food personality
//           </h2>
//           <p className="text-[#948D8A] text-lg">
//             What personality best describes the relationship with you and food?
//           </p>
//         </div>

//         <div
//           ref={scrollContainerRef}
//           className="overflow-x-hidden py-4"
//           style={{
//             maskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
//             WebkitMaskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)'
//           }}
//         >
//           <div ref={gridRef} className="masonry-grid w-max">
//             {duplicatedCards.map((type, idx) => (
//               <div
//                 key={`${type.id}-${idx}`}
//                 className="grid-item bg-white rounded-xl p-6 shadow-sm"
//                 style={{ width: '340px', marginBottom: '24px' }}
//               >
//                 <div className="flex items-start gap-4 mb-4">
//                   <div className="relative w-12 h-12 flex-shrink-0">
//                     <Image
//                       src={type.icon}
//                       alt={`${type.title} icon`}
//                       fill
//                       className="object-contain"
//                     />
//                   </div>
//                   <h3 className="text-xl md:text-2xl font-semibold leading-tight">{type.title}</h3>
//                 </div>
//                 <p className="font-poppins font-normal text-base md:text-lg leading-[130%] tracking-[-0.02em] text-gray-700">
//                   {type.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FoodPersonality;

// 'use client'

// import React, { useRef, useEffect } from 'react'
// import Image from 'next/image'
// import Masonry from 'masonry-layout'
// import imagesLoaded from 'imagesloaded'

// const personalityTypes = [
//   {
//     id: 'fitness-buff',
//     icon: '/buff.png',
//     title: 'Fitness Buffs',
//     description: 'Protein-packed meals that fuel workouts and wellness. You are dedicated to maintaining a healthy nutritional balance while staying energized for a fitness challenge!'
//   },
//   {
//     id: 'foodies',
//     icon: '/foodie.png',
//     title: 'Foodies',
//     description: 'You appreciate the artistry of a well-made food. You love exploring new cuisines, diving into complex flavors, and discovering specialized high-quality ingredients. Essential for those who genuinely treasure food.'
//   },
//   {
//     id: 'home-cooks',
//     icon: '/cooks.png',
//     title: 'Home Cooks',
//     description: 'You enjoy the process of making food, but sometimes lack the time or inspiration for cooking full meals. Yummeals helps you learn new techniques while saving time in the kitchen.'
//   },
//   {
//     id: 'party-lovers',
//     icon: '/party.png',
//     title: 'Party Lovers',
//     description: 'Shareable dishes that consistently amaze guests. Perfect for hosting parties, enjoying movie nights, game days, or special celebrations.'
//   },
//   {
//     id: 'healthy-eaters',
//     icon: '/healthy.png',
//     title: 'Healthy Eaters',
//     description: 'Healthy options provide nutrition and balance with fresh, whole foods. Our chefs create dishes where vegetables, legumes, pulses, or gluten-free for health-conscious meals.'
//   },
//   {
//     id: 'early-risers',
//     icon: '/early.png',
//     title: 'Early Risers',
//     description: 'Morning meals that energize and wake up early to get a head start on the day. Perfect for those who value a nutritious breakfast to fuel the day.'
//   },
//   {
//     id: 'healthy-eaters',
//     icon: '/healthy.png',
//     title: 'Healthy Eaters',
//     description: 'Healthy options provide nutrition and balance with fresh, whole foods. Our chefs create dishes where vegetables, legumes, pulses, or gluten-free for health-conscious meals.'
//   },
//   {
//     id: 'early-risers',
//     icon: '/early.png',
//     title: 'Early Risers',
//     description: 'Morning meals that energize and wake up early to get a head start on the day. Perfect for those who value a nutritious breakfast to fuel the day.'
//   },
//   {
//     id: 'foodies',
//     icon: '/foodie.png',
//     title: 'Foodies',
//     description: 'You appreciate the artistry of a well-made food. You love exploring new cuisines, diving into complex flavors, and discovering specialized high-quality ingredients. Essential for those who genuinely treasure food.'
//   },
//   {
//     id: 'home-cooks',
//     icon: '/cooks.png',
//     title: 'Home Cooks',
//     description: 'You enjoy the process of making food, but sometimes lack the time or inspiration for cooking full meals. Yummeals helps you learn new techniques while saving time in the kitchen.'
//   },
//   {
//     id: 'party-lovers',
//     icon: '/party.png',
//     title: 'Party Lovers',
//     description: 'Shareable dishes that consistently amaze guests. Perfect for hosting parties, enjoying movie nights, game days, or special celebrations.'
//   }
// ];

// const FoodPersonality = () => {
//   const gridRef = useRef<HTMLDivElement>(null);
//   const masonryRef = useRef<Masonry | null>(null);
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const duplicatedCards = [...personalityTypes, ...personalityTypes, ...personalityTypes]; // Triple the cards for smoother looping

//   // Initialize Masonry
//   useEffect(() => {
//     if (!gridRef.current) return;

//     const initMasonry = () => {
//       imagesLoaded(gridRef.current as HTMLElement, () => {
//         masonryRef.current = new Masonry(gridRef.current!, {
//           itemSelector: '.grid-item',
//           columnWidth: 340,
//           gutter: 24,
//           horizontalOrder: true,
//           fitWidth: true,
//           stagger: 0,
//           containerStyle: {
//             display: 'flex',
//             'flex-direction': 'column',
//             'flex-wrap': 'wrap',
//             'max-height': 'calc(2 * (340px + 24px))'
//           }
//         });
//       });
//     };

//     initMasonry();

//     const handleResize = () => {
//       masonryRef.current?.layout?.();
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       masonryRef.current?.destroy?.();
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   // Improved infinite scroll effect with seamless looping
//   useEffect(() => {
//     const scrollContainer = scrollContainerRef.current;
//     if (!scrollContainer) return;

//     let animationFrameId: number;
//     let scrollSpeed = 1;
//     let isPaused = false;
//     let scrollPosition = 0;
//     const containerWidth = scrollContainer.scrollWidth / 3; // Divide by 3 since we tripled the cards
//     const resetThreshold = containerWidth * 2; // Reset after 2/3 of the content

//     const scroll = () => {
//       if (!isPaused && scrollContainer) {
//         scrollPosition += scrollSpeed;

//         if (scrollPosition >= resetThreshold) {
//           // Smoothly reset to the middle section
//           scrollPosition -= containerWidth;
//           scrollContainer.scrollLeft = scrollPosition;
//         } else {
//           scrollContainer.scrollLeft = scrollPosition;
//         }

//         masonryRef.current?.layout?.();
//       }
//       animationFrameId = requestAnimationFrame(scroll);
//     };

//     const startTimeout = setTimeout(() => {
//       // Start scrolling from the middle section
//       scrollContainer.scrollLeft = containerWidth;
//       animationFrameId = requestAnimationFrame(scroll);
//     }, 500);

//     const handleMouseEnter = () => {
//       isPaused = true;
//       scrollContainer.style.scrollBehavior = 'smooth';
//     };

//     const handleMouseLeave = () => {
//       isPaused = false;
//       scrollContainer.style.scrollBehavior = 'auto';
//     };

//     scrollContainer.addEventListener('mouseenter', handleMouseEnter);
//     scrollContainer.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       clearTimeout(startTimeout);
//       cancelAnimationFrame(animationFrameId);
//       scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
//       scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, []);

//   return (
//     <section className="py-16 px-4 sm:px-8 lg:px-16">
//       <div className="mx-auto max-w-7xl">
//         <div className="mb-12 text-center lg:text-left">
//           <h2 className="font-torus-pro font-semibold text-3xl md:text-4xl lg:text-[2.5rem] leading-[100%] tracking-[-0.02em] mb-4">
//             Your food personality
//           </h2>
//           <p className="text-[#948D8A] text-lg">
//             What personality best describes the relationship with you and food?
//           </p>
//         </div>

//         <div
//           ref={scrollContainerRef}
//           className="overflow-x-hidden py-4"
//           style={{
//             maskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
//             WebkitMaskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)'
//           }}
//         >
//           <div
//             ref={gridRef}
//             className="masonry-grid"
//             style={{
//               display: 'flex',
//               flexDirection: 'column',
//               flexWrap: 'wrap',
//               height: 'calc(2 * (340px + 24px))',
//               width: 'max-content'
//             }}
//           >
//             {duplicatedCards.map((type, idx) => (
//               <div
//                 key={`${type.id}-${idx}`}
//                 className="grid-item bg-white rounded-xl p-6 shadow-sm"
//                 style={{
//                   width: '340px',
//                   marginBottom: '24px',
//                   marginRight: '24px'
//                 }}
//               >
//                 <div className="flex items-start gap-4 mb-4">
//                   <div className="relative w-12 h-12 flex-shrink-0">
//                     <Image
//                       src={type.icon}
//                       alt={`${type.title} icon`}
//                       fill
//                       className="object-contain"
//                     />
//                   </div>
//                   <h3 className="text-xl md:text-2xl font-semibold leading-tight">{type.title}</h3>
//                 </div>
//                 <p className="font-poppins font-normal text-base md:text-lg leading-[130%] tracking-[-0.02em] text-gray-700">
//                   {type.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FoodPersonality;

// 'use client'

// import React, { useState, useEffect, useRef } from 'react'
// import Image from 'next/image'

// // Define personality types
// const personalityTypes = [
//   {
//     id: 'fitness-buff',
//     icon: '/buff.png',
//     title: 'Fitness Buffs',
//     description: 'Protein-packed meals that fuel workouts and wellness. You are dedicated to maintaining a healthy nutritional balance while staying energized for a fitness challenge!'
//   },
//   {
//     id: 'foodies',
//     icon: '/foodie.png',
//     title: 'Foodies',
//     description: 'You appreciate the artistry of a well-made food. You love exploring new cuisines, diving into complex flavors, and discovering specialized high-quality ingredients. Essential for those who genuinely treasure food.'
//   },
//   {
//     id: 'home-cooks',
//     icon: '/cooks.png',
//     title: 'Home Cooks',
//     description: 'You enjoy the process of making food, but sometimes lack the time or inspiration for cooking full meals. Yummeals helps you learn new techniques while saving time in the kitchen.'
//   },
//   {
//     id: 'party-lovers',
//     icon: '/party.png',
//     title: 'Party Lovers',
//     description: 'Shareable dishes that consistently amaze guests. Perfect for hosting parties, enjoying movie nights, game days, or special celebrations.'
//   },
//   {
//     id: 'healthy-eaters',
//     icon: '/healthy.png',
//     title: 'Healthy Eaters',
//     description: 'Healthy options provide nutrition and balance with fresh, whole foods. Our chefs create dishes where vegetables, legumes, pulses, or gluten-free for health-conscious meals.'
//   },
//   {
//     id: 'early-risers',
//     icon: '/early.png',
//     title: 'Early Risers',
//     description: 'Morning meals that energize and wake up early to get a head start on the day. Perfect for those who value a nutritious breakfast to fuel the day.'
//   },
//   {
//     id: 'healthy-eaters',
//     icon: '/healthy.png',
//     title: 'Healthy Eaters',
//     description: 'Healthy options provide nutrition and balance with fresh, whole foods. Our chefs create dishes where vegetables, legumes, pulses, or gluten-free for health-conscious meals.'
//   },
//   {
//     id: 'early-risers',
//     icon: '/early.png',
//     title: 'Early Risers',
//     description: 'Morning meals that energize and wake up early to get a head start on the day. Perfect for those who value a nutritious breakfast to fuel the day.'
//   },
//   {
//     id: 'foodies',
//     icon: '/foodie.png',
//     title: 'Foodies',
//     description: 'You appreciate the artistry of a well-made food. You love exploring new cuisines, diving into complex flavors, and discovering specialized high-quality ingredients. Essential for those who genuinely treasure food.'
//   },
//   {
//     id: 'home-cooks',
//     icon: '/cooks.png',
//     title: 'Home Cooks',
//     description: 'You enjoy the process of making food, but sometimes lack the time or inspiration for cooking full meals. Yummeals helps you learn new techniques while saving time in the kitchen.'
//   },
//   {
//     id: 'party-lovers',
//     icon: '/party.png',
//     title: 'Party Lovers',
//     description: 'Shareable dishes that consistently amaze guests. Perfect for hosting parties, enjoying movie nights, game days, or special celebrations.'
//   },
// ]

// const FoodPersonality = () => {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const [displayedCards, setDisplayedCards] = useState([...personalityTypes]);

//   useEffect(() => {
//     const scrollContainer = scrollContainerRef.current;
//     if (!scrollContainer) return;

//     // Duplicate the cards to create seamless infinite scroll
//     setDisplayedCards([...personalityTypes, ...personalityTypes]);

//     let animationFrameId: number;
//     let scrollSpeed = 1; // pixels per frame

//     const scroll = () => {
//       if (scrollContainer) {
//         // Reset scroll position when reaching the end of the duplicated content
//         if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth / 2)) {
//           scrollContainer.scrollLeft -= (scrollContainer.scrollWidth / 2);
//         } else {
//           scrollContainer.scrollLeft += scrollSpeed;
//         }
//       }
//       animationFrameId = requestAnimationFrame(scroll);
//     };

//     animationFrameId = requestAnimationFrame(scroll);

//     // Pause on hover
//     const handleMouseEnter = () => {
//       cancelAnimationFrame(animationFrameId);
//     };

//     const handleMouseLeave = () => {
//       animationFrameId = requestAnimationFrame(scroll);
//     };

//     scrollContainer.addEventListener('mouseenter', handleMouseEnter);
//     scrollContainer.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
//       scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, []);

//   return (
//     <section className="py-16 px-16">
//       <div className="mx-auto">
//         <div className="mb-12">
//           <h2 className="font-torus-pro font-semibold text-[2.5rem] leading-[100%] tracking-[-0.02em] mb-4">
//             Your food personality
//           </h2>
//           <p className="text-[#948D8A] text-lg">
//             What personality best describes the relationship with you and food?
//           </p>
//         </div>
//         <div
//           ref={scrollContainerRef}
//           className="overflow-x-hidden" // Changed from overflow-x-auto to hide scrollbar
//           style={{
//             WebkitOverflowScrolling: 'touch',
//             paddingBottom: '1rem',
//           }}
//         >
//           <div
//             className="grid gap-8"
//             style={{
//               display: 'grid',
//               gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
//               gridAutoFlow: 'column',
//               gridTemplateRows: 'auto auto', // Explicitly set to 2 rows
//               gridAutoColumns: 'minmax(340px, 1fr)',
//               width: 'max-content',
//               height: 'auto',
//             }}
//           >
//             {displayedCards.map((type, idx) => (
//               <div
//                 key={type.id + '-' + idx}
//                 style={{
//                   width: '340px',
//                   minWidth: '340px',
//                   background: 'white',
//                   borderRadius: '1rem',
//                   padding: '2rem',
//                   boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
//                   display: 'flex',
//                   flexDirection: 'column',
//                 }}
//               >
//                 <div className="flex items-start gap-4 mb-4">
//                   <div className="relative w-14 h-14 flex-shrink-0">
//                     <Image
//                       src={type.icon}
//                       alt={`${type.title} icon`}
//                       fill
//                       className="object-contain"
//                     />
//                   </div>
//                   <h3 className="text-[1.5rem] font-semibold leading-tight">{type.title}</h3>
//                 </div>
//                 <p className="font-poppins font-normal text-[1.25rem] leading-[130%] tracking-[-0.02em] text-gray-700 break-words">
//                   {type.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FoodPersonality;

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Define personality types
const personalityTypes = [
  {
    id: "fitness-buff",
    icon: "/buff.png",
    title: "Fitness Buffs",
    description:
      "Protein-packed meals that fuel workouts and wellness. You are dedicated to maintaining a healthy nutritional balance while staying energized for a fitness challenge!",
  },
  {
    id: "foodies",
    icon: "/foodie.png",
    title: "Foodies",
    description:
      "You appreciate the artistry of a well-made food. You love exploring new cuisines, diving into complex flavors, and discovering specialized high-quality ingredients. Essential for those who genuinely treasure food.",
  },
  {
    id: "home-cooks",
    icon: "/cooks.png",
    title: "Home Cooks",
    description:
      "You enjoy the process of making food, but sometimes lack the time or inspiration for cooking full meals. Yummeals helps you learn new techniques while saving time in the kitchen.",
  },
  {
    id: "party-lovers",
    icon: "/party.png",
    title: "Party Lovers",
    description:
      "Shareable dishes that consistently amaze guests. Perfect for hosting parties, enjoying movie nights, game days, or special celebrations.",
  },
  {
    id: "healthy-eaters",
    icon: "/healthy.png",
    title: "Healthy Eaters",
    description:
      "Healthy options provide nutrition and balance with fresh, whole foods. Our chefs create dishes where vegetables, legumes, pulses, or gluten-free for health-conscious meals.",
  },
  {
    id: "early-risers",
    icon: "/early.png",
    title: "Early Risers",
    description:
      "Morning meals that energize and wake up early to get a head start on the day. Perfect for those who value a nutritious breakfast to fuel the day.",
  },
  {
    id: "healthy-eaters",
    icon: "/healthy.png",
    title: "Healthy Eaters",
    description:
      "Healthy options provide nutrition and balance with fresh, whole foods. Our chefs create dishes where vegetables, legumes, pulses, or gluten-free for health-conscious meals.",
  },
  {
    id: "early-risers",
    icon: "/early.png",
    title: "Early Risers",
    description:
      "Morning meals that energize and wake up early to get a head start on the day. Perfect for those who value a nutritious breakfast to fuel the day.",
  },
  {
    id: "foodies",
    icon: "/foodie.png",
    title: "Foodies",
    description:
      "You appreciate the artistry of a well-made food. You love exploring new cuisines, diving into complex flavors, and discovering specialized high-quality ingredients. Essential for those who genuinely treasure food.",
  },
  {
    id: "home-cooks",
    icon: "/cooks.png",
    title: "Home Cooks",
    description:
      "You enjoy the process of making food, but sometimes lack the time or inspiration for cooking full meals. Yummeals helps you learn new techniques while saving time in the kitchen.",
  },
  {
    id: "party-lovers",
    icon: "/party.png",
    title: "Party Lovers",
    description:
      "Shareable dishes that consistently amaze guests. Perfect for hosting parties, enjoying movie nights, game days, or special celebrations.",
  },
];

const FoodPersonality = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [displayedCards, setDisplayedCards] = useState([...personalityTypes]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // Duplicate the cards to create seamless infinite scroll
    setDisplayedCards([...personalityTypes, ...personalityTypes]);

    let animationFrameId: number;
    const scrollSpeed = 1; // pixels per frame

    const scroll = () => {
      if (scrollContainer) {
        // Reset scroll position when reaching the end of the duplicated content
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft -= scrollContainer.scrollWidth / 2;
        } else {
          scrollContainer.scrollLeft += scrollSpeed;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId);
    };

    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-12 px-6 sm:px-20">
      <div className="mx-auto">
        <div className="mb-12">
          <h2 className="font-torus font-semibold sm:text-[3rem] text-2xl leading-[100%] tracking-[-0.02em] mb-4 text-[#1A0901]">
            Your food personality
          </h2>
          <p className="text-[#948D8A] sm:text-[1.75rem] text-lg font-normal">
            What personality best describes the relationship with you and food?
          </p>
        </div>
        {/* <div
          ref={scrollContainerRef}
          className="overflow-x-hidden" // Changed from overflow-x-auto to hide scrollbar
          style={{
            WebkitOverflowScrolling: "touch",
            paddingBottom: "1rem",
          }}
        >
          <div
            className="grid gap-8"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
              gridAutoFlow: "column",
              gridTemplateRows: "auto", // Changed to single row on all screens
              gridAutoColumns: "minmax(500px, 1fr)",
              width: "max-content",
              height: "auto",
            }}
          >
            {displayedCards.map((type, idx) => (
              <div
              className="sm:min-w-[500px] min-w-[400px]"
                key={type.id + "-" + idx}
                style={{
                  // width: "500px",
                  // minWidth: "500px",
                  background: "white",
                  borderRadius: "1rem",
                  padding: "2rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="flex gap-4 items-start">
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <Image
                      src={type.icon}
                      alt={`${type.title} icon`}
                      fill
                      className="object-contain -mt-2"
                    />
                  </div>
                  <div className="flex flex-col gap-4 mb-4">
                    <h3 className="sm:text-[1.5rem] text-[1rem] font-semibold leading-tight text-black">
                      {type.title}
                    </h3>

                    <p className="font-poppins font-normal sm:text-[1.25rem] text-sm leading-8 tracking-[-0.02em] text-black break-words">
                      {type.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-hidden pb-4"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="grid grid-flow-col auto-cols-[min(100%,400px)] sm:auto-cols-[500px] gap-8 w-max">
            {displayedCards.map((type, idx) => (
              <div
                key={type.id + "-" + idx}
                className="w-[400px] sm:w-[500px] bg-white rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.05)] flex flex-col"
              >
                <div className="flex gap-4 items-start">
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <Image
                      src={type.icon}
                      alt={`${type.title} icon`}
                      fill
                      className="object-contain -mt-2"
                    />
                  </div>
                  <div className="flex flex-col gap-4 mb-4">
                    <h3 className="text-base sm:text-2xl font-semibold leading-tight text-black">
                      {type.title}
                    </h3>
                    <p className="font-poppins font-normal text-sm sm:text-xl leading-8 tracking-tight text-black break-words">
                      {type.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodPersonality;
