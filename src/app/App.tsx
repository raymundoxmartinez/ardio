import React from "react"
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Router } from "@reach/router"
import theme from '../theme/theme'
import Layout from "../components/Layout"
import Profile from "../components/Profile"

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout>
                <Router basepath="/app">
                    <Profile path="/profile" />
                </Router>
            </Layout>
        </ThemeProvider>
    )
}

export default App