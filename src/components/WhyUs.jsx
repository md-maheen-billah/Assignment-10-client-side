import Lottie from "lottie-react";
import { Bounce } from "react-awesome-reveal";
import test from "../assets/whyChoose/1.json";
import test2 from "../assets/whyChoose/2.json";
import test3 from "../assets/whyChoose/3.json";
import test4 from "../assets/whyChoose/4.json";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const WhyUs = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  return (
    <div data-aos="fade-up">
      <div>
        <div className="text-center mt-0">
          <h2 className="text-center text-2xl lg:text-4xl font-bold dark:text-[#f9a06f] text-[#1e1b4b] animate__animated animate__headShake  animate__slow animate__infinite">
            <Bounce> Why Us?</Bounce>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-2 mb-16">
          <div className="  flex justify-center items-center flex-col gap-1 ">
            <Lottie animationData={test} />
            <p className="font-semibold text-lg text-center dark:text-white">
              Unique <br /> Products
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-1 ">
            <Lottie animationData={test2} />
            <p className="font-semibold text-lg text-center dark:text-white">
              Wide Range <br />
              of Collection
            </p>
          </div>
          <div className=" flex justify-center items-center flex-col gap-1 ">
            <Lottie animationData={test3} />
            <p className="font-semibold text-lg text-center dark:text-white">
              Affordable But <br />
              High Quality
            </p>
          </div>
          <div className=" flex justify-center items-center flex-col gap-1 ">
            <Lottie animationData={test4} />
            <p className="font-semibold text-lg text-center dark:text-white">
              Excellent <br />
              Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
