import * as React from "react"
import useStyles from "./useStyles"

import { Avatar as MaterialAvatar } from "@material-ui/core"

const Avatar = ({
  size,
  src,
  alt,
}: {
  size: "small" | "large"
  src: string
  alt: string
}) => {
  const classes = useStyles()
  let avatarStyle
  switch (size) {
    case "small": {
      avatarStyle = classes.small
      break
    }
    case "large": {
      avatarStyle = classes.large
      break
    }
    default: {
      avatarStyle = classes.small
    }
  }
  return <MaterialAvatar src={src} alt={alt} className={avatarStyle} />
}

export default Avatar
