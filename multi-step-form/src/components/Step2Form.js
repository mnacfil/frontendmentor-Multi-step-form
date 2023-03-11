import React, { useState } from 'react'
import styled from 'styled-components'

// import arcadeIcon from '../assets/images/icon-arcade.svg';
// import advancedIcon from '../assets/images/icon-advanced.svg';
// import proIcon from '../assets/images/icon-pro.svg';
import ToggleSwitch from './ToggleSwitch';
import Plan from './Plan';
import { plans } from '../constant';
import { useGlobalContext } from '../context';

const Step2Form = () => {
  const { setStep } = useGlobalContext();
  const [isChecked, setIsChecked] = useState(false);
  const [activePlan, setActivePlan] = useState(0);

  return (
    <Wrapper>
      <form className="form">
        <div className="form-content">
          <h2>
            Select your plan
          </h2>
          <p>
            You have the option of monthly or yearly billing.
          </p>
          <div className="plan-container">
            {plans.map((plan, index) => {
              const { title, rate, icon } = plan;
              return (
                  <Plan
                    active={activePlan === index ? "active-plan": null }
                    icon={icon}
                    title={title}
                    isChecked={isChecked}
                    rate={rate}
                    index={index}
                    setActivePlan={setActivePlan}
                  />
                )
            })}
          </div>
          <div className="plan-mode">
            <p className={!isChecked ? 'active-mode': ''}>Monthly</p>
            <ToggleSwitch setIsChecked={setIsChecked} isChecked={isChecked}/>
            <p className={isChecked ? 'active-mode': ''}>Yearly</p>
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

  .plan-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;
    .plan {
      padding: 1rem;
      border: 1px solid var(--Light-gray);
      border-radius: 0.5rem;

      &:hover {
        border: 1px solid var(--purplish-blue)
      }

      .plan-icon {
        margin-bottom: 2.5rem;
      }
      .plan-title {
        color: var(--marine-blue);
        font-weight: 500;
        margin-bottom: 0.5rem;
      }
      .plan-rate {
        margin-bottom: 6px;
      }
      .plan-free {
        margin-bottom: 0;
        color: var(--marine-blue);
      }
    }
    .active-plan {
      border: 1px solid var(--purplish-blue);
      background-color: var(--Magnolia);
    }
  }
  .plan-mode {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: yellow;
    height: 40px;
    background-color: var(--Magnolia);
    border-radius: 0.5rem;
    p {
      margin-bottom: 0;
      color: var(--Cool-gray);
    }
    .active-mode {
      color: var(--marine-blue);
    }
    .switch {
      margin: 0 2rem;
    }
  }
`;

export default Step2Form
