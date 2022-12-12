import React from 'react'

import IInputField from './IInputField'

function InputField({type, label, placeholder, getPropsField, id, formik, disabled = false}: IInputField) {
  const typeOf = `${id}`
  const hasError = formik.errors[typeOf];
  const isTextArea = type === 'textarea'

  return (
    <>
      <div className='input-field'>
        <label>{label}</label>
        { isTextArea 
        ? (
          <textarea
          placeholder={placeholder}
          {...getPropsField(typeOf)}
          id={typeOf}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[typeOf]}
          disabled={disabled}
          />
        ): (
          <input
            type={type} placeholder={placeholder}
            {...getPropsField(typeOf)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[typeOf]}
            disabled={disabled}
            id={typeOf}
          />
          )}
        {hasError ? (
          <span>
           {`${hasError}`}
          </span>
          ): null}
      </div>
      <style jsx>{`
        .input-field {
          width: 100%;
          max-height: ${isTextArea ? 'auto' : '80px'};
          display: flex;
          flex-direction: column;
        }
        
        label {
          font-size: 18px;
          font-weight: bold;
          margin: 0 0 4px 8px ;
          color: ${hasError ? 'red' : 'var(--W11)'};
        }
      
        input, textarea{
          padding: 8px 12px;
          background-color: var(--W3);
          border: 1px solid ${hasError ? 'red' : 'var(--W4)'};
          border-radius: 4px;
        }
      
        input::placeholder {
          color: ${hasError ? 'red' : 'initial'};
        }
      
        textarea::placeholder {
          color: ${hasError ? 'red' : 'initial'};
        }
      
        input:focus {
          outline: none;
          -webkit-box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.2);
          -moz-box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.2);
          box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.2);
        }
      
        textarea:focus {
          outline: none;
          -webkit-box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.2);
          -moz-box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.2);
          box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.2);
        }
      
        span {
          color: red;
          margin-left: 8px;
          margin-top: 2px;
          font-size: 12px;
        }
      `}</style>
    </>
  )
}

export default InputField