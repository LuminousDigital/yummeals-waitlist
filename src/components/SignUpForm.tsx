// 'use client'
// import { useState, FormEvent } from 'react';
// import { z } from 'zod';
// import { FaChevronDown, FaInfoCircle } from 'react-icons/fa';
// import Image from 'next/image';

// // Define schema with Zod
// const formSchema = z.object({
//   firstName: z.string().min(2, "First name must be at least 2 characters"),
//   lastName: z.string().min(2, "Last name must be at least 2 characters"),
//   email: z.string().email("Please enter a valid email address"),
//   phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
//   personalityType: z.string().optional(),
// });

// // Derive type from schema
// type FormData = z.infer<typeof formSchema>;

// // Define error type
// type FormErrors = {
//   [K in keyof FormData]?: string;
// };

// const personalityOptions = [
//   "Adventurous foodie",
//   "Health conscious",
//   "Comfort food lover",
//   "Gourmet enthusiast",
//   "Budget-friendly eater",
//   "Vegetarian/Vegan",
//   "Traditional cuisine fan"
// ];

// const SignUpForm = () => {
//   const [formData, setFormData] = useState<FormData>({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     personalityType: '',
//   });
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [showPersonalityInfo, setShowPersonalityInfo] = useState(false);
//   const [showThankYou, setShowThankYou] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//     // Clear error when field is edited
//     if (errors[name as keyof FormData]) {
//       setErrors({
//         ...errors,
//         [name]: undefined,
//       });
//     }
//   };

//   const handlePersonalitySelect = (option: string) => {
//     setFormData({
//       ...formData,
//       personalityType: option,
//     });
//     setIsDropdownOpen(false);
//   };

//   const validateForm = (): boolean => {
//     try {
//       formSchema.parse(formData);
//       setErrors({});
//       return true;
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         const newErrors: FormErrors = {};
//         error.errors.forEach((err) => {
//           const path = err.path[0] as keyof FormData;
//           newErrors[path] = err.message;
//         });
//         setErrors(newErrors);
//       }
//       return false;
//     }
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     if (!validateForm()) return;
    
//     setIsSubmitting(true);
    
//     try {
//       const response = await fetch('/api/waitlist', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           ...formData,
//           timestamp: new Date().toISOString(), 
//         }),
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         console.log(result?.error)
//         throw new Error(result.error || 'Failed to save data');
//       }

//       if (result.success) {
//         form.reset();
//         setShowThankYou(true);
//       } else {
//         throw new Error(result.error || 'Failed to save data');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       alert('There was an error submitting your form. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="max-w-5xl mx-auto bg-white mb-10 rounded-lg shadow-2xl">
//       {showThankYou ? (
//         <div className="flex flex-col items-center justify-center w-full py-12">
//           <Image src="/verify.svg" alt="Success" width={100} height={100} />
//           <h2 className="text-3xl font-bold mt-6 mb-4 text-center">Thank You!!</h2>
//           <p className="text-gray-500 text-lg text-center mb-8 max-w-2xl">
//             Thank you for signing up for our waitlist! We&apos;re thrilled that you&apos;re interested in Yummeals. 
//             Your information has been securely saved, and we&apos;ll be sure to keep you updated with the latest news.
//           </p>
//           <button
//             onClick={() => setShowThankYou(false)}
//             className="bg-[#38B000] text-white font-bold py-2 px-6 rounded-md transition duration-300 cursor-pointer"
//           >
//             Close
//           </button>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit} className="space-y-5 p-20">
//           <h2 className="font-bold text-[2rem] leading-[100%] tracking-[-0.02em] font-poppins">Sign Up Form</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
//             <div>
//               <label htmlFor="firstName" className="block font-medium text-[0.875rem] leading-[1.5rem] tracking-normal align-middle font-poppins">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 placeholder="e.g. Ada"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 ${
//                   errors.firstName ? 'border-red-500' : 'border-gray-300'
//                 }`}
//               />
//               {errors.firstName && (
//                 <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
//               )}
//             </div>
//             <div>
//               <label htmlFor="lastName" className="block font-medium text-[0.875rem] leading-[1.5rem] tracking-normal align-middle font-poppins">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 placeholder="e.g. James"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 ${
//                   errors.lastName ? 'border-red-500' : 'border-gray-300'
//                 }`}
//               />
//               {errors.lastName && (
//                 <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
//               )}
//             </div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label htmlFor="email" className="block font-medium text-[0.875rem] leading-[1.5rem] tracking-normal align-middle font-poppins">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 ${
//                   errors.email ? 'border-red-500' : 'border-gray-300'
//                 }`}
//               />
//               {errors.email && (
//                 <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//               )}
//             </div>
//             <div>
//               <label htmlFor="phoneNumber" className="block font-medium text-[0.875rem] leading-[1.5rem] tracking-normal align-middle font-poppins">
//                 Phone number
//               </label>
//               <input
//                 type="tel"
//                 id="phoneNumber"
//                 name="phoneNumber"
//                 placeholder="Phone"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 ${
//                   errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
//                 }`}
//               />
//               {errors.phoneNumber && (
//                 <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
//               )}
//             </div>
//           </div>
//           <div>
//             <div className="flex items-center mb-1">
//               <label className="block font-medium text-[0.875rem] leading-[1.5rem] tracking-normal align-middle font-poppins">
//                 What personality best describes you?
//               </label>
//               <button 
//                 type="button"
//                 onClick={() => setShowPersonalityInfo(!showPersonalityInfo)}
//                 className="ml-2 text-orange-500 hover:text-orange-600 flex items-center text-sm"
//               >
//                 Know more <FaInfoCircle className="ml-1" />
//               </button>
//             </div>
//             {showPersonalityInfo && (
//               <div className="mb-2 p-3 bg-orange-50 text-sm rounded-md text-gray-700">
//                 Your food personality helps us recommend meals that match your preferences and eating habits.
//               </div>
//             )}
//             <div className="relative">
//               <button
//                 type="button"
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-left flex justify-between items-center focus:outline-none focus:ring-1 focus:ring-green-500"
//               >
//                 <span className="text-gray-500">
//                   {formData.personalityType || "Please select"}
//                 </span>
//                 <Image src="/dropdown.svg" alt="arrow-down" width={10} height={10} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
//                   {personalityOptions.map((option) => (
//                     <div
//                       key={option}
//                       className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
//                       onClick={() => handlePersonalitySelect(option)}
//                     >
//                       {option}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="bg-[#64961A] text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out disabled:opacity-70 flex items-center justify-center w-full"
//           >
//             {isSubmitting ? (
//               <>
//                 <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
//                 </svg>
//                 Joining...
//               </>
//             ) : 'Join Waitlist Now'}
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default SignUpForm; 


