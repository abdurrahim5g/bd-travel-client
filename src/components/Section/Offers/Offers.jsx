import { Link } from "react-router-dom";
import offer50 from "../../../assets/images/offers/50.png";
import offer20 from "../../../assets/images/offers/20.png";
import SectionHeading from "../../SectionHeading/SectionHeading";

const Offers = () => {
  return (
    <section className="offers-section py-10 bgColor md:py-16">
      <div className="container">
        <div className="row">
          <SectionHeading
            subtitle={"Explore BD"}
            title={"with Our Offers"}
          ></SectionHeading>
        </div>

        <div className="grid  grid-cols-1 px-6 gap-8 md:grid-cols-2 ">
          <div className="single-offer">
            <Link>
              <img src={offer50} alt="Offer image" />
            </Link>
          </div>
          <div className="single-offer">
            <Link>
              <img src={offer20} alt="Offer image" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
