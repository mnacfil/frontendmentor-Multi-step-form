import React, { useState } from 'react'
import styled from 'styled-components';
import { addsOn } from '../constant';
import AddOn from './AddOn';
import { useGlobalContext } from '../context';

const Step3Form = () => {
  const { setStep, summary, setSummary } = useGlobalContext();

  return (
    <Wrapper>
      <form className="form">
        <div className="form-content">
          <h2>
            Pick add-ons
          </h2>
          <p>
            Add-ons help enhance your gaming experience.
          </p>
          <div className="addOns-container">
            {addsOn.map((article, index) => {
              return (
                <AddOn
                  key={index}
                  index={index}
                  {...article}
                />
              )
            })}
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
            className='next-btn'
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

  .addOns-container {


    .item {
      border: 1px solid var(--Light-gray);
      padding: 1rem;
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      border-radius: 0.5rem;

      .item-check {
        margin-right: 1.5rem;
        accent-color: var(--purplish-blue);
      }
      .item-rate {
        color: var(--purplish-blue);
      }
      p {
        margin: 0;
      }
      h4 {
        font-size: 16px;
        font-weight: 500;
        color: var(--marine-blue);
        margin-bottom: 4px;
      }
      h4 + p {
        color: var(--Cool-gray);
        font-weight: 400;
        font-size: 14px;
      }
    }
    .active-addOn {
      border: 1px solid var(--purplish-blue);
      background-color: var(--Magnolia);
    }
    .item:not(:last-child) {
      margin-bottom: 1.5rem;
    }
    .item:hover {
      border: 1px solid var(--purplish-blue);
    }
  }
`;

export default Step3Form
