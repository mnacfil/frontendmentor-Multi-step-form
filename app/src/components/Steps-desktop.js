import React from 'react'
import styled from 'styled-components';
import sidebarBG from '../assets/images/bg-sidebar-desktop.svg'
import { useGlobalContext } from '../context';

const Steps = () => {
    const { step } = useGlobalContext();
    return (
        <Wrapper style={{ backgroundImage: `url(${sidebarBG})`}}>
            <div className='steps-container'>
                {/* <img src={sidebarBG} alt="" /> */}
                <div className="steps-item">
                    <span className={`circle ${step === 1 ? 'active-circle' : ''}`}>1</span>
                    <div>
                        <p>STEP 1</p>
                        <h4 className='title'>YOUR INFO</h4>
                    </div>
                </div>
                <div className="steps-item">
                    <span className={`circle ${step === 2 ? 'active-circle' : ''}`}>2</span>
                    <div>
                        <p>STEP 2</p>
                        <h4 className='title'>SELECT PLAN</h4>
                    </div>
                </div>
                <div className="steps-item">
                    <span className={`circle ${step === 3 ? 'active-circle' : ''}`}>3</span>
                    <div>
                        <p>STEP 3</p>
                        <h4 className='title'>ADD-ONS</h4>
                    </div>
                </div>
                <div className="steps-item">
                    <span className={`circle ${step === 4 ? 'active-circle' : ''}`}>4</span>
                    <div>
                        <p>STEP 4</p>
                        <h4 className='title'>SUMMARY</h4>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    /* background-image: url("../assets/images/bg-sidebar-desktop.svg"); */
    background-color: var(--Magnolia);
    border-radius: 1rem;
    width: 250px;


    .steps-container {
        padding: 2rem;
    }
    .steps-item {
        display: flex;
        align-items: center;
        height: 35px;
        margin-bottom: 2rem;
    }
    .steps-item div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    .circle {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        border: 1px solid var(--Light-gray);
        color: var(--White);
        display: grid;
        place-items: center;
        margin-right: 1rem;
    }
    .active-circle {
        background: var(--light-blue);
        color: var(--marine-blue)
    }
    .steps-item p {
        font-size: 12px;
        color: var(--Cool-gray);
    }
    .steps-item .title {
        color: var(--White);
        font-size: 14px;
        letter-spacing: 1px;
        font-weight: 500
    }
`;

export default Steps
