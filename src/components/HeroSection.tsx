import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center  px-4 text-center bg-cover bg-center bg-no-repeat  "
      style={{ backgroundImage: "url(/soon.png)" }}
    >
      <div className=" bg-opacity-50 rounded-lg w-full mt-4 ">
        {/* <Image src="/lauch.png" alt="Yummeals" width={400} height={400} /> */}

        <div className="relative w-full aspect-square mx-auto flex items-center justify-between h-[70vh] sm:h-[90vh] sm:pb-16 sm:pt-6">
          <div className="lg:w-[40%]  sm:w-[70%] md:w-[50%] w-full mx-auto relative">
            {/* <div className="max-w-5xl mx-auto p-4 md:p-6 relative"> */}
            {/* Main heading */}
            <div className="absolute inset-0 top-[1%] xs:top-[5%] sm:top-[3%]  md:top-[6%] lg:top-[-2%] text-center font-bold z-10 text-3xl xs:text-[14px] sm:text-lg md:text-2xl lg:text-4xl xl:text-6xl leading-[1.05] xs:leading-[1.1] sm:leading-[1.15] md:leading-[110%]  xs:tracking-normal sm:tracking-[-0.01em] lg:tracking-[-0.02em] px-0.5 xs:px-1 sm:px-2 md:px-0 pt-1 xs:pt-2 sm:pt-0 tracking-[1px] sm:tracking-0">
            Get Free Food
              <br />
              For A Year!!!!
            </div>
           

            {/* Circle with food images */}
            {/* <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto aspect-square"> */}
            <div className="relative   mx-auto aspect-square">
              {/* Center orange circle with text */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="bg-[#F25B0A] rounded-full w-[55%] h-[55%] flex flex-col items-center justify-center text-white p-1 xs:p-2 sm:p-4 md:p-6 lg:p-4">
                  <p className="w-full text-center font-poppins font-bold sm:text-[3rem] lg:text-[3rem] leading-[100%] text-2xl sm:mt-0 md:text-[1.5rem] md:mt-3">
                    Yummeals
                  </p>
                  <p className="w-full text-center font-poppins font-medium sm:text-[1.5rem] lg:text-[1.5rem] text-sm md:text-[1rem]">
                    is Launching Soon
                  </p>
                  <p className="text-center font-poppins font-medium sm:text-[1rem] lg:text-[1rem]  sm:w-[70%] lg:w-[70%] sm:leading-6 lg:mt-6 lg:leading-6 leading-5 sm:mt-6  mt-3 text-xs md:text-xs md:w-full md:mt-4 w-[90%]" >
                    and we are giving away over 10M naira worth of vouchers and goodies
                  </p>
                </div>
              </div>

              {/* Light orange background circles with improved spacing */}
              {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#F25B0A] rounded-full w-[60%] h-[60%] opacity-70"></div>
        </div> */}

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#FFE8DB] rounded-full w-[70%] h-[70%] opacity-80"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className=" rounded-full w-[85%] h-[85%] border-3 border-dashed border-t-0 border-[#FCCAB0] opacity-90"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#FFEADE] rounded-full w-[100%] h-[100%] opacity-60"></div>
              </div>

              {/* Food images positioned around the circle - mobile optimized */}
              <div className="absolute z-20 top-[22%] left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                {/* <div className="absolute z-20 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4"> */}
                <div className="relative w-20 h-20 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-40 lg:h-40">
                  <Image
                    src="/grill.svg"
                    alt="Food box"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="absolute z-20 top-[40%] right-[10%] transform translate-x-1/9 -translate-y-1/2">
                {/* <div className="absolute z-20 top-1/3 right-0 transform translate-x-1/9 -translate-y-1/2"> */}
                <div className="relative w-20 h-20 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-40 lg:h-40">
                  <Image
                    src="/vegetable-soup.png"
                    alt="Curry dish"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="absolute z-20 bottom-1/4 right-1/6 transform translate-x-1/2 translate-y-1/4">
                <div className="relative w-20 h-20 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-40 lg:h-40">
                  <Image
                    src="/uzbek.png"
                    alt="Rice dish"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="absolute z-20 bottom-[10%] left-1/2 transform -translate-x-1/2 translate-y-1/4">
                {/* <div className="absolute z-20 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4"> */}
                <div className="relative w-20 h-20 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-40 lg:h-40">
                  <Image
                    src="/fried-rice.png"
                    alt="Rice dish"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="absolute z-20 lg:top-[25%]  lg:left-[5%] top-[35%]  left-[10%] transform -translate-x-1/16 lg:-translate-y-1/8 -translate-y-1/2  ">
                {/* <div className="absolute z-20 top-20  left-0 transform -translate-x-1/16 lg:-translate-y-1/8 -translate-y-1/2  "> */}
                <div className="relative w-20 h-20 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-40 lg:h-40">
                  <Image
                    src="/burger.png"
                    alt="Burger and fries"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="absolute z-20 bottom-1/4 left-[20%] transform -translate-x-1/2 translate-y-1/5">
                {/* <div className="absolute z-20 bottom-1/4 left-1/6 transform -translate-x-1/2 translate-y-1/5"> */}
                <div className="relative w-20 h-20 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-40 lg:h-40">
                  <Image
                    src="/Amala.png"
                    alt="African dish"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
