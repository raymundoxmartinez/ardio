import React from "react"
import { ThemeProvider } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import { Router } from "@reach/router"
import theme from "../theme/theme"
import Layout from "@components/Layout/AppLayout"
import Profile from "@routes/Profile"
import SignIn from "@routes/SignIn"
import SignUp from "@routes/SignUp"
import { AuthProvider } from "../context/auth"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Layout>
          <Router basepath="/app">
            {/* <SignUp path="/signup" /> */}
            <Profile path="/profile" />
          </Router>
        </Layout>
        <Router basepath="/app">
          <SignIn path="/signIn" />
          {/* <SignUp path="/signup" /> */}
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
