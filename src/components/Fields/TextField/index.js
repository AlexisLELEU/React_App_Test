import React, { Fragment } from 'react';

const TextField = (props) => {
  const {typeArea} = props

  function type(type) {
    if (type == 'input') {
      return (
        <input
        {...props.input}
        type="text"
        placeholder={props.placeholder}
      />   
      )
    }
    return (
      <textarea
      {...props.input}
      type="text"
      placeholder={props.placeholder}
    />   
    )
  }
  
  return(
    <Fragment>
      
      {type(typeArea)}
      
    </Fragment>
  )
}
export default TextField