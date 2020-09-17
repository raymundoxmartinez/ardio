import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles((theme: any) => {
  return {
    paper: {
      height: "100%",
    },
    content: {
      height: "100%",
      display: "flex",
    },
    description: {
      flex: 1,
    },
    image: {
      flex: 1,
    },
    primaryButton: {
      backgroundColor: theme.palette.secondary.main,
    },
  }
})
export default useStyles
