import * as React from "react"
import { RouteComponentProps } from "@reach/router"

import useStyles from "./useStyles"
import { AuthContext } from "../../../context/Auth"

const Profile = (props: RouteComponentProps) => {
  const authCtx = React.useContext(AuthContext)
  const classes = useStyles()
  return (
    <>
      {authCtx && authCtx.isLoggedIn ? (
        <div>this is the profile page</div>
      ) : (
        <div>user Must log in</div>
      )}
    </>
  )
}

export default Profile
