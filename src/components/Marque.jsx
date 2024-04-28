import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Marque = () => {
  return (
    <div className="flex gap-6 p-2 lg:p-4 bg-[#f9a06f] mt-4 lg:mt-10 animate__animated animate__fadeInDownBig">
      <button className=" font-bold hover:duration-300 hover:cursor-pointer hover:text-[#1e1b4b] hover:bg-[#fac0a1] bg-[#1e1b4b] text-[#f9a06f] px-3 lg:px-6 py-2 lg:py-3">
        Latest
      </button>
      <Marquee>
        <Link className="mr-10 text-[#1e1b4b]" to="/">
          Art Renaissance: Exploring the Surge in Online Art Purchases Amidst
          Global Uncertainty
        </Link>
        <Link className="mr-10 text-[#1e1b4b]" to="/">
          From Canvas to Clicks: The Growing Trend of Digital Art Collections in
          Online Galleries
        </Link>
        <Link className="mr-10 text-[#1e1b4b]" to="/">
          Brushing Up on Beauty: How Virtual Art Exhibitions are Redefining the
          Way We Experience Fine Art
        </Link>
      </Marquee>
    </div>
  );
};

export default Marque;
