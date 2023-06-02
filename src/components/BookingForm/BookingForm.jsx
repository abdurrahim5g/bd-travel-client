import { Link } from "react-router-dom";
import "./BookingForm.css";

const BookingForm = () => {
  return (
    <div className="booking-area bg-white rounded-lg shadow-2xl p-6 w-full">
      <form action="#">
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-xl">Origin</span>
          </label>
          <input
            type="text"
            placeholder="Your location"
            className="input input-bordered w-full "
          />
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-xl">Destination</span>
          </label>
          <input
            type="text"
            placeholder="Your Destination"
            className="input input-bordered w-full "
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-xl">From</span>
            </label>
            <input
              type="date"
              placeholder="Your Destination"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-xl">To</span>
            </label>
            <input
              type="date"
              placeholder="Your Destination"
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="w-full mt-6"></div>
        <Link to={`/distination/`} className="hero-btn w-full text-center">
          Start Booking
        </Link>
      </form>
    </div>
  );
};

export default BookingForm;
