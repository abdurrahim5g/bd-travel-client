import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import { toast } from "react-hot-toast";

const AuthContex = createContext();
// eslint-disable-next-line react-refresh/only-export-components, react-hooks/rules-of-hooks
export const useAuthContex = () => useContext(AuthContex);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  // signIn with email & password
  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // providerLogin
  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  // create user with email & password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user photo & displayName
  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, { ...userInfo });
  };

  // user signOut/logOut
  const userLogOut = () => {
    return signOut(auth)
      .then(() => toast.success("Sign Out successfully"))
      .catch((err) => toast.error(err.code));
  };

  useEffect(() => {
    // cleanup function
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(currentUser);
    });

    return unSubscribe;
  }, [auth]);

  const authInfo = {
    user,
    loading,
    auth,
    userSignIn,
    providerLogin,
    createUser,
    updateUser,
    userLogOut,
  };
  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
