import { Link } from "react-router-dom";
import "./CardDestination.css";
import { FaStar } from "react-icons/fa";

const CardDestination = ({ destination }) => {
  const { id, image_url, rating, name, area, description } = destination;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure style={{ height: "220px" }}>
        <img
          src={image_url}
          alt="Shoes"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          <strong>Area: </strong>
          {area}
        </p>
        <p className="description">{description.slice(0, 70)}...</p>
        <div className="rating ">
          <strong className="mr-3">Reating: </strong>
          <div className="flex items-center text-yellow-400 gap-1">
            <FaStar /> <span> {rating}</span>
          </div>
        </div>
        <Link className="btn btn-primary" to={`/booking/${id}`}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default CardDestination;

// {
//     "id": 1,
//     "name": "Cox's Bazar",
//     "area": "Cox's Bazar District",
//     "description": "Cox's Bazar is the world's longest uninterrupted natural sandy beach, stretching over 120 kilometers. It is a popular tourist destination known for its breathtaking sunset views and serene atmosphere.",
//     "attractions": [
//         "Cox's Bazar Beach",
//         "Himchori Waterfall",
//         "Inani Beach",
//         "Moheshkhali Island",
//         "Sonadia Island"
//     ],
//     "image_url": "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blog1arb4VjtxhzvyUzrt9bZzuI-hlEst52F.jpg",
//     "hotels": [
//         {
//             "name": "Royal Tulip Sea Pearl Beach Resort & Spa",
//             "description": "A luxurious beachfront resort offering spacious rooms, a spa, multiple dining options, and a pool overlooking the Bay of Bengal.",
//             "rating": 4.5,
//             "price": "$$",
//             "img": "https://seapearlcoxsbazar.com/images/contact-0.jpg"
//         }
//     ],
//     "rating": 4.5
// }
