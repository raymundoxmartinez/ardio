import React from 'react'
import { graphql } from 'gatsby'
import Globe from '../components/molecules/Globe'
import Cube from '../components/molecules/Cube'
import NavBar from '../components/molecules/NavBar'
import { Helmet } from 'react-helmet'

const Homepage = ({ data }: {
  data: {
    site: {
      siteMetadata: {
        siteName: string
        siteTitle: string
        siteDescription: string
        siteUrl: string
        siteAuthor: string
        siteKeywords: string
        siteLogo: string
      }
    }
  }
}) => {
  const {
    site: {
      siteMetadata: {
        siteName,
        siteTitle,
        siteDescription,
        siteUrl,
        siteAuthor,
        siteKeywords,
        siteLogo,
      },
    },
  } = data
  return (
    <>
      <Helmet
        title={siteTitle}
        titleTemplate={`${siteName} | %s`}
        meta={[
          { name: 'description', content: siteDescription },
          { name: 'keywords', content: siteKeywords },
          { name: 'author', content: siteAuthor },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:description', content: siteDescription },
          { name: 'twitter:title', content: siteTitle },
          { property: 'og:site_name', content: siteName },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: siteTitle },
          { property: 'og:description', content: siteDescription },
          { property: 'og:url', content: siteUrl },
        ]}
      />
      <Cube />

    </>
  )
}

function OnMount({ children }: any) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    if (!mounted) setMounted(true)
  }, [mounted])

  if (!mounted) return null

  return children
}

export default Homepage

export const query = graphql`
query IndexQuery {
    site {
      siteMetadata {
        siteName
        siteTitle
        siteDescription
        siteUrl
        siteAuthor
        siteKeywords
      }
    }
  }
`