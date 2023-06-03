import loading from "./loading.gif";
import "./Loading.css";

const Loading = () => {
  return (
    <section className="loading-component">
      <div className="container">
        <div className="row grid place-content-center">
          <div className="col-lg-6 mx-auto text-center">
            <img src={loading} alt="Loading" />
            <h3>Loading...</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
