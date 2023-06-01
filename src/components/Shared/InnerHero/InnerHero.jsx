import "./InnerHero.css";

// eslint-disable-next-line react/prop-types
const InnerHero = ({ children, img }) => {
  const bg =
    "https://modtel.travelerwp.com/wp-content/uploads/2022/04/banner-search-form-min.png";

  return (
    <section
      className="inner-hero-section"
      style={{
        background: `url(${img ? img : bg}) no-repeat center bottom / cover`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner-hero-content">
              <h2 className="page-title">{children}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerHero;
