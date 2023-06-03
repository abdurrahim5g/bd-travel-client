import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Booking from "../Pages/Booking/Booking";
import HotelBooking from "../Pages/HotalBooking/HotelBooking";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import NotFound from "../Pages/NotFound/NotFound";
import Destination from "../Pages/Destination/Destination";
import Contact from "../Pages/Contact/Contact";
import Blogs from "../Pages/Blogs/Blogs";
import Protected from "./Protected";
import BookingConfirm from "../Pages/BookingConfirm/BookingConfirm";

const loadPlaces = () =>
  fetch("https://bd-travel-server-f-rahim.vercel.app/places/");

const loadSinglePlace = (id) => {
  return fetch(`https://bd-travel-server-f-rahim.vercel.app/place/${id}`);
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: loadPlaces,
      },
      {
        path: "/booking",
        element: <Booking></Booking>,
      },
      {
        path: "/booking/:id",
        element: <Booking></Booking>,
        loader: ({ params }) => loadSinglePlace(params.id),
      },
      {
        path: "/booking/confirm",
        element: (
          <Protected>
            <BookingConfirm></BookingConfirm>
          </Protected>
        ),
      },
      {
        path: "/destination",
        element: <Destination></Destination>,
        loader: loadPlaces,
      },
      {
        path: "/destination/:id",
        element: <Destination></Destination>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/hotel-booking",
        element: <HotelBooking></HotelBooking>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