'use client'
import { useState, FormEvent } from 'react';
import { z } from 'zod';
import { FaInfoCircle } from 'react-icons/fa';
import Image from 'next/image';

// Define schema with Zod
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  personalityType: z.string().optional(),
});

// Derive type from schema
type FormData = z.infer<typeof formSchema>;

// Define error type
type FormErrors = {
  [K in keyof FormData]?: string;
};

const personalityOptions = [
  "Adventurous foodie",
  "Health conscious",
  "Comfort food lover",
  "Gourmet enthusiast",
  "Budget-friendly eater",
  "Vegetarian/Vegan",
  "Traditional cuisine fan"
];

const SignUpForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    personalityType: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showPersonalityInfo, setShowPersonalityInfo] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when field is edited
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handlePersonalitySelect = (option: string) => {
    setFormData({
      ...formData,
      personalityType: option,
    });
    setIsDropdownOpen(false);
  };

  const validateForm = (): boolean => {
    try {
      formSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: FormErrors = {};
        error.errors.forEach((err) => {
          const path = err.path[0] as keyof FormData;
          newErrors[path] = err.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      personalityType: '',
    });
    setErrors({});
    setIsDropdownOpen(false);
    setShowPersonalityInfo(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate 5 second delay before making the API call
      await new Promise(resolve => setTimeout(resolve, 10000));
      
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(), 
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.log(result?.error)
        throw new Error(result.error || 'Failed to save data');
      }

      if (result.success) {
        resetForm(); 
        setShowThankYou(true);
      } else {
        throw new Error(result.error || 'Failed to save data');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white mb-10 rounded-lg shadow-2xl">
      {showThankYou ? (
        <div className="flex flex-col items-center justify-center w-full py-12">
          <Image src="/verify.svg" alt="Success" width={100} height={100} />
          <h2 className="sm:text-3xl text-2xl font-bold mt-6 mb-4 text-center">Thank You!!</h2>
          <p className="text-gray-500 sm:text-lg text-center mb-8 max-w-2xl text-sm leading-8 px-4">
            Thank you for signing up for our waitlist! We&apos;re thrilled that you&apos;re interested in Yummeals. 
            Your information has been securely saved, and we&apos;ll be sure to keep you updated with the latest news.
          </p>
          <button
            onClick={() => setShowThankYou(false)}
            className="bg-[#38B000] text-white font-bold py-2 px-6 rounded-md transition duration-300 cursor-pointer"
          >
            Close
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 sm:p-20 p-6">
          <h2 className="font-semibold sm:text-[2rem] text-2xl leading-[100%] tracking-[-0.02em] font-poppins">Sign Up Form</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div>
              <label htmlFor="firstName" className="block font-medium text-[0.875rem] leading-[1.5rem] tracking-normal align-middle font-poppins">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="e.g. Ada"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="block font-medium text-[0.875rem] leading-[1.5rem] tracking-normal align-middle font-poppins">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="e.g. James"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block font-medium text-[0.875rem] leading-[1.5rem] tracking-normal align-middle font-poppins">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block font-medium text-[0.875rem] leading-[1.5rem] tracking-normal align-middle font-poppins">
                Phone number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 ${
                  errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
              )}
            </div>
          </div>
          <div className='sm:grid-cols-2'>
            <div className="flex items-center mb-1">
              <label className="block font-medium text-[0.875rem] leading-[1.5rem] tracking-normal align-middle font-poppins">
                What personality best describes you?
              </label>
              <button 
                type="button"
                onClick={() => setShowPersonalityInfo(!showPersonalityInfo)}
                className="ml-2 text-orange-500 hover:text-orange-600 flex items-center text-sm cursor-pointer"
              >
                <span className='text-xs'>Know more</span> <FaInfoCircle className="ml-1" />
              </button>
            </div>
            {showPersonalityInfo && (
              <div className="mb-2 p-3 bg-orange-50 text-sm rounded-md text-gray-700">
                Your food personality helps us recommend meals that match your preferences and eating habits.
              </div>
            )}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-left flex justify-between items-center focus:outline-none focus:ring-1 focus:ring-green-500"
              >
                <span className="text-gray-500">
                  {formData.personalityType || "Please select"}
                </span>
                <Image src="/dropdown.svg" alt="arrow-down" width={10} height={10} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                  {personalityOptions.map((option) => (
                    <div
                      key={option}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handlePersonalitySelect(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="sm:mt-10 bg-[#64961A] w-fit text-[1rem] text-white font-normal py-2 px-4 rounded-md transition duration-300 ease-in-out disabled:opacity-70 flex items-center justify-center cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                Joining...
              </>
            ) : 'Join Waitlist Now'}
          </button>
        </form>
      )}
    </div>
  );
};

export default SignUpForm;