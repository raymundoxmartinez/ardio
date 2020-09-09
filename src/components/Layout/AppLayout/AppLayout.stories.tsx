import * as React from "react"
import { storiesOf } from "@storybook/react"
import AppLayout from "./AppLayout"
import readme from "./docs.md"

storiesOf("AppLayout", module)
  .addParameters({
    readme: { content: readme },
    options: {
      theme: {},
    },
  })
  .add("AppLayout", () => {
    return (
      <AppLayout>
        <div>HELLO TEST</div>
      </AppLayout>
    )
  })
