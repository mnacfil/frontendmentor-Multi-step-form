import React from 'react'
import styled from 'styled-components';
import CheckMark from '../assets/images/icon-checkmark.svg';

const Step3Form = () => {
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
            <article className='item active-adds-on'>
              <input type="checkbox" className='item-check' />
              <div>
                <h4>Online service</h4>
                <p>Access to multiplayer games</p>
              </div>
              <p className='item-rate'>
                +$1/mo
              </p>
            </article>
            <article className='item'>
              <input type="checkbox" className='item-check' />
              <div>
                <h4>Larger storage</h4>
                <p>Extra 1TB of cloud save</p>
              </div>
              <p className='item-rate'>
                +$2/mo
              </p>
            </article>
            <article className='item'>
              <input type="checkbox" className='item-check' />
              <div>
                <h4>Customizable Profile</h4>
                <p>Custom theme on your profile</p>
              </div>
              <p className='item-rate'>
                +$2/mo
              </p>
            </article>
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
      }
      /* .item-check:checked {
        background-color: var(--purplish-blue) !important;
        color: red;
      } */
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
    .item:not(:last-child) {
      margin-bottom: 1.5rem;
    }
    .item:hover {
      border: 1px solid var(--purplish-blue);
    }
    .active-adds-on {
      border: 1px solid var(--purplish-blue);
      background-color: var(--Magnolia);
    }
  }
`;

export default Step3Form
