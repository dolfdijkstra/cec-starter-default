import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import GatsbyImage from 'gatsby-image'

import Layout from '../components/layout'
import { rhythm, scale } from '../utils/typography'

class ProductDetailPageTemplate extends React.Component {
  render () {
    const product = this.props.data.product
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = product.product_description

    const { previous, next, language } = this.props.pageContext

    return (
      <Layout
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        language={language}
      >
        <h1>{product.product_title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1)
          }}
        >
          {product.updatedDate}
        </p>
        <div>{product.product_description}</div>
        <GatsbyImage
          fluid={product.product_main_image.localFile.childImageSharp.fluid}
        />
        <hr
          style={{
            marginBottom: rhythm(1)
          }}
        />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0
          }}
        >
          <li>
            {previous && (
              <Link to={previous.slug} rel='prev'>
                ← {previous.product_title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel='next'>
                {next.product_title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default ProductDetailPageTemplate

export const pageQuery = graphql`
  query ProductById($id: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    product(id: { eq: $id }) {
      id
      name
      slug
      language
      updatedDate(formatString: "DD MMMM, YYYY")
      product_description
      product_title
      product_short_title
      product_main_image {
        name
        native
        localFile {
          childImageSharp {
            fluid(maxWidth: 1600, maxHeight: 850) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
