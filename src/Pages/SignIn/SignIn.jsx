import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../assets/images/google.svg";
import facebook from "../../assets/images/facebook.svg";
import "../../Styles/SignInUp.css";
import { useState } from "react";
import { useAuthContex } from "../../Context/AuthProvider";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-hot-toast";

const SignIn = () => {
  const [error, setError] = useState(true);

  const { providerLogin } = useAuthContex();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // create user with emain & password
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
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
                <h3 className="heading text-2xl">Login</h3>
                <div className="single-input">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>

                <div className="single-input">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>

                <div className="reminder-forgot flex justify-between">
                  <div className="memember">
                    <input type="checkbox" name="remember" id="remember" />{" "}
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                  <Link to="reset-password">Forgot Password</Link>
                </div>

                <div className="error-message text-center mt-6">
                  {error && <p className="text-red-400">{error}</p>}
                </div>

                <div className="submit-button">
                  <button>Login</button>
                </div>

                <div className="notice">
                  <p>
                    Do not have an account?{" "}
                    <Link to="/signup">Create an account</Link>
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

export default SignIn;
