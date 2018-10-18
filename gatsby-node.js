/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const productTemplate = path.resolve(`src/templates/product.js`)
    // Query for products to use in creating pages.
    resolve(
      graphql(`
        {
          allProduct {
            edges {
              node {
                id
                name
                slug
                language
                product_title
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create blog post pages.
        const products = result.data.allProduct.edges
        products.forEach(({ node }, index) => {
          const previous =
            index === products.length - 1 ? null : products[index + 1].node
          const next = index === 0 ? null : products[index - 1].node

          createPage({
            path: node.slug,
            component: productTemplate,
            context: {
              slug: node.slug,
              id: node.id,
              language: node.language,
              previous,
              next,
            },
          })
        })

        return
      })
    )
  })
}
