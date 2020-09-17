import { createMuiTheme } from "@material-ui/core/styles"

// Add some custom theme stuff if needed

export default createMuiTheme({
  typography: {
    fontFamily: [
      '"Segoe UI Symbo l"',
      "-apple-system",
      "sans-serif",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
    ].join(","),
  },
  palette: {
    text: {
      primary: "#FFFFFF",
      secondary: "#8B97AE",
      disabled: "#707D96",
    },
    action: {
      active: "#6781F7",
    },
    primary: {
      main: "#6E3DC8",
    },
    secondary: {
      main: "#6781F7",
    },
    background: {
      default: "#192233",
      paper: "#212C42",
    },
  },
})
