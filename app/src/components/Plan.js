import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'

const Plan = ({active, setActivePlan, icon, title, isChecked, rate, index}) => {
    const { summary, setSummary } = useGlobalContext();

    const savePlan = () => {
        setSummary({
            ...summary,
            ['mode']: isChecked ? 'Yearly': 'Monthly',
            ['plan']: { ...summary.plan,
                title: title,
                rate: isChecked ? rate.yearly: rate.monthly
            }
        });
        setActivePlan(index);
    }

    useEffect(() => {
        if(active) {
            savePlan();
        }
    }, [isChecked])

    return (
            <article
                className={`plan ${active}`}
                onClick={savePlan}
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
