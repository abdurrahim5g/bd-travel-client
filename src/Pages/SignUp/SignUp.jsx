import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../assets/images/google.svg";
import facebook from "../../assets/images/facebook.svg";
import "../../Styles/SignInUp.css";
import { useState } from "react";
import { useAuthContex } from "../../Context/AuthProvider";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const [error, setError] = useState();
  const { providerLogin, createUser, updateUser } = useAuthContex();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // create Account with email & password
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo_url = form.photo_url.value;
    const password = form.password.value;

    if (email && password) {
      createUser(email, password)
        .then(() => {
          setError();
          // console.log(result.user);
          updateUser({ displayName: name, photoURL: photo_url });
          navigate(from, { replace: true });
        })
        .catch((err) => {
          setError(err.code);
          toast.error(err.code);
        });
    } else {
      setError("Something is wrong. Please try Again");
      toast.error("Something is wrong. Please try Again");
    }
    console.log(email, password, name, photo_url);
  };

  // login with Provider logins
  const handleProviderLogin = (provider) => {
    providerLogin(provider)
      .then((result) => {
        console.log(result.user);
        toast.success("Sign in successfully");
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.code));
  };

  return (
    <div className="SignIn-page">
      <div className="login-reg-container">
        <div className="form-content">
          <div className="form">
            <form action="#" onSubmit={handleSubmit}>
              <div className="border rounded p-8">
                <h3 className="heading text-2xl">Create an account</h3>
                <div className="single-input">
                  <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>

                <div className="single-input">
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>

                <div className="single-input">
                  <input
                    required
                    type="url"
                    name="photo_url"
                    id="photo_url"
                    placeholder="Your profile image url"
                  />
                </div>

                <div className="single-input">
                  <input
                    required
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>

                <div className="error-message text-center mt-6">
                  {error && <p className="text-red-400">{error}</p>}
                </div>

                <div className="submit-button">
                  <button>Create an account</button>
                </div>

                <div className="notice">
                  <p>
                    Already have an account? <Link to="/signin">Login</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
          {/* form end */}

          <div className="others-login-options">
            <div className="divider">
              <span className="line"></span>
              <span className="or">or</span>
              <span className="line"></span>
            </div>

            <div className="provider-logins">
              <button onClick={() => handleProviderLogin(facebookProvider)}>
                <img src={facebook} alt="Facebook" /> Continue with Facebook
              </button>
              <button onClick={() => handleProviderLogin(googleProvider)}>
                <img src={google} alt="Google" /> Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
