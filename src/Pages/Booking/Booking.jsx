import { useLoaderData } from "react-router-dom";

const Booking = () => {
  const place = useLoaderData();
  console.log(place);

  return <div className="Booking-page">Booking</div>;
};

export default Booking;
