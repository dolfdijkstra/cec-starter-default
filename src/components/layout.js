import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './header'
// import { rhythm, scale } from '../utils/typography'

const Layout = ({ children, siteTitle, language, siteDescription }) => (
  <>'    \' \'
   '<Helmet
    title={siteTitle}
    meta={[{ name: 'description', content: siteDescription }]}
    htmlAttributes={{ lang: language }}
  />'    \' '<Header siteTitle={siteTitle} />' '
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}
    >
      {children}
    </div>'    \' \'
 '</>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  siteTitle: PropTypes.node.isRequired,
  language: PropTypes.node.isRequired,
  siteDescription: PropTypes.node.isRequired
}

export default Layout
