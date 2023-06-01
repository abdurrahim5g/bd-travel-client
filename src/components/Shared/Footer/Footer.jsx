import { Link } from "react-router-dom";
import logo from "../../../assets/images/logos/logo-black.svg";
import payment from "../../../assets/images/payment-method.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="Footer-component">
      <div className="footer footer-center p-10 bg-base-200 ">
        <div>
          <Link className="inline-block">
            <img src={logo} alt="BD Travel" style={{ maxWidth: "250px" }} />
          </Link>
          <p className="text-xl my-6 text-gray-900">
            © Copyright 2023 BD Travel - All right reserved.
          </p>
          <div>
            <p className="text-2xl mb-4">Payment we accept:</p>
            <img src={payment} alt="Payment method" />
          </div>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <Link className="text-3xl text-gray-950 hover:text-primary">
              <FaFacebookF />
            </Link>
            <Link className="text-3xl text-gray-950 hover:text-primary">
              <FaLinkedinIn />
            </Link>
            <Link className="text-3xl text-gray-950 hover:text-primary">
              <FaTwitter />
            </Link>
            <Link className="text-3xl text-gray-950 hover:text-primary">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
