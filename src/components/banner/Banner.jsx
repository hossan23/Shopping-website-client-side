import img1 from "../../assets/banner.png";
import img2 from "../../assets/bg-right.png";
const Banner = () => {
  return (
    <div className='hero min-h-screen rounded-3xl' style={{ backgroundImage: `url(${img1})`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }}>
      <div className='hero-content flex-col lg:flex-row-reverse w-full'>
        <img src={img2} className='w-full rounded-full ' />
        <div className='w-full'>
          <h1 className='text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-black text-center md:text-start'>
            LET’S <br />
            EXPLORE
            <br /> <span className='bg-yellow-200 transform -rotate-3 inline-block'>UNIQUE</span>
            <br /> CLOTHES.
          </h1>
          <p className='py-6 text-3xl hidden md:block'>Live for Influential and Innovative fashion!</p>
          <div className='text-center md:text-start my-4'>
            <button className='btn bg-black text-white text-2xl'>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
