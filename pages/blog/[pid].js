import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'
import MarkdownRenderer from '../../components/BlogComponents/MarkdownRenderer'
const math = require("remark-math")
const BlogPost = props => {
  const reformatDate = fullDate => {
    const date = new Date(fullDate)
    return date.toDateString().slice(4)
  }
  const markdownBody = props.content
  const frontmatter = props.data


  return (
    <>
      <Head>
        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css"
        integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG"
        crossorigin="anonymous"/>
      </Head>
      <div className='container'>
        <article className='blog-post'>
          <div className='header'>
            <h1>{frontmatter.title}</h1>
            <h3> {reformatDate(frontmatter.date)}</h3>
          </div>
          <div className="body">
            <MarkdownRenderer source={markdownBody} />
          </div>
        </article>
        <style jsx>
          {`
            .blog-post {
              max-width: 800px;
              margin: 0 auto;
            }
            .blog-post .header {
              padding: 24px 0;
            }
            .blog-post .header h1, .blog-post .header h3{
              margin: 0;
            }
            .blog-post .header h3 {
              color: #a0a0a0;
              font-size: 20px;
            }
            @media (max-width: 576px){
              .blog-post .header h1 {
                font-size: 32px;
              }
            }
            @media (min-width: 768px) {
              .blog-post .header {
                text-align: center;
              }
              .blog-post .header {
                padding: 24px 20px;
                margin-top: 48px;
              }
            }

            `}
        </style>
      </div>
    </>
  )
}

BlogPost.getInitialProps = async (context) => {
  const { pid } = context.query

  const data = keys.map((key, index) => {

  })(require.context("../../posts", true, /\.md$/));

  const content = await import(`../../posts/${pid}.md`)
  const data = matter(content.default)
  return {
    ...data
  }
}

export default BlogPost
