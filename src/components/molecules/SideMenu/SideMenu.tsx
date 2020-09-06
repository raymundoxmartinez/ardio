import * as React from "react"
import useStyles from "./useStyles"

import Avatar from "@atoms/Avatar"
import {
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core"
import { ChevronLeft, ChevronRight } from "@material-ui/icons"
import { useTheme } from "@material-ui/core/styles"

const SideMenu = ({
  isDrawerOpen,
  user,
  handleDrawerClose,
  menuItems,
}: {
  isDrawerOpen: boolean
  user: Record<string, any>
  handleDrawerClose: (event: React.MouseEvent) => void
  menuItems: string[]
}) => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      variant="persistent"
      anchor="left"
      open={isDrawerOpen}
    >
      <div className={classes.drawerHeader}>
        <div className={classes.avatarContainer}>
          <Avatar src={user.avatar} alt="Human" size="large" />
        </div>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  )
}

export default SideMenu
