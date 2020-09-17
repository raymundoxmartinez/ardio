import * as React from "react"
import {
  Card,
  CardActions,
  CardMedia,
  CardActionArea,
  CardHeader,
  IconButton,
} from "@material-ui/core"
import ThumbUpTwoToneIcon from "@material-ui/icons/ThumbUpTwoTone"
import ThumbDownTwoToneIcon from "@material-ui/icons/ThumbDownTwoTone"
import ExperienceDetails from "@molecules/ExperienceDetails"
import useStyles from "./useStyles"

const ExperienceCard = ({
  experience,
  handleCloseExperienceDetails,
  handleOpenExperienceDetails,
  isExpDetailsOpen,
}) => {
  const classes = useStyles()
  return (
    <>
      <ExperienceDetails
        experience={experience}
        handleCloseExperienceDetails={handleCloseExperienceDetails}
        isExpDetailsOpen={isExpDetailsOpen}
      />
      <Card className={classes.root}>
        <CardHeader title={experience.title} />
        <CardActionArea onClick={handleOpenExperienceDetails}>
          <CardMedia
            component="img"
            className={classes.media}
            image={experience.image}
            title={experience.title}
          />
          {/* <CardContent>
          <Typography>{experience.description}</Typography>
        </CardContent> */}
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <IconButton>
            <ThumbUpTwoToneIcon />
          </IconButton>
          <IconButton>
            <ThumbDownTwoToneIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  )
}

export default ExperienceCard
