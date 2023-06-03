import "./DestinationSlider.css";
import SectionHeading from "../../SectionHeading/SectionHeading";
import Slider from "react-slick";
import { Link, useLoaderData } from "react-router-dom";

const DestinationSlider = () => {
  const places = useLoaderData();
  console.log(places);
  const sittings = {
    arrows: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="DestinationSlider-section py-10 md:py-20">
      <div className="container">
        <SectionHeading
          subtitle="Explore"
          title={"Top Destination "}
        ></SectionHeading>

        <div className="row px-8">
          <Slider {...sittings} className="destinationSlider">
            {places?.map((place) => (
              <div
                className="single-distination text-center px-6"
                key={place.id}
              >
                <div className="img-box shadow-lg">
                  <Link to={`/booking/${place.id}`}>
                    <img src={place.image_url} alt="" />
                  </Link>
                </div>
                <Link
                  to={`/booking/${place.id}`}
                  className="block text-xl heading mt-3 mb-1"
                >
                  {place.name}
                </Link>
                <Link className="block text-sm">
                  {place?.hotels?.length} Hotels
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default DestinationSlider;
