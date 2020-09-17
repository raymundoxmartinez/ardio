import * as React from "react"
import { RouteComponentProps } from "@reach/router"
import { useDispatch, useSelector } from "react-redux"
import { openExperienceDetails, closeExperienceDetails } from "./profileSlice"

import useStyles from "./useStyles"
import { AuthContext } from "../../../context/Auth"
import ExperienceCard from "@molecules/ExperienceCard"

const Profile = (props: RouteComponentProps) => {
  const authCtx = React.useContext(AuthContext)
  const { isExpDetailsOpen } = useSelector(state => state.profile)
  const reduxDispatch = useDispatch()
  const classes = useStyles()
  return (
    <>
      <ExperienceCard
        experience={{
          image: "/mars2.jpeg",
          title: "Mars",
          description: "This is a trip to mars.",
        }}
        handleCloseExperienceDetails={() =>
          reduxDispatch(closeExperienceDetails())
        }
        handleOpenExperienceDetails={() =>
          reduxDispatch(openExperienceDetails())
        }
        isExpDetailsOpen={isExpDetailsOpen}
      />
    </>
  )
}

export default Profile
