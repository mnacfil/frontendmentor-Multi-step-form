import React from 'react'

const FormControl = ({name, type, placeholder, label}) => {
    return (
        <div className="form-control">
            <div>
                <label htmlFor={name}>{label}</label>
                <small className='error-msg'>
                    This field is required
                </small>
            </div>
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                className='form-input'
            />
        </div>
    )
}

export default FormControl
