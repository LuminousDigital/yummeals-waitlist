"use client";

// import { useState, FormEvent } from 'react';
// import { z } from 'zod';
import SignUpForm from "./SignUpForm";

// Define schema with Zod
// const formSchema = z.object({
//   fullName: z.string().min(2, "Full name must be at least 2 characters"),
//   email: z.string().email("Please enter a valid email address"),
//   phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
//   newsletter: z.boolean(),
// });

// // Derive type from schema
// type FormData = z.infer<typeof formSchema>;

// // Define error type
// type FormErrors = {
//   [K in keyof FormData]?: string;
// };

const Ticket = () => {
  // const [formData, setFormData] = useState<FormData>({
  //   fullName: '',
  //   email: '',
  //   phoneNumber: '',
  //   newsletter: false,
  // });
  // const [errors, setErrors] = useState<FormErrors>({});
  // const [isSuccess, setIsSuccess] = useState(false);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value, type, checked } = e.target;
  //   const newValue = type === 'checkbox' ? checked : value;

  //   setFormData({
  //     ...formData,
  //     [name]: newValue,
  //   });

  //   // Clear error when field is edited
  //   if (errors[name as keyof FormData]) {
  //     setErrors({
  //       ...errors,
  //       [name]: undefined,
  //     });
  //   }
  // };

  // const validateForm = (): boolean => {
  //   try {
  //     formSchema.parse(formData);
  //     setErrors({});
  //     return true;
  //   } catch (error) {
  //     if (error instanceof z.ZodError) {
  //       const newErrors: FormErrors = {};
  //       error.errors.forEach((err) => {
  //         const path = err.path[0] as keyof FormData;
  //         newErrors[path] = err.message;
  //       });
  //       setErrors(newErrors);
  //     }
  //     return false;
  //   }
  // };

  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();

  //   if (!validateForm()) {
  //     return;
  //   }

  //   try {
  //     // Replace with actual API call
  //     await new Promise(resolve => setTimeout(resolve, 1000));
  //     setIsSuccess(true);
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //   }
  // };

  return (
    <div id="waitlist-form" className="mx-auto bg-[#FFFCFA] p-6">
      <div className="text-center max-w-6xl mx-auto mt-10 ">
        <h1 className="font-torus text-[1.5rem] leading-9 text-[#948D8A] font-semibold sm:text-[4rem] sm:leading-[100%] tracking-normal text-center">
          Up{" "}
          <span className="text-[#F25B0A] text-[1.5rem] leading-9 font-semibold sm:text-[4rem] sm:leading-[100%] tracking-normal text-center">
            To 1 Million Naira
          </span>{" "}
          Free Meal and Exclusive Party Tickets Up For Grabs
        </h1>

        <p className="mt-10 mx-auto max-w-3xl leading-7 text-[1rem] text-gray-700 font-poppins font-normal sm:text-[1.75rem] sm:leading-[120%] tracking-normal text-center">
          Be among the first to experience the Yummeals difference!{" "}
          <span className="font-bold"> Sign up for our waitlist </span> now and{" "}
          <span className="font-bold"> win free meal tickets</span> or get an
          exclusive invite to our launch party.
        </p>
      </div>

      {/* {isSuccess ? (
        <div className="text-center p-6 bg-green-50 rounded-lg">
          <h3 className="text-xl font-medium text-green-800">Thank You for Signing Up!</h3>
          <p className="mt-2 text-green-700">
            We&apos;ve received your information and will contact you soon with your exclusive offers.
          </p>
        </div>
      ) : (
        <div className="mt-6 ">
          <SignUpForm />
        </div>
      )} */}
      <div className="mt-10 ">
        <SignUpForm />

        {/* <ComingSoonPage/> */}
      </div>
    </div>
  );
};

export default Ticket;
