import { Link, useLoaderData } from "react-router-dom";
import SingleHero from "../../components/SingleHero/SingleHero";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import "./Booking.css";

const Booking = () => {
  const place = useLoaderData();
  const { name, area, image_url, description, attractions, hotels, rating } =
    place;

  console.log(hotels);

  return (
    <div className="Booking-page">
      <SingleHero place={place} booking={true}></SingleHero>

      <div className="container px-4 py-10 md:py-20">
        <div className="row">
          <div className="grid grid-cols-2 gap-16">
            <div className="col-span-1">
              <SectionHeading
                title={name}
                subtitle={"About"}
                className="destination"
              ></SectionHeading>
              <p className="mb-5">{description}</p>
              <p className="mb-5">
                <strong>Area:</strong> {area}
              </p>
              <p className="mb-5">
                <strong>Attractions:</strong>{" "}
                {attractions?.map((att, index) => (
                  <span key={index}>
                    {att} {attractions.length - 1 > index && " || "}
                  </span>
                ))}
              </p>
              <p className="mb-5 flex items-center gap-2">
                <strong>Reating:</strong> {rating} out of 5
              </p>

              <div className="available-hotels">
                <h2 className="text-3xl heading mt-10 mb-6 text-center">
                  Hotels [{hotels.length}]
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  {hotels.map((hotel, index) => (
                    <div
                      className="card w-full bg-base-100 shadow-xl"
                      key={index}
                    >
                      <figure>
                        <img
                          src={hotel.img}
                          alt="Shoes"
                          className="aspect-video shadow border border-black-600"
                        />
                      </figure>
                      <div className="card-body">
                        <h2
                          className="card-title"
                          style={{ lineHeight: "1.6" }}
                        >
                          {hotel.name}
                        </h2>
                        <p>{hotel.description}</p>
                        <p>
                          <strong>Price:</strong> {hotel.price}
                        </p>
                        <p>
                          <strong>Rating:</strong> {hotel.rating} out of 5
                        </p>
                        <div className="w-full">
                          <Link className="btn btn-primary">
                            Book this hotel
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div
                className="destination-image rounded-2xl overflow-hidden shadow-2xl sticky transition"
                style={{ top: "50px" }}
              >
                <img src={image_url} alt={name} className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
