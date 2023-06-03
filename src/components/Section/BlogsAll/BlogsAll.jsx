import { useLoaderData } from "react-router-dom";
import SectionHeading from "../../SectionHeading/SectionHeading";
import SingleBlog from "../../SingleBlog/SingleBlog";

const BlogsAll = () => {
  const blogs = useLoaderData();
  console.log(blogs);

  return (
    <section className="BlogsAll-secton py-10 md:py-20 bgColor">
      <div className="container">
        <div className="row">
          <SectionHeading
            subtitle={"Explore"}
            title={"Latest Blogs"}
          ></SectionHeading>
        </div>

        <div className="row px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs?.map((blog) => (
              <SingleBlog key={blog.id} blog={blog}></SingleBlog>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsAll;
