import React from 'react'
import { Link, graphql } from 'gatsby'
import GatsbyImage from 'gatsby-image'

import Layout from '../components/layout'

const Product = ({ node }) => {
  return (
    <div style={{ margin: 16 }}>
      <h3>{node.product_title}</h3>
      <div>
        <Link to={node.slug}>
          {node.product_short_title} {node.language}
        </Link>
        <GatsbyImage
          fluid={node.product_main_image.localFile.childImageSharp.fluid}
        />
      </div>
    </div>
  )
}

const IndexPage = ({ data }) => (
  <Layout
    siteTitle={data.site.siteMetadata.title}
    siteDescription='Starter'
    language='en'
  >
    <h1>CEC sample site</h1>
    {data.allProduct.edges.map(({ node }) => (
      <Product node={node} key={node.id} />
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
    allProduct(
      filter: { language: { eq: "en-US" } }
      sort: { fields: updatedDate, order: DESC }
    ) {
      edges {
        node {
          id
          name
          translatable
          language
          slug
          updatedDate(formatString: "DD MMMM, YYYY")
          product_short_title
          product_description
          product_title
          product_main_image {
            name
            native
            localFile {
              childImageSharp {
                fluid(maxWidth: 650, maxHeight: 650) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
