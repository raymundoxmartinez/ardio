import React from "react"
import { graphql } from "gatsby"
import Globe from "../components/molecules/Globe"
import Cube from "../components/molecules/Cube"
import NavBar from "../components/molecules/NavBar"
import { Helmet } from "react-helmet"
import { Entity, Scene } from "aframe-react"

const Homepage = ({
  data,
}: {
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
  const AScene = ({ children, ...props }) => {
    return React.createElement("a-scene", { ...props }, [...children])
  }
  const ANFT = ({ children, ...props }) => {
    return React.createElement("a-nft", { ...props }, children)
  }

  const TestH1 = ({ children, ...props }) => {
    return React.createElement("h1", { ...props }, children)
  }
  function Hello() {
    return /*#__PURE__*/ React.createElement(
      "a-scene",
      {
        "vr-mode-ui": "enabled: false;",
        renderer: "logarithmicDepthBuffer: true;",
        embedded: true,
        arjs:
          "trackingMethod: best; sourceType: webcam; debugUIEnabled: false;",
      },
      /*#__PURE__*/ React.createElement(
        "a-nft",
        {
          type: "nft",
          url:
            "https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/trex-image/trex",
          smooth: "true",
          smoothCount: "10",
          smoothTolerance: "0.01",
          smoothThreshold: "5",
        },
        /*#__PURE__*/ React.createElement("a-entity", {
          "gltf-model":
            "https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf",
          scale: "5 5 5",
          position: "50 150 -100",
        })
      ),
      /*#__PURE__*/ React.createElement("a-entity", {
        camera: true,
      })
    )
  }
  const AEntity = ({ children = null, ...props }) => {
    debugger
    const test = React.createElement("a-entity", { ...props }, children)
    debugger
    return test
  }
  const asceneProps = {
    "vr-mode-ui": "enabled: false;",
    renderer: "logarithmicDepthBuffer: true;",
    embedded: true,
    arjs: "trackingMethod: best; sourceType: webcam;debugUIEnabled: false;",
  }

  const anftProps = {
    type: "nft",
    url:
      "https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/trex-image/trex",
    smooth: "true",
    smoothCount: "10",
    smoothTolerance: ".01",
    smoothThreshold: "5",
  }

  const aEntityProps = {
    "gltf-Model":
      "https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf",
    scale: "5 5 5",
    position: "50 150 -100",
  }

  return (
    <>
      {/* <Helmet
        title={siteTitle}
        titleTemplate={`${siteName} | %s`}
        meta={[
          { name: "description", content: siteDescription },
          { name: "keywords", content: siteKeywords },
          { name: "author", content: siteAuthor },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:description", content: siteDescription },
          { name: "twitter:title", content: siteTitle },
          { property: "og:site_name", content: siteName },
          { property: "og:locale", content: "en_US" },
          { property: "og:type", content: "website" },
          { property: "og:title", content: siteTitle },
          { property: "og:description", content: siteDescription },
          { property: "og:url", content: siteUrl },
        ]}
      /> */}
      <div>HELLO</div>

      {/* <Globe />
      <button onClick={() => { }}>Enter</button> */}

      {/* <TestH1>Hello</TestH1> */}
      {/* <Scene
        {...asceneProps}
      >
        <ANFT {...anftProps}>
          <Entity {...aEntityProps} />
        </ANFT>
        <Entity camera={true} />
      </Scene> */}
      {/* <Hello/> */}
      {/* <Cube /> */}
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
