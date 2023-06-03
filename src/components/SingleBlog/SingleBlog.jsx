import { Link, useLoaderData } from "react-router-dom";
import InnerHero from "../Shared/InnerHero/InnerHero";

const SingleBlog = ({ blog, single = false }) => {
  const loadBlog = useLoaderData();
  console.log(loadBlog);

  return (
    <>
      {!single ? (
        <div className="card w-full bg-base-100 shadow-xl" key={blog?.id}>
          <figure style={{ height: "280px" }}>
            <img
              src={blog?.image}
              alt={blog?.title}
              className="object-cover h-full w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{blog?.title}</h2>
            {!single ? (
              <p>{blog?.desc.slice(0, 130)}...</p>
            ) : (
              <p>{blog?.desc}</p>
            )}
            <div className="card-actions justify-start">
              <Link to={`${blog?.id}`} className="btn btn-primary mt-8">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <InnerHero subHeading={loadBlog.tips} img={loadBlog.image}>
            {loadBlog.title}
          </InnerHero>
          <div className="container w-full mx-auto md:w-2/4 py-14 md:py-20 px-4">
            <div
              className="card w-full bg-base-100 shadow-xl"
              key={loadBlog.id}
            >
              <figure>
                <img
                  src={loadBlog.image}
                  alt={loadBlog.title}
                  className="object-cover h-full w-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{loadBlog.title}</h2>
                <p className="mt-6 mb-10">{loadBlog.desc}</p>
                <p>
                  <strong>Tips: </strong>
                  {loadBlog.tips}
                </p>

                <div className="text-center mt-10">
                  <Link to={"/blogs"} className="btn btn-warning">
                    Go to Blogs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SingleBlog;
