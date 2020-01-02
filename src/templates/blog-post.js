// 



import React from "react"
import { graphql } from "gatsby" // highlight-line
import Layout from "../components/layout"
import SEO from '../components/seo'

// highlight-start
export default ({ data }) => {
  const post = data.markdownRemark
  // highlight-end
  return (
    <Layout>
      {/* highlight-start */}
      <SEO title={post.frontmatter.title} description={post.excerpt}  />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      {/* highlight-end */}
    </Layout>
  )
}

// highlight-start
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`