import  { useState } from 'react';

const TrackingSection = () => {
  const [trackingNumber, setTrackingNumber] = useState('');

  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat h-[70vh] flex items-center justify-center"
      style={{
        backgroundImage: "url('/src/assets/images/images.jpg')",
      }}
    >
      {/* Dark blur overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 mb-4">Fast & Reliable</h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">Logistics Solution</h1>

        <div className="flex  sm:flex-row items-center justify-center gap-2 w-full">
          <input
            type="text"
            placeholder="Input tracking number"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="w-full sm:w-3/4 h-12  px-5 text-sm focus:outline-none"

            style={{
              borderTopLeftRadius: "25px",
              borderBottomLeftRadius: "25px", 
            }}
          />
          <button
            type="submit"
            className="h-12 px-6 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-all duration-300 flex items-center gap-2 mt-0 sm:mt-0"
            
            style={{ borderTopLeftRadius: "25px",
              borderBottomLeftRadius: "25px",}}
            >
            <i className="fas fa-search"></i>
            <span>Track</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackingSection;
