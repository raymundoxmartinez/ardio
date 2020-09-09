import * as React from "react"
import { storiesOf } from "@storybook/react"
import NavBar from "./NavBar"
import readme from "./docs.md"

storiesOf("NavBar", module)
  .addParameters({
    readme: { content: readme },
    options: {
      theme: {},
    },
  })
  .add("NavBar", () => {
    return <NavBar />
  })
