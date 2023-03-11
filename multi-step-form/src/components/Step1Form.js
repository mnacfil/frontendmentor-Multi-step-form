import React, { useEffect } from 'react';
import styled from 'styled-components';
import FormControl from './FormControl'
import { useGlobalContext } from '../context';

const Step1Form = () => {
    const { setStep, info, handleChange, checkIfAllFieldFillUp } = useGlobalContext();

    const checker = () => {
        checkIfAllFieldFillUp();
        setStep(current => current + 1)
    }

    return (
        <Wrapper>
            <form className='form'>
                <div className="form-content">
                    <h2>Personal Info</h2>
                    <p>
                        Please provide your name, email address, and phone number.
                    </p>
                    <FormControl
                        name= "name"
                        label= "Name"
                        type= "text"
                        placeholder="e.g. Stephen King"
                        value={info.name.value}
                        handleChange={handleChange}
                        isEmpty={info.name.isEmpty}
                    />
                    <FormControl
                        name= "email"
                        label= "Email Address"
                        type= "email"
                        placeholder="e.g. stephenking@lorem.com"
                        value={info.email.value}
                        handleChange={handleChange}
                        isEmpty={info.email.isEmpty}
                    />
                    <FormControl
                        name= "phone"
                        label= "Phone number"
                        type= "text"
                        placeholder="e.g. +1 234 567 890"
                        value={info.phone.value}
                        handleChange={handleChange}
                        isEmpty={info.phone.isEmpty}
                    />
                </div>
                <div className='form-button' style={{ justifyContent: 'flex-end'}}>
                    <button
                        className='next-btn'
                        onClick={checker}
                        >
                            Next Step
                    </button>
                </div>
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.div`

width: 100%;


    .form-control {
        display: flex;
        flex-direction: column;
    }
    .form-control div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }
    .form-control div small {
        font-size: 12px !important;
        color: var(--strawberry-red);
        font-weight: 700;
    }

    .show-error-msg {
        display: block !important;
    }

    .form-control:not(:last-child) {
        margin-bottom: 1.5rem;
    }

    .form-control label {
        font-size: 14px;
        color: var(--marine-blue);
    }
    .form-input {
        padding: 12px;
        border-radius: 8px;
        border: 1px solid var(--Light-gray);
    }
    .form-input:focus {
        outline: 1px solid var(--purplish-blue);
        border: none;
    }
    .form-input::placeholder {
        color: var(--Cool-gray);
        font-weight: 700;
    }
`;

export default Step1Form
