import "./BookingConfirm.css";
import InnerHero from "../../components/Shared/InnerHero/InnerHero";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { Link } from "react-router-dom";

const BookingConfirm = () => {
  const bookingInfo = JSON.parse(localStorage.getItem("bookingDetails"));
  const { origin, destination, from, to, id } = bookingInfo;

  return (
    <div className="BookingConfirm-page">
      <InnerHero subHeading=" ">Booking Confirm</InnerHero>
      <section className="booking-informations bgColor py-10 md:py-20">
        <div className="container">
          <div className="row">
            <SectionHeading
              subtitle={"Your"}
              title={"Booking Information"}
            ></SectionHeading>
          </div>

          <div className="row">
            <div className="w-full md:w-2/4 mx-auto">
              <div className="grid gap-3">
                <p>
                  <strong>Origin:</strong> {origin}
                </p>
                <p>
                  <strong>Destination:</strong> {destination}
                </p>
                <p>
                  <strong>From Date:</strong> {from}
                </p>
                <p>
                  <strong>To Date:</strong> {to}
                </p>

                <p>
                  <Link
                    to={`/booking/${id}`}
                    className=""
                    style={{ color: "var(--primaryColor)" }}
                  >
                    Learn more about {destination}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingConfirm;
