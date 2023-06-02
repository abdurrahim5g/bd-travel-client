import DestinationSlider from "../../components/Section/DestinationSlider/DestinationSlider";
import HeroSlider from "../../components/Section/HeroSlider/HeroSlider";
import Offers from "../../components/Section/Offers/Offers";
import Subscribe from "../../components/Section/Subscribe/Subscribe";

const Home = () => {
  return (
    <div className="Home-page">
      <HeroSlider></HeroSlider>
      <Offers></Offers>
      <DestinationSlider></DestinationSlider>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
