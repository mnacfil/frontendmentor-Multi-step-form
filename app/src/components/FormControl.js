import React from 'react';

const FormControl = ({name, type, placeholder, label, value, handleChange, isEmpty}) => {
    return (
        <div className="form-control">
            <div>
                <label htmlFor={name}>{label}</label>
                {isEmpty && <small>This field is required</small>}
            </div>
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                className='form-input'
                onChange={handleChange}
                value={value}
            />
        </div>
    )
}

export default FormControl
