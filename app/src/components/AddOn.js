import React from 'react'
import { useGlobalContext } from '../context'

const AddOn = ({title, info, rate, isChecked, index}) => {
    const { summary, setSummary } = useGlobalContext();
    const { addsOn } = summary;

    const saveAddOn = () => {
        const newAddsOn = addsOn.map((item, itemIndex) =>  {
            if(index === itemIndex) {
                item.isChecked = !item.isChecked;
            }
            return item;
        })
        setSummary({ ...summary, ['addsOn']: newAddsOn})
    }

    return (
        <article className={`item ${isChecked && 'active-addOn'}`}>
            <input
                type="checkbox"
                className='item-check'
                checked={isChecked}
                onChange={saveAddOn}
                />
            <div>
                <h4>{title}</h4>
                <p>{info}</p>
            </div>
            <p className='item-rate'>
                +${rate}/{summary.mode === 'Monthly' ? 'mo': 'yr'}
            </p>
        </article>
    )
}

export default AddOn
