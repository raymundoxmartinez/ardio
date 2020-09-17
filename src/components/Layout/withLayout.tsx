import React from "react"

const withLayout = Layout => Component => props => {
  return (
    <Layout>
      <Component {...props} />
    </Layout>
  )
}

export default withLayout
