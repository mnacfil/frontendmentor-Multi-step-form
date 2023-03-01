import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'

const Step4Form = () => {
  const data = useGlobalContext();
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
                  <h4>Arcade(Monthly)</h4>
                  <a href="#" className='change'>Change</a>
                </div>
                <p className='item-rate'>
                  $9/mon
                </p>
              </div>
              <div className="item">
                <h4>Online service</h4>
                <p className='item-rate'>
                  +$1/mon
                </p>
              </div>
              <div className="item">
                <h4>Larger Storage</h4>
                <p className='item-rate'>
                  +$2/mon
                </p>
              </div>
            </div>
            <div className="summary-total">
              <h4>
                Total(per month)
              </h4>
              <p className='total'>
                  $12/mon
                </p>
            </div>
          </div>
        </div>
        <div className='form-button'>
          <a href="#" className='goBack-btn'>Go back</a>
          <button className='confirm-btn next-btn'>Confirm</button>
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
