import React, { FC, useCallback, useEffect } from "react"
import { RootRef, Paper } from "@material-ui/core"
import { useDropzone, DropzoneOptions } from "react-dropzone"
import useStyles from "./useStyles"
import { useFormContext } from "react-hook-form"

const FileUpload = props => {
  const { name, label = name } = props
  const { register, unregister, setValue, watch } = useFormContext()
  const files: File[] = watch(name)
  const onDrop = useCallback<DropzoneOptions["onDrop"]>(
    droppedFiles => {
      setValue(name, droppedFiles, { shouldValidate: true })
    },
    [setValue, name]
  )
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: props.accept,
  })

  useEffect(() => {
    register(name)
    return () => {
      unregister(name)
    }
  }, [register, unregister, name])
  const { ref, ...rootProps } = getRootProps()
  const classes = useStyles()
  return (
    <RootRef rootRef={ref}>
      <Paper className={classes.paper} {...rootProps}>
        <input {...getInputProps()} {...props} />
        <p>Drag 'n' drop an image/video here, or click to select files</p>
        {!!files?.length && (
          <div>
            {files.map(file => {
              return (
                <div key={file.name}>
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    style={{ width: 100, height: 100 }}
                  />
                </div>
              )
            })}
          </div>
        )}
      </Paper>
    </RootRef>
  )
}

export default FileUpload
