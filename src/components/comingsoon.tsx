"use client";
import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaInfoCircle } from "react-icons/fa";
import { waitlistSchema, WaitlistFormData } from "@/schemas/waitlistSchema";
import { useWaitlist } from "@/lib/queries/waitlist";
import ThankYouModal from "./ThankYou";

const ComingSoonPage = () => {
  const [showPersonalityInfo, setShowPersonalityInfo] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  const { mutate: submitWaitlist, isPending: isSubmitting, error } = useWaitlist();

  // Define personality options
  const personalityOptions = [
    "Foodie Explorer",
    "Health Conscious",
    "Comfort Food Lover",
    "Adventurous Eater",
    "Traditional Taste",
    "Convenience Seeker",
  ];

  const onSubmit = async (data: WaitlistFormData) => {
    try {
      await submitWaitlist(data, {
        onSuccess: () => {
          setShowThankYou(true);
          reset();
          setShowPersonalityInfo(false);
        },
        onError: (err) => {
          console.error("Submission error:", err);
        },
      });
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const handleCloseThankYou = () => {
    setShowThankYou(false);
  };

  return (
    <div className=" bg-white relative overflow-hidden" id="waitlist-form">
      {/* Header with Logo */}
      <div className="w-[90%] mx-auto  ">
        <Image
          src="/comingso.svg"
          alt="Yummeals"
          width={1500}
          height={1000}
          className="object-contain absolute "
        />
      </div>

      <div className="   absolute top-0 right-0">
        <Image
          src="/coming.svg"
          alt="Yummeals"
          width={300}
          height={60}
          className="object-contain xs:w-[100px] md:w-[100px] w-[100px] sm:w-[50px] lg:w-[300px] xl:w-[300px]"
        />
      </div>

      <div className="sm:w-[80%] w-full p-6 pb-0 mx-auto sm:mt-10 flex flex-col">
        <div className="relative sm:w-48 sm:h-12 h-8 w-32 sm:mb-10 mb-6">
          <Image
            src="/logo.svg"
            alt="Yummeals logo"
            fill
            priority
            className="object-contain"
          />
        </div>
        <h1 className="font-poppins sm:font-[700] font-semibold items-center lg:text-[74px] text-2xl lg:leading-[80px] tracking-[-3%] text-[#2A2822] mb-4 sm:w-[70%]">
          Join Our Waitlist for a Chance to Win Big!
        </h1>

        <p className="font-normal text-base  mb-4 font-poppins md:text-[1.4rem]  lg:text-[1.4rem] leading-[150%] tracking-[4%] text-[#2A2822] max-w-3xl">
          At Yummeals, we believe that no matter your journey, one thing unites
          us all - the joy of a delicious, satisfying meal. Join the waitlist
          today for your chance to win amazing food vouchers and experience the
          happiness only good food can bring.
        </p>
        <div className="flex items-center gap-2">
          <div className="sm:w-4 sm:h-4 w-2 h-2 bg-[#FF5F26] rounded-full"></div>
          <div className="sm:w-4 sm:h-4 w-2 h-2 bg-[#FF5F26] rounded-full"></div>
          <div className="sm:w-4 sm:h-4 w-2 h-2 bg-[#FF5F26] rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="sm:w-[80%] w-full mx-auto pb-16 p-6 flex flex-col md:flex-row">
        {/* Left column with text and form */}
        <div className="w-full">
          <div className="mb-12">
            <h2 className="font-poppins sm:font-bold font-semibold text-xl uppercase mb-6">
              GET NOTIFIED WHEN WE ARE LIVE!
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    {...register("firstName")}
                    placeholder="Enter first name"
                    className={`w-full px-3 py-3 border ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:border-[#64961A] focus:outline-none`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    {...register("lastName")}
                    placeholder="Enter last name"
                    className={`w-full px-3 py-3 border ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:border-[#64961A] focus:outline-none`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    placeholder="name@email.com"
                    className={`w-full px-3 py-3 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:border-[#64961A] focus:outline-none`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    {...register("phoneNumber")}
                    placeholder="Enter phone number"
                    className={`w-full px-3 py-3 border ${
                      errors.phoneNumber ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:border-[#64961A] focus:outline-none`}
                  />
                  {errors.phoneNumber && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <div className="flex items-center mb-2">
                    <label className="block font-medium text-[0.875rem] leading-[1.5rem] tracking-normal align-middle font-poppins">
                      What personality best describes you?
                    </label>
                    <button
                      type="button"
                      onClick={() =>
                        setShowPersonalityInfo(!showPersonalityInfo)
                      }
                      className="ml-2 text-orange-500 hover:text-orange-600 flex items-center text-xs sm:text-sm"
                    >
                      Know more <FaInfoCircle className="ml-1" />
                    </button>
                  </div>
                  {showPersonalityInfo && (
                    <div className="mb-2 p-3 bg-orange-50 text-sm rounded-md text-gray-700">
                      Your food personality helps us recommend meals that match
                      your preferences and eating habits.
                    </div>
                  )}
                  <div className="relative">
                    <select
                      {...register("personalityType")}
                      className="w-full p-3 border border-gray-300 rounded-md bg-white text-left focus:outline-none focus:border-[#64961A] appearance-none pr-8"
                    >
                      <option value="">Please select</option>
                      {personalityOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <Image
                        src="/dropdown.svg"
                        alt="dropdown arrow"
                        width={10}
                        height={10}
                        className=""
                      />
                    </div>
                  </div>
                  {errors.personalityType && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.personalityType.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-2 w-fit bg-[#FF5F26] mt-2 sm:mt-0 sm:mb-24 text-white font-medium text-[1rem] rounded hover:bg-[#E04A00] disabled:opacity-70 cursor-pointer transition-colors duration-300 leading-6"
                >
                  {isSubmitting ? "Processing..." : "Notify Me"}
                </button>
              </div>

              {error && (
                <p className="text-red-400 text-sm mt-1">
                  {error.message || "Something went wrong."}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
      <div className="absolute z-50  right-0 bottom-0">
        <Image
          src="/comingsoon.svg"
          alt="Delicious food"
          width={500}
          height={500}
          className="object-contain xs:w-[200px] md:w-[300px] w-[200px] sm:w-[200px] lg:w-[500px] xl:w-[500px]"
        />
      </div>
      <div className="w-[90%] mx-auto  ">
        <Image
          src="/come.svg"
          alt="Yummeals"
          width={1500}
          height={1000}
          className="object-contain absolute bottom-0 "
        />
      </div>
      {showThankYou && <ThankYouModal onBackHome={handleCloseThankYou} />}
    </div>
  );
};

export default ComingSoonPage;