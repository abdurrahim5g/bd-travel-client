import BlogsAll from "../../components/Section/BlogsAll/BlogsAll";
import InnerHero from "../../components/Shared/InnerHero/InnerHero";

const Blogs = () => {
  return (
    <div className="Blogs-page">
      <InnerHero
        subHeading={"Explore BD Travel Blogs for feel better in ture."}
      >
        Blogs
      </InnerHero>

      <BlogsAll></BlogsAll>
    </div>
  );
};

export default Blogs;
