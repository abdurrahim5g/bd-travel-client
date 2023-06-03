import { toast } from "react-hot-toast";
import "./BookingForm.css";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ destination, id }) => {
  const navigate = useNavigate();

  // handleBooking
  const handleBooking = (event) => {
    event.preventDefault();

    const form = event.target;
    const origin = form.origin.value;
    const destination = form.destination.value;
    const from = form.fromDate.value;
    const to = form.toDate.value;

    if (origin && destination && from && to) {
      const bookingDetails = {
        origin,
        destination,
        from,
        to,
        id,
      };
      localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
      navigate("/booking/confirm");
    } else {
      toast.error(
        "Please provide all information & then hit the Start booking"
      );
    }
    console.log(origin, destination, from, to);
  };

  return (
    <div className="booking-area bg-white rounded-lg shadow-2xl p-6 w-full">
      <form action="#" onSubmit={handleBooking}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-lg font-semibold">Origin</span>
          </label>
          <input
            name="origin"
            type="text"
            placeholder="Your location"
            className="input input-bordered w-full "
          />
        </div>

        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text text-lg font-semibold">
              Destination
            </span>
          </label>
          <input
            name="destination"
            type="text"
            placeholder="Your Destination"
            value={destination && destination}
            readOnly
            className="input input-bordered w-full "
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-lg font-semibold">From</span>
            </label>
            <input
              name="fromDate"
              type="date"
              placeholder="Your Destination"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-lg font-semibold">To</span>
            </label>
            <input
              name="toDate"
              type="date"
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="w-full mt-6"></div>
        <button to={`/distination/`} className="hero-btn w-full text-center">
          Start Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
