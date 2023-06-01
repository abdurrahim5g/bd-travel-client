import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="NotFound-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="water-wave text-center ">
              <h3>4😎4</h3>
              <h2>You are loss</h2>
              <div className="go-home">
                <Link to={"/"}>Go to homepage</Link>
              </div>

              <div className="waves">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
