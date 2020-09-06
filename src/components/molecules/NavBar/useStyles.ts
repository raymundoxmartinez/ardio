import makeStyles from "@material-ui/core/styles/makeStyles"
const drawerWidth = 240
const useStyles = makeStyles((theme: any) => {
  return {
    appBar: {
      backgroundColor: "transparent",
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    toolBar: {
      backgroundColor: "transparent",
      color: "black",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: "none",
    },
  }
})

export default useStyles
