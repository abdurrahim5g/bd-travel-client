import "./SectionHeading.css";

// eslint-disable-next-line react/prop-types
const SectionHeading = ({ className, title, subtitle }) => {
  return (
    <div className={`section-heading-component ${className ? className : ""}`}>
      <h5 className="sub-title">{subtitle}</h5>
      <h3 className="title">{title}</h3>
    </div>
  );
};

export default SectionHeading;
