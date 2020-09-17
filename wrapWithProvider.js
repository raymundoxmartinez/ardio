import React from 'react'
import { Provider } from 'react-redux'

import { ThemeProvider } from '@material-ui/core/styles'
import theme from './src/theme/theme'

import store from './src/app/store'

export default ({ element }) => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </Provider>
)
