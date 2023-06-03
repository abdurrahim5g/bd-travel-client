import { toast } from "react-hot-toast";
import InnerHero from "../../components/Shared/InnerHero/InnerHero";
import Subscribe from "../../components/Section/Subscribe/Subscribe";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const comment = form.comment.value;

    if (name && email && subject && comment) {
      toast.success(`${name} our team we will connect you shortly.`);
      form.reset();
    } else {
      toast.error("All field are require!");
    }
  };

  return (
    <div className="Contact-page ">
      <InnerHero
        subHeading={
          "Contact Inspiration brings you stories that celebrate the power of human interaction. From heartwarming encounters to life-changing collaborations, we explore the diverse ways in which people come together and create meaningful connections."
        }
      >
        Contact
      </InnerHero>

      <div className="login-reg-container px-4">
        <div className="form-content">
          <div className="form">
            <form action="#" onSubmit={handleSubmit}>
              <div className="border rounded p-4 md:p-8">
                <h3 className="heading text-2xl">Contact us</h3>
                <div className="single-input">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                  />
                </div>

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
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>

                <div className="single-input">
                  <textarea
                    placeholder="Comment"
                    name="comment"
                    id="comment"
                    cols="30"
                    rows="4"
                    style={{
                      border: "none",
                      borderBottom: "1px solid #ccc",
                      width: "100%",
                      outline: "none",
                    }}
                  ></textarea>
                </div>

                <div className="submit-button">
                  <button className="mb-0" style={{ marginBottom: "0px" }}>
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* form end */}
        </div>
      </div>

      <Subscribe></Subscribe>
    </div>
  );
};

export default Contact;
