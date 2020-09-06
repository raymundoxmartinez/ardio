import React from "react"
import useStyles from "./useStyles"
import clsx from "clsx"
import { IconButton, AppBar, Toolbar, Button } from "@material-ui/core"
import { Menu as MenuIcon } from "@material-ui/icons"

const NavBar = ({
  handleDrawerOpen,
  isDrawerOpen,
}: {
  handleDrawerOpen: (event: React.MouseEvent) => void
  isDrawerOpen: boolean
}) => {
  const classes = useStyles()

  return (
    <AppBar
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isDrawerOpen,
      })}
      position="fixed"
    >
      <Toolbar className={classes.toolBar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, isDrawerOpen && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
