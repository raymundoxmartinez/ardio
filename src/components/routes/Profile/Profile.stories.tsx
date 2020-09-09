import * as React from "react"
import { storiesOf } from "@storybook/react"
import { muiTheme } from "storybook-addon-material-ui"
import Profile from "./Profile"
import readme from "./docs.md"
// import theme from "../../../theme/theme"

const newTheme = {
  themeName: "Grey Theme",
  palette: {
    primary1Color: "#00bcd4",
    alternateTextColor: "#4a4a4a",
    canvasColor: "#616161",
    textColor: "#bdbdbd",
    secondaryTextColor: "rgba(255, 255, 255, 0.54)",
    disabledColor: "#757575",
    accent1Color: "#607d8b",
  },
}
storiesOf("Profile", module)
  .addParameters({
    readme: { content: readme },
    options: {
      theme: {},
    },
  })
  .add("Profile", () => {
    return <Profile />
  })
