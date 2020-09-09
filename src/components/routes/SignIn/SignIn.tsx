import * as React from "react"
import { RouteComponentProps } from "@reach/router"
import { useForm } from "react-hook-form"
import { TextField, Button } from "@material-ui/core"
import useStyles from "./useStyles"

const SignIn = (props: RouteComponentProps) => {
  const classes = useStyles()
  const { register, handleSubmit, watch, errors } = useForm()

  const onSubmit = data => console.log(data)

  console.log(watch("example"))
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: 500, margin: "auto", display: "flex-column" }}
    >
      <TextField
        name="phoneNumber"
        label="Phone Number"
        placeholder="000-000-0000"
        variant="outlined"
        className={classes.textField}
        inputRef={register({ required: true })}
      />
      {errors.phoneNumber && <span>Phone Number is required.</span>}
      <TextField
        name="password"
        label="Password"
        placeholder="xxxxxxxx"
        variant="outlined"
        className={classes.textField}
        inputRef={register({ required: true })}
      />
      {errors.password && <span>Password is required.</span>}
      <Button type="submit" variant="contained" className={classes.button}>
        Sign In
      </Button>
    </form>
  )
}

export default SignIn
