import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header/Header";
import Footer from "../components/Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default Main;
