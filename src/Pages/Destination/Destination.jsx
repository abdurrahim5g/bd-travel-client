import DestinationAll from "../../components/Section/DestinationAll/DestinationAll";
import Subscribe from "../../components/Section/Subscribe/Subscribe";
import InnerHero from "../../components/Shared/InnerHero/InnerHero";

const Destination = () => {
  return (
    <div className="Destination-page">
      <InnerHero subHeading="">Destination</InnerHero>
      <DestinationAll></DestinationAll>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Destination;
