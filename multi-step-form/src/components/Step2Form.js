import React from 'react'
import styled from 'styled-components'

import arcadeIcon from '../assets/images/icon-arcade.svg';
import advancedIcon from '../assets/images/icon-advanced.svg';
import proIcon from '../assets/images/icon-pro.svg';
import ToggleSwitch from './ToggleSwitch';

const Step2Form = () => {
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
            <article className='plan active-plan'>
              <div className='plan-icon'>
                <img src={arcadeIcon} alt="arcade icon" />
              </div>
              <h4 className='plan-title'>
                Arcade
              </h4>
              <p className='plan-rate'>
                $9/mon
              </p>
            </article>
            <article className='plan'>
              <div className='plan-icon'>
                <img src={advancedIcon} alt="advance icon" />
              </div>
              <h4 className='plan-title'>
                Advance
              </h4>
              <p className='plan-rate'>
                $12/mon
              </p>
            </article>
            <article className='plan'>
              <div className='plan-icon'>
                <img src={proIcon} alt="pro" />
              </div>
              <h4 className='plan-title'>
                Pro
              </h4>
              <p className='plan-rate'>
                $15/mon
              </p>
            </article>
          </div>
          <div className="plan-mode">
            <p className='active-mode'>Monthly</p>
            <ToggleSwitch />
            <p>Yearly</p>
          </div>
        </div>
        <div className='form-button'>
          <a href="#" className='goBack-btn'>Go back</a>
          <button className='next-btn'>Next Step</button>
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
        margin-bottom: 0;
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
