import DestinationSlider from "../../components/Section/DestinationSlider/DestinationSlider";
import HeroSlider from "../../components/Section/HeroSlider/HeroSlider";
import Offers from "../../components/Section/Offers/Offers";

const Home = () => {
  return (
    <div className="Home-page">
      <HeroSlider></HeroSlider>
      <Offers></Offers>
      <DestinationSlider></DestinationSlider>
    </div>
  );
};

export default Home;
