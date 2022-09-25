import React from 'react'
import Details from './Details';

const FormInput = (props) => {
    const { onChange, id, ...elemProps}= props;
  return (
    <>
    <div>
        <input  {...elemProps} onChange={onChange} />
    </div>

    </>
  )
}

export default FormInput;