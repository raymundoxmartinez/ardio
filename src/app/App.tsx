import React from "react"
import { ThemeProvider } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import { Router } from "@reach/router"
import theme from "../theme/theme"
import Layout from "@components/Layout/AppLayout"
import Profile from "@routes/Profile"
import Experience from "@routes/Experience"
import SignIn from "@routes/SignIn"
import SignUp from "@routes/SignUp"
import { AuthProvider } from "../context/auth"
import withLayout from "@components/Layout/withLayout"

const ProfileWithLayout = withLayout(Layout)(Profile)
const ExperienceLayout = withLayout(Layout)(Experience)
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router basepath="/app">
          <SignIn path="/signIn" />
          {/* <SignUp path="/signup" /> */}
          <ExperienceLayout path="/experience" />
          <ProfileWithLayout path="/profile" />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
