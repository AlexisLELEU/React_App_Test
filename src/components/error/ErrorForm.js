import React from "react";

const ErrorForm = (props) => {
  const {errorMessage} = props
  return (
    <div>
      <p className='error'>{errorMessage}</p>
    </div>
  );
};

export default ErrorForm;
