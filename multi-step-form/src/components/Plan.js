import React from 'react'

const Plan = ({active, setActivePlan, icon, title, isChecked, rate, index}) => {
    return (
            <article
                className={`plan ${active}`}
                onClick={() => setActivePlan(index)}
                >
                <div className='plan-icon'>
                    <img src={icon} alt={`${title} icon`} />
                </div>
                <h4 className='plan-title'>{title}</h4>
                <p className='plan-rate'>
                    ${isChecked ? rate.yearly : rate.monthly }/{isChecked ? 'yr': 'mon'}
                </p>
                {isChecked && <p className='plan-free'>2 months free</p>}
            </article>
    )
}

export default Plan
