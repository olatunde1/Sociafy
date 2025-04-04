import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaRegComment } from 'react-icons/fa';
import OurClient from '../assets/images/Testimonial-background.png'
import Jerome from '../assets/images/Jerome Bell.png'
import Jenny from '../assets/images/Jenny Wilson.png'
import Cameron from '../assets/images/Cameron Williamson.png'



export default function CardSwiper() {
  return (
    <div style={{ backgroundImage: `url(${OurClient})` }} className=" mx-auto p-4 bg-cover bg-no-repeat bg-center h-auto md:h-[610px] w-full  ">
        
     <div className="max-w-[1200px] w-full px-4 mx-auto ">
     <h1 className='font-extrabold text-4xl leading-12 mt-20 text-gray-100'>Our clients speak</h1>
     <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide>

            <div className="relative w-fit mx-auto mt-12 ">
            {/* Comment Bubble */}
                <div className="bg-white p-6 rounded-3xl shadow-md text-center flex flex-col relative z-10">
                    <h3 className="text-xl font-bold text-[#622BB9] mb-3">Incredible Experience.</h3>
                    <p className="text-gray-600 mb-4">
                    "This platform has simplified our processes and boosted productivity. It’s a must-have for any business looking to grow."
                    </p>
                </div>

                {/* Speech Bubble Tail (V shape) */}
                <div className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-0 h-0 
                                border-l-[12px] border-l-transparent 
                                border-r-[12px] border-r-transparent 
                                border-t-[12px] border-t-white">
                </div>
            </div>
            

          {/* Image + Name + Comment Icon */}
          <div className="mt-auto pt-4 border-none">
              <div className="flex items-center justify-center relative">
                <div className="flex items-center">
                  <img 
                    src={Jerome} 
                    alt="User" 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <span className="font-medium text-gray-100">Jerome Bell</span>
                </div>
              </div>
            </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>

            <div className="relative w-fit mx-auto mt-12">
            {/* Comment Bubble */}
                <div className="bg-white p-6 rounded-3xl shadow-md text-center flex flex-col relative z-10">
                    <h3 className="text-xl font-bold text-[#622BB9] mb-3">A game changer.</h3>
                    <p className="text-gray-600 mb-4">
                    "The ease of use and flexibility have made a huge difference. We’re able to manage everything from one place effortlessly."
                    </p>
                </div>

                {/* Speech Bubble Tail (V shape) */}
                <div className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-0 h-0 
                                border-l-[12px] border-l-transparent 
                                border-r-[12px] border-r-transparent 
                                border-t-[12px] border-t-white">
                </div>
            </div>
            
        
          <div className="mt-auto pt-4 border-none">
              <div className="flex items-center justify-center relative">
                <div className="flex items-center">
                  <img 
                    src={Cameron} 
                    alt="User" 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <span className="font-medium text-gray-100">Cameron Williamson</span>
                </div>
              </div>
            </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
             <div className="relative w-fit mx-auto mt-12">
            {/* Comment Bubble */}
                <div className="bg-white p-6 rounded-3xl shadow-md text-center flex flex-col relative z-10">
                    <h3 className="text-xl font-bold text-[#622BB9] mb-3">Affordable and efficient.</h3>
                    <p className="text-gray-600 mb-4">
                    "We were able to get everything we needed at an affordable price. The value this platform provides is unmatched."
                    </p>
                </div>

                {/* Speech Bubble Tail (V shape) */}
                <div className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-0 h-0 
                                border-l-[12px] border-l-transparent 
                                border-r-[12px] border-r-transparent 
                                border-t-[12px] border-t-white">
                </div>
            </div>

          <div className="mt-auto pt-4 border-none">
              <div className="flex items-center justify-center relative">
                <div className="flex items-center">
                  <img 
                    src={Jenny}
                    alt="User" 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <span className="font-medium text-gray-100">Jenny Wilson</span>
                </div>
              </div>
            </div>
        </SwiperSlide>
      </Swiper>
     </div>
    </div>
  );
}