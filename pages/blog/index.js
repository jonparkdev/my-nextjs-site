import matter from 'gray-matter'

import BlogList from "../../components/BlogComponents/BlogList";

const Index = (props) => {
  console.log(props.allBlogs)
  return (
      <section className="container blog">
        <h1 className="list-header"> Posts </h1>
        <BlogList allBlogs={props.allBlogs}/>
        <style jsx>
        {`
            .list-header {
                margin: 48px auto 32px auto;
                max-width: 900px;
            }
            @media(min-width: 768px){
                .list-header {
                }
            }
        `}
        </style>
      </section>
  );
};

export default Index;

Index.getInitialProps = async function() {
   //get posts & context from folder
   const posts = (context => {

    const keys = context.keys();
    const values = keys.map(context);
    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      const value = values[index];
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default);
      return {
        document,
        slug
      };
    });
    return data;
  })(require.context("../../posts", true, /\.md$/));

  return {
    allBlogs: posts,
  }
}
