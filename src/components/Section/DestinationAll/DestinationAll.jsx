import { useLoaderData } from "react-router-dom";
import SectionHeading from "../../SectionHeading/SectionHeading";
import "./DestinationAll.css";
import CardDestination from "../../CardDestination/CardDestination";

const DestinationAll = () => {
  const destinations = useLoaderData();
  console.log(destinations);
  return (
    <section className="DestinationAll-section py-12 md:py-20 px-4">
      <div className="container">
        <div className="row">
          <SectionHeading
            title="All Destinations"
            subtitle={"Explore"}
          ></SectionHeading>
        </div>

        <div className="row">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {destinations?.map((single) => (
              <CardDestination key={single.id} destination={single} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationAll;
