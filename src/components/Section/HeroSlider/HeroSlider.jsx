import "./HeroSlider.css";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleHero from "../../SingleHero/SingleHero";
import { useLoaderData } from "react-router-dom";
import "./HeroSlider.css";

const HeroSlider = () => {
  const places = useLoaderData();
  //   console.log(places);

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <section className="HeroSlider-section">
      <Slider {...settings}>
        {places.map((place) => (
          <SingleHero place={place} key={place.id}></SingleHero>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSlider;
