import * as React from "react"
import { storiesOf } from "@storybook/react"
import ExperienceCard from "./ExperienceCard"
import readme from "./docs.md"

storiesOf("ExperienceCard", module)
  .addParameters({
    readme: { content: readme },
    options: {
      theme: {},
    },
  })
  .add("ExperienceCard", () => {
    return (
      <ExperienceCard
        experience={{
          image: "/mars2.jpeg",
          title: "Mars",
          description: "This is a trip to mars.",
        }}
      />
    )
  })
