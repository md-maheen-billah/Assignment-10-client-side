import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Bounce } from "react-awesome-reveal";

const Marque = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  return (
    <div data-aos="fade-up" className="mt-4 lg:mt-10">
      <h2 className="text-center text-2xl lg:mb-6 lg:text-4xl font-bold dark:text-[#f9a06f] text-[#1e1b4b] animate__animated animate__headShake  animate__slow animate__infinite">
        <Bounce> Users Feedback</Bounce>
      </h2>
      <Marquee>
        <Link className="mr-2 text-[#1e1b4b]" to="/">
          <div className="p-4 w-96 ">
            <div className="h-full bg-[#f9a06f] p-8 shadow-lg rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-white mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">
                From browsing the extensive collection to receiving my carefully
                packaged painting, every step of the process was seamless.
              </p>
              <div className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="https://i.ibb.co/8s0DTwv/girl1.jpg"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900 dark:text-white">
                    Jean Davien
                  </span>
                  <span className="text-white text-sm dark:text-gray-200">
                    Artist
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Link>
        <Link className="mr-2 text-[#1e1b4b]" to="/">
          <div className="p-4 w-96 ">
            <div className="h-full bg-[#f9a06f] p-8 shadow-lg rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-white mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">
                I was hesitant to purchase art online, fearing it would not live
                up to its portrayal. However, the masterpiece left me
                speechless.
              </p>
              <div className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="https://i.ibb.co/L9911wm/girl2.jpg"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900 dark:text-white">
                    Feona Alexander
                  </span>
                  <span className="text-white text-sm dark:text-gray-200">
                    Cook
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Link>
        <Link className="mr-2 text-[#1e1b4b]" to="/">
          <div className="p-4 w-96 ">
            <div className="h-full bg-[#f9a06f] p-8 shadow-lg rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-white mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">
                As an art enthusiast, I have collected paintings from various
                sources, but none compare to the stunning pieces I found here.
                Best craftsmanship.
              </p>
              <div className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="https://i.ibb.co/ZTTnj6T/boy1.jpg"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900 dark:text-white">
                    Robert Kean
                  </span>
                  <span className="text-white text-sm dark:text-gray-200">
                    Lecturer
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Link>
        <Link className="mr-2 text-[#1e1b4b]" to="/">
          <div className="p-4 w-96 ">
            <div className="h-full bg-[#f9a06f] p-8 shadow-lg rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-white mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">
                The exquisite painting I bought from this website exceeded all
                my expectations! Each brushstroke tells a story, captivated
                every time I admire it.
              </p>
              <div className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="https://i.ibb.co/9gHT10t/girl3.jpg"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900 dark:text-white">
                    Halsey Lavender
                  </span>
                  <span className="text-white text-sm dark:text-gray-200">
                    Comic Artist
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Link>
      </Marquee>
    </div>
  );
};

export default Marque;
