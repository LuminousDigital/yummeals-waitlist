const ThankYouModal = ({ onBackHome }: { onBackHome: () => void }) => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center ">
    <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-sm sm:max-w-xl w-[90%] mx-auto sm:w-full mx-4 flex flex-col items-center animate-fade-in">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      
      <h2 className="text-2xl sm:text-3xl font-bold mt-2 sm:mt-4 mb-3 sm:mb-4 text-center text-gray-800">
        Thank You!!
      </h2>
      
      <p className="text-gray-600 text-sm sm:text-base text-center mb-6 sm:mb-8 leading-relaxed px-2">
        Thank you for signing up for our waitlist! We&apos;re thrilled that you&apos;re interested in Yummeals. 
        Your spot is secured, and we&apos;ll be sure to keep you updated with the latest news and availability.
      </p>
      
      <button
        onClick={onBackHome}
        className="bg-[#64961A]  text-white font-semibold py-3 px-6 sm:px-8 rounded cursor-pointer"
      >
        Ok
      </button>
    </div>
  </div>
);

export default ThankYouModal;
