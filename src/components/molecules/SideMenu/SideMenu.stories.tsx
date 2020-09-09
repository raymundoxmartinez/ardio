import * as React from "react"
import { storiesOf } from "@storybook/react"
import SideMenu from "./SideMenu"
import readme from "./docs.md"

storiesOf("SideMenu", module)
  .addParameters({
    readme: { content: readme },
    options: {
      theme: {},
    },
  })
  .add("SideMenu", () => {
    return (
      <SideMenu
        isDrawerOpen={true}
        user={{ avatar: "src" }}
        handleDrawerClose={() => {}}
        menuItems={["Inbox", "Starred", "Send email", "Drafts"]}
      />
    )
  })
