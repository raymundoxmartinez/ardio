import * as React from "react"
import { RouteComponentProps } from "@reach/router"
import { useForm, FormProvider } from "react-hook-form"
import { TextField, Button, TextareaAutosize } from "@material-ui/core"
import FileUpload from "@molecules/FileUpload"
import useStyles from "./useStyles"

const Experience = (props: RouteComponentProps) => {
  const classes = useStyles()

  const { register, handleSubmit, watch, errors } = useForm()

  const methods = useForm({
    mode: "onBlur",
  })
  const onSubmit = data => {
    debugger
    console.log(data)
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        style={{ maxWidth: 500, margin: "auto", display: "flex-column" }}
      >
        <TextField
          name="name"
          label="Name"
          placeholder="Experience Name"
          variant="outlined"
          className={classes.textField}
          inputRef={methods.register({ required: true })}
        />
        {errors.name && <span>Name is required.</span>}
        <TextField
          multiline
          rows={5}
          name="description"
          label="Description"
          placeholder="Write a brief description of the experience."
          variant="outlined"
          className={classes.textField}
          inputRef={methods.register({ required: true })}
        />
        <FileUpload
          name="image"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          multiple
        />
        <Button type="submit" variant="contained" className={classes.button}>
          Create
        </Button>
      </form>
    </FormProvider>
  )
}

export default Experience
