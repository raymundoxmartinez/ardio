import { makeStyles } from "@material-ui/core/styles"
const drawerWidth = 240
const useStyles = makeStyles((theme: any) => {
  return {
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    avatarContainer: {
      width: "80%",
      alignContent: "flex-start",
    },
  }
})
export default useStyles
