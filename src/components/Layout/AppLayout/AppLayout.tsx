import * as React from "react"
import useStyles from "./useStyles"
import clsx from "clsx"
import SideMenu from "@molecules/SideMenu"
import NavBar from "@molecules/NavBar"

const AppLayout = ({ children }) => {
  const user = { avatar: "url" }
  const menuItems = ["Inbox", "Starred", "Send email", "Drafts"]

  const classes = useStyles()
  const [isDrawerOpen, setDrawerOpen] = React.useState(false)
  const handleDrawerClose = () => {
    setDrawerOpen(false)
  }
  const handleDrawerOpen = () => {
    setDrawerOpen(true)
  }
  return (
    <div className={classes.root}>
      <NavBar handleDrawerOpen={handleDrawerOpen} isDrawerOpen={isDrawerOpen} />
      <SideMenu
        isDrawerOpen={isDrawerOpen}
        user={user}
        handleDrawerClose={handleDrawerClose}
        menuItems={menuItems}
      />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: isDrawerOpen,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  )
}

export default AppLayout
