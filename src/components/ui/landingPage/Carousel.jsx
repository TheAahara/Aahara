import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "./slides.js";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imgRef = useRef(null);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, []);
  // useEffect to trigger animation for the images
  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.classList.toggle("animate-image", false);
      // Force a reflow to make sure the class removal takes effect
      void imgRef.current.offsetWidth;
      // Toggle on the animation class
      imgRef.current.classList.toggle("animate-image", true);
    }
  }, [currentSlide]);

  return (
    <div className="w-full md:h-[calc(100vh-6rem)] bg-white  relative">
      <div className="flex md:h-full animate-fadeRight">
        {/* Left side - Image */}
        <div className="w-1/2 flex items-center justify-end ">
          <div className="w-lg h-lg">
            <img
              ref={imgRef}
              src={slides[currentSlide].image}
              alt="Food delivery"
              className="w-full h-full object-cover   animate-image transition-all duration-500 "
            />
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="w-1/2  flex flex-col justify-center items-start ">
          <div className="mb-32 h-full flex flex-col justify-center items-center">
            <div className="inline-block  rounded-full bg-green-100 text-black text-5xl font-semibold">
              {slides[currentSlide].title}
            </div>
            <div className="mt-4 border-2 border-black w-fit rounded-xl">
              <div className="inline-block p-6 bg-green-800 text-white text-4xl font-bold rounded-lg skew-2 hover:-skew-2 transition-all">
                {slides[currentSlide].subtitle}
              </div>
            </div>
            <div className="mt-4">
              <div className="inline-block rounded-full bg-green-100 text-black text-5xl font-semibold">
                {slides[currentSlide].description}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-2/5 h-32 bg-green-800 rounded-tl-full ">
        {/* Navigation dots */}
        <div className="flex items-center justify-center h-full   ">
          <div className="w-24 flex space-x-2 mr-4">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index
                    ? "bg-green-100 w-8 transition-all duration-700"
                    : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex space-x-2 ">
            <button
              onClick={goToPrevSlide}
              className="w-12 h-12 rounded-full border border-green-800 flex items-center justify-center text-green-800 cursor-pointer"
            >
              <ChevronLeft className="w-10 h-10 border-2 border-gray-200 rounded-full text-gray-200" />
            </button>
            <button
              onClick={goToNextSlide}
              className="w-12 h-12 rounded-full border border-green-800 flex items-center justify-center text-green-800 cursor-pointer"
            >
              <ChevronRight className="w-10 h-10 border-2 border-gray-200 rounded-full text-gray-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Carousel;
