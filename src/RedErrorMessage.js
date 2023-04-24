import { ErrorMessage } from 'formik'
import React from 'react'

const RedErrorMessage = ({name}) => {
  return (
    <div style={{color:'red'}}>
      <ErrorMessage name={name}/>
    </div>
  )
}

export default RedErrorMessage
