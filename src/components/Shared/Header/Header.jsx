import { Link } from "react-router-dom";
import logo from "../../../assets/images/logos/logo-black.svg";
import MainNav from "../../Nav/MainNav";
import { useAuthContex } from "../../../Context/AuthProvider";
import { useState } from "react";

const Header = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, userLogOut } = useAuthContex();
  return (
    <div className="Header-component">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <MainNav></MainNav>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl inline-block">
            <img src={logo} alt="BD Travel" style={{ maxWidth: "220px" }} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            <MainNav></MainNav>
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="flex gap-3">
            {!user?.uid ? (
              <li>
                <Link to="/signin" className="btn btn-primary">
                  Login
                </Link>
              </li>
            ) : (
              <li className="user-informations relative">
                <div className="user-img">
                  <button
                    className=" flex items-center"
                    onClick={() => setShowLogout(!showLogout)}
                  >
                    <img
                      src={user?.photoURL}
                      alt={user?.displayName}
                      className="w-10 rounded-full aspect-square object-cover mr-3"
                    />
                    <h3>{user?.displayName}</h3>
                  </button>
                </div>
                {showLogout && (
                  <button
                    className="btn btn- btn-warning absolute z-10 right-0 top-14 w-28"
                    onClick={() => userLogOut()}
                  >
                    Log Out
                  </button>
                )}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
