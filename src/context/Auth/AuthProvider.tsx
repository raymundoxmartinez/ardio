import React from "react"
import Context from "./AuthContext"

export default function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const ctx = {
    isLoggedIn,
    toggleLogIn: () => {
      setIsLoggedIn(!isLoggedIn)
    },
  }
  return <Context.Provider value={ctx}>{children}</Context.Provider>
}
