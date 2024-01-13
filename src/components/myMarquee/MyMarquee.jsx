import Marquee from "react-fast-marquee";
import img1 from "../../assets/h&m.png";
import img2 from "../../assets/amazon.png";
import img3 from "../../assets/lacoste.png";
import img4 from "../../assets/levis.png";
import img5 from "../../assets/obey.png";
import img6 from "../../assets/shopify.png";

const MyMarquee = () => {
  return (
    <Marquee className="mb-4">
      <div className="flex items-center gap-x-3 md:gap-x-12 lg:gap-x-32">
        <img src={img1} className="w-10 md:w-20 lg:w-32" />
        <img src={img2} className="w-10 md:w-20 lg:w-32" />
        <img src={img3} className="w-10 md:w-20 lg:w-32" />
        <img src={img4} className="w-10 md:w-20 lg:w-32" />
        <img src={img5} className="w-10 md:w-20 lg:w-32" />
        <img src={img6} className="w-10 md:w-20 lg:w-32" />
      </div>
    </Marquee>
  );
};

export default MyMarquee;
