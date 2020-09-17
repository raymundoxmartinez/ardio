import * as React from "react"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core"

import useStyles from "./useStyles"

const ExperienceDetails = ({
  experience,
  handleCloseExperienceDetails,
  isExpDetailsOpen,
}) => {
  const classes = useStyles()
  return (
    <Dialog
      onClose={handleCloseExperienceDetails}
      open={isExpDetailsOpen}
      maxWidth="sm"
      fullWidth
      classes={{ paper: classes.paper }}
    >
      <DialogTitle>{experience.title}</DialogTitle>
      <DialogContent className={classes.content}>
        <div className={classes.image}>
          <img src={experience.image} />
        </div>
        <div className={classes.description}>
          <DialogContentText>{experience.description}</DialogContentText>
        </div>
      </DialogContent>
      <DialogActions>
        <Button className={classes.primaryButton} onClick={() => {}}>
          Learn More
        </Button>
        <Button onClick={handleCloseExperienceDetails}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ExperienceDetails
