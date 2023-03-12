import React from 'react'

const AddOnSummary = ({title, rate, mode}) => {
    return (
        <div className="item">
            <h4>{title}</h4>
            <p className='item-rate'>
                +${mode === 'Monthly' ? rate.monthly : rate.yearly }/{mode === 'Monthly' ? 'mon' : 'yr'}
            </p>
        </div>
    )
}

export default AddOnSummary
