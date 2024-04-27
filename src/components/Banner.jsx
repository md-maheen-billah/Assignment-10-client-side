import heroImg1 from "../assets/Hero/canvas1.png";
import heroImg2 from "../assets/Hero/canvas2.png";
import heroImg3 from "../assets/Hero/canvas3.png";
import { AiFillFire } from "react-icons/ai";

import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <div className="gadgetContainer">
      <Swiper
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        {/* slide 1 */}
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row justify-between items-center lg:h-[400px]">
            <div className="flex flex-col justify-center">
              <div className="font-semibold flex items-center justify-center lg:justify-start text-[#f9a06f] mb-3 text-center md:text-left">
                <div className="bg-[#f9a06f] text-white mr-2 text-xl px-1 py-1 rounded-full">
                  <AiFillFire />
                </div>
                Hot Products
              </div>

              <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                Embark on an Amazing Journey <br /> Through Artistry
              </p>
              <p className="font-medium text-black/60 dark:text-white md:text-lg text-center md:text-left">
                Stay inspired with the latest trends and innovations in
                painting.
              </p>
              <div className="flex justify-center md:justify-start">
                <a href="#items-s">
                  <button className="font-bold mt-6 rounded-md px-4 py-2 bg-[#f9a06f] text-[#1e1b4b] relative overflow-hidden group z-10 hover:text-[#1e1b4b] duration-1000">
                    <span className="absolute bg-[#ffede2]  size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                    <span className="absolute bg-[#fac0a1] size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                    Explore Now
                  </button>
                </a>
              </div>
            </div>

            {/* left */}
            <div className="">
              <img className="" src={heroImg1} alt="" />
            </div>
          </div>
        </SwiperSlide>
        {/* slide 2 */}
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row justify-between items-center lg:h-[400px]">
            <div className="flex flex-col justify-center">
              <div className="font-semibold flex items-center justify-center lg:justify-start text-[#f9a06f] mb-3 text-center md:text-left">
                <div className="bg-[#f9a06f] text-white mr-2 text-xl px-1 py-1 rounded-full">
                  <AiFillFire />
                </div>
                Hot Products
              </div>

              <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                Your premier destination for <br /> exquisite artwork
              </p>
              <p className="font-medium text-black/60 dark:text-white md:text-lg text-center md:text-left">
                Discover a diverse range of captivating paintings crafted by
                talented artists.
              </p>
              <div className="flex justify-center md:justify-start">
                <a href="#items-s">
                  <button className="font-bold mt-6 rounded-md px-4 py-2 bg-[#f9a06f] text-[#1e1b4b] relative overflow-hidden group z-10 hover:text-[#1e1b4b] duration-1000">
                    <span className="absolute bg-[#ffede2]  size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                    <span className="absolute bg-[#fac0a1] size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                    Explore Now
                  </button>
                </a>
              </div>
            </div>

            {/* left */}
            <div className="">
              <img className="" src={heroImg2} alt="" />
            </div>
          </div>
        </SwiperSlide>
        {/* slide 3 */}
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row justify-between items-center lg:h-[400px]">
            <div className="flex flex-col justify-center">
              <div className="font-semibold flex items-center justify-center lg:justify-start text-[#f9a06f] mb-3 text-center md:text-left">
                <div className="bg-[#f9a06f] text-white mr-2 text-xl px-1 py-1 rounded-full">
                  <AiFillFire />
                </div>
                Hot Products
              </div>

              <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                Discover the Wonders of Artistry <br /> at Canvas Isle
              </p>
              <p className="font-medium text-black/60 dark:text-white md:text-lg text-center md:text-left">
                Stay ahead with the latest tech trends and innovations.
              </p>
              <div className="flex justify-center lg:justify-start">
                <a href="#items-s">
                  <button className="font-bold mt-6 rounded-md px-4 py-2 bg-[#f9a06f] text-[#1e1b4b] relative overflow-hidden group z-10 hover:text-[#1e1b4b] duration-1000">
                    <span className="absolute bg-[#ffede2]  size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                    <span className="absolute bg-[#fac0a1] size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                    Explore Now
                  </button>
                </a>
              </div>
            </div>

            {/* left */}
            <div className="">
              <img className="" src={heroImg3} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
