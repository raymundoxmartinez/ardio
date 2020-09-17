import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles((theme: any) => {
  return {
    root: {
      maxWidth: 250,
      border: "1px solid",
    },
    media: {
      margin: 5, // 16:9,
      maxWidth: 240,
    },
    cardActions: {
      display: "flex",
      justifyContent: "flex-end",
    },
  }
})
export default useStyles
