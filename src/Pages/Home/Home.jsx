import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import CraftItemCard from "../../components/CraftItemCard";
import Spinner from "../../components/Spinner.jsx";
import Categories from "../../components/Categories.jsx";
import Marque from "../../components/Marque.jsx";
import { Bounce } from "react-awesome-reveal";
import WhyUs from "../../components/WhyUs.jsx";
import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const limit = 6; // Number of items to show
  const limitedItems = items.slice(0, limit);
  useEffect(() => {
    fetch("https://server-side-eight-eosin.vercel.app/allitems")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Canvas Isle</title>
      </Helmet>
      <div>
        {(loading && <Spinner />) || (
          <div data-aos="fade-up">
            <div className="lg:mt-8 mt-4 lg:pl-6 px-2">
              <Banner></Banner>
            </div>
            <div className="bg-[url('././assets/wave.svg')]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#f9a06f"
                  d="M0,224L40,202.7C80,181,160,139,240,149.3C320,160,400,224,480,229.3C560,235,640,181,720,176C800,171,880,213,960,192C1040,171,1120,85,1200,58.7C1280,32,1360,64,1400,80L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div id="items-s">
              <div className="bg-[#f9a06f]">
                <h2 className="text-center text-2xl lg:text-4xl font-bold text-[#1e1b4b] animate__animated animate__headShake  animate__slow animate__infinite">
                  <Bounce>Craft Items Section</Bounce>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-4 lg:mt-10 px-2 lg:px-6">
                  {limitedItems.map((item) => (
                    <CraftItemCard item={item} key={item._id}></CraftItemCard>
                  ))}
                </div>
                <Link to="allitems">
                  <div className="flex justify-center">
                    <button className="font-bold mt-8  rounded-md px-4 py-2 bg-[#1e1b4b] text-[#f9a06f] relative overflow-hidden group z-0 hover:text-[#1e1b4b] duration-1000">
                      <span className="absolute bg-[#ffede2]  size-80 rounded-full group-hover:scale-150 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                      <span className="absolute bg-[#fac0a1] size-80 -left-2 -top-10 rounded-full group-hover:scale-150 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                      Show All
                    </button>
                  </div>
                </Link>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#f9a06f"
                d="M0,128L34.3,138.7C68.6,149,137,171,206,149.3C274.3,128,343,64,411,42.7C480,21,549,43,617,69.3C685.7,96,754,128,823,128C891.4,128,960,96,1029,112C1097.1,128,1166,192,1234,208C1302.9,224,1371,192,1406,176L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
              ></path>
            </svg>
            <div className=" mb-4">
              <h2 className="text-center text-2xl lg:text-4xl font-bold dark:text-[#f9a06f] text-[#1e1b4b] animate__animated animate__headShake  animate__slow animate__infinite">
                <Bounce> Art & Craft Categories</Bounce>
              </h2>
              <Categories></Categories>
            </div>
            <WhyUs></WhyUs>
            <div className="lg:mt-12 mt-4 px-2 lg:px-2">
              <Marque></Marque>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
