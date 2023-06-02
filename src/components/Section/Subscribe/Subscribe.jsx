import "./Subscribe.css";
import bgImage from "../../../assets/images/default-bg.png";
import { toast } from "react-hot-toast";
import SectionHeading from "../../SectionHeading/SectionHeading";

const Subscribe = () => {
  const handleSubscribe = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    if (email) {
      toast.success(`Thank ${email} for subscribe our newsletter`);
      form.reset();
    }
  };

  return (
    <section className="subscribe-section py-10 px-4 md:py-20 bgColor">
      <div className="container">
        <div className="row">
          <SectionHeading
            title="Subscribe now"
            subtitle={"get offer"}
          ></SectionHeading>
        </div>

        <div className="row">
          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border-gray-300 border">
            <div className="image-area">
              <img
                src={bgImage}
                alt="Beautiful view"
                className="h-full object-cover"
              />
            </div>

            <div className="text-content bg-white grid place-content-center">
              <div className="content w-3/4 mx-auto text-center py-10">
                <h3 className="text-4xl heading">
                  Get special offers, and more from Traveler
                </h3>
                <p className="text-2xl mt-5 mb-8">
                  Subscribe to see secret deals prices drop the moment you sign
                  up!
                </p>
                <form
                  action="#"
                  className="grid gap-5 grid-cols-3"
                  onSubmit={handleSubscribe}
                >
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    className="input input-bordered input-info  col-span-2 w-full"
                  />
                  <button className="btn btn-primary">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
