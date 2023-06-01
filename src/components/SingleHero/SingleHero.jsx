import { Link } from "react-router-dom";
import bg from "../../assets/images/default-bg.png";
import "./SingleHero.css";

// eslint-disable-next-line react/prop-types
const SingleHero = ({ place }) => {
  // eslint-disable-next-line react/prop-types
  const { name, description, image_url, id } = place;

  return (
    <div
      className="single-hero-component grid place-content-center"
      style={{
        background: `url(${
          image_url ? image_url : bg
        }) no-repeat center / cover`,
      }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-5 place-items-center gap-11">
          <div className="col-span-3 text-white">
            <h2 className="text-8xl font-bold destination-name">{name}</h2>
            {/* <h3 className="text-4xl mt-3 mb-5">District: {area}</h3> */}
            <p className="text-xl mb-8 w-3/4">{description}</p>
            <Link to={`/distination/${id}`} className="hero-btn">
              Visit to {name}
            </Link>
          </div>
          <div className="col-span-2">
            <img
              src={image_url ? image_url : bg}
              alt={name}
              className="rounded-lg shadow-2xl border-8 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleHero;
