import * as React from "react"
import { storiesOf } from "@storybook/react"
import ExperienceDetails from "./ExperienceDetails"
import readme from "./docs.md"

storiesOf("ExperienceDetails", module)
  .addParameters({
    readme: { content: readme },
    options: {
      theme: {},
    },
  })
  .add("ExperienceDetails", () => {
    return (
      <ExperienceDetails
        handleClose={() => {}}
        isExpDetailsOpen={true}
        experience={{
          image: "/mars2.jpeg",
          title: "Mars",
          description: "This is a trip to mars.",
        }}
      />
    )
  })
