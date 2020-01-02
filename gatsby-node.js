// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node,getNode, actions }) => {
//   const { createNodeField } = actions                             //TODO: 使用此函数 在其他插件创建的节点里创建其他字段
//   if (node.internal.type === `MarkdownRemark`) {    
//     // const fileNode = getNode(node.parent)                      
//     // console.log(node.internal.type, "================= ", fileNode.relativePath)
//     // console.log(createFilePath({node,getNode,basePath:`pages`}))
    
    
//     const slug = createFilePath({node,getNode,basePath:`pages`})
//     createNodeField({
//         node,
//         name: `slugggg`,
//         value: slug,
//     })
//   }
// }

// exports.createPages = async({graphql,actions})=>{
//   const { createPage} = actions
//   const result = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slugggg
//             }
//           }
//         }
//       }
//     }
//   `)
  
//   console.log(JSON.stringify(result,null,4))
// }


// result.data.allMarkdownRemark.edges.forEach(({node})=>{
//   createPage({
//     path: node.fields.slugggg,
//     component: path.resolve(`./src/templates/blog-post.js`),
//     context: {
//       slugggg: node.fields.slugggg,
//     },
//   })
// })




const path = require(`path`) // highlight-line
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions // highlight-line
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // highlight-start
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
  // highlight-end
}