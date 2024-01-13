import TitleComponent from "../../components/TitleComponent";
import Banner from "../../components/banner/Banner";
import MyMarquee from "../../components/myMarquee/MyMarquee";

const Home = () => {
  return (
    <>
      <Banner />
      <MyMarquee />
      <TitleComponent title="NEW ARRIVALS" />
    </>
  );
};

export default Home;
