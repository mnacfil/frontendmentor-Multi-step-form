import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import AddOnSummary from './AddOnSummary'

const Step4Form = () => {
  const { setStep, summary } = useGlobalContext();
  const {plan, mode, addsOn} = summary;
  let total = 0
  const checkAddsOn = addsOn.filter(item => item.isChecked === true);
  const addsOnRate = checkAddsOn.map(item => item.rate)

  for(const rate of addsOnRate){
    if(mode === 'Monthly') {
      total+= rate.monthly;
    } else {
      total+= rate.yearly;
    }
  }
  total+= plan.rate

  return (
    <Wrapper>
      <form className='form'>
        <div className="form-content">
          <h2>
            Finishing up
          </h2>
          <p>
            Double-check everything looks OK before confirming.
          </p>
          <div className="summary-container">
            <div className='summary-items'>
              <div className="item">
                <div>
                  <h4>{plan.title}({mode})</h4>
                  <a
                    href="#" className='change'
                    onClick={() => setStep(2)}
                    >
                    Change
                  </a>
                </div>
                <p className='item-rate'>
                  ${plan.rate}/{mode === 'Monthly' ? 'mon' : 'yr'}
                </p>
              </div>
              {checkAddsOn.map((addOn, index) => {
                const { title, rate } = addOn;
                return (
                  <AddOnSummary
                    key={index}
                    title={title}
                    rate={rate}
                    mode={mode}
                  />
                )
              })}
            </div>
            <div className="summary-total">
              <h4>
                Total (per {mode === 'Monthly' ? 'month' : 'year'})
              </h4>
              <p className='total'>
                  ${total}/{mode === 'Monthly' ? 'mo' : 'yr'}
              </p>
            </div>
          </div>
        </div>
        <div className='form-button'>
          <a
            href="#"
            className='goBack-btn'
            onClick={() => setStep(current => current - 1)}
            >
            Go back
          </a>
          <button
            className='next-btn confirm-btn'
            onClick={() => setStep(current => current + 1)}
            >
            Next Step
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`

  .summary-items {
    background-color: var(--Alabaster);
    padding: 1rem;
    border-radius: 0.5rem;
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 1rem 0;
      .change {
        font-size: 14px;
        color: var(--Cool-gray);
        display: inline-block;
        margin-bottom: 1.5rem;
      }

      h4 {
        font-weight: 400;
        font-size: 14px;
        color: var(--Cool-gray)
      }

      p {
        margin: 0;
      }

      .item-rate {
        color: var(--marine-blue);
        font-size: 14px;
      }
    }
    .item:first-child {
      margin: 0;
      border-bottom: 1px solid var(--Light-gray);
      h4 {
        color: var(--marine-blue);
        font-weight: 500;
        margin-bottom: 4px;
      }

      .item-rate {
        font-weight: 700;
      }
    }
  }

  .summary-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin-top: 0.5rem;
    p {
      margin: 0;
    }

    h4 {
      color: var(--Cool-gray);
      font-size: 14px;
      font-weight: 400;
    }
    .total {
      color: var(--purplish-blue);
      font-weight: 500;
      font-size: 16px;
    }
  }

  .confirm-btn {
    background-color: var(--purplish-blue);
  }

`;

export default Step4Form
