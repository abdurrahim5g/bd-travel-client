import { useLoaderData } from "react-router-dom";
import SingleHero from "../../components/SingleHero/SingleHero";

const Booking = () => {
  const place = useLoaderData();
  const { name, area, image_url, description, attractions, hotels, rating } =
    place;

  console.log(place);

  return (
    <div className="Booking-page">
      <SingleHero place={place} booking={true}></SingleHero>

      <div className="container px-4">
        <div className="row">
          <div className="grid grid-cols"></div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
