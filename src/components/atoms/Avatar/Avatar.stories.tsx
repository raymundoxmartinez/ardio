import * as React from "react"
import { storiesOf } from "@storybook/react"
import Avatar from "./Avatar"
import readme from "./docs.md"

storiesOf("Avatar", module)
  .addParameters({
    readme: { content: readme },
    options: {
      theme: {},
    },
  })
  .add("Avatar", () => {
    return <Avatar />
  })
