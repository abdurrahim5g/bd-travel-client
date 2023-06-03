import { Navigate, useLocation } from "react-router-dom";
import { useAuthContex } from "../Context/AuthProvider";
import Loading from "../components/Loading/Loading";

const Protected = ({ children }) => {
  const { user, loading } = useAuthContex();
  const location = useLocation();

  // waiting for authState update
  if (loading) {
    return <Loading></Loading>;
  }

  console.log(!user?.uid);

  // if user not logged in
  if (!user?.uid) {
    return <Navigate to={"/signin"} state={{ from: location }}></Navigate>;
  }
  // if user logged in
  return children;
};

export default Protected;
