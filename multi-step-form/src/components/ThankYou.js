import React from 'react'
import styled from 'styled-components'
import ThankYouIcon from '../assets/images/icon-thank-you.svg';

const ThankYou = () => {
  return (
    <Wrapper>
      <form className="form">
        <div className="thank-you-container">
          <div className='icon-container'>
            <img src={ThankYouIcon} alt="" />
          </div>
          <h2>
            Thank you!
          </h2>
          <p>
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free
              to email us at support@loremgaming.com.
          </p>
        </div>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`

  .thank-you-container {
    display: grid;
    place-items: center;
    text-align: center;
    padding: 10rem 0;
    .icon-container {
      margin-bottom: 2rem;
    }

    h2 {
      margin-bottom: 1.5rem;
      color: var(--marine-blue);
    }

    p {
      margin: 0;
      color: var(--Cool-gray);
      font-size: 14px;
      line-height: 1.5;
    }
  }
`;


export default ThankYou
