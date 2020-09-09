import React from "react"

const AuthContext = React.createContext<undefined | { isLoggedIn: boolean }>(
  undefined
)

export default AuthContext
