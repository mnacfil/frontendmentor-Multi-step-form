import React from 'react';
import styled from 'styled-components';
import FormControl from './FormControl'

const Step1Form = () => {
    return (
        <Wrapper>
            <form>
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
                    />
                    <FormControl
                        name= "email"
                        label= "Email Address"
                        type= "email"
                        placeholder="e.g. stephenking@lorem.com"
                    />
                    <FormControl
                        name= "phone"
                        label= "Phone number"
                        type= "text"
                        placeholder="e.g. +1 234 567 890"
                    />
                </div>
                <div className='form-button'>
                    <button className='next-btn'>Next Step</button>
                </div>
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.div`

width: 100%;
form {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
}
.form-content {
    padding: 2rem 0;
}
.form-button {
    display: flex;
    justify-content: flex-end;
    margin-top: 5rem;
}

    .form-content h2 {
        color: var(--marine-blue);
        font-size: 2rem;
        margin-bottom: 10px;
    }

    .form-content p {
        color: var(--Cool-gray);
        font-size: 14px;
        margin-bottom: 2rem;
    }

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

    .error-msg {
        display: none;
    }

    .show-error-msg {
        display: block;
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

    .next-btn {
        cursor: pointer;
        background-color: var(--marine-blue);
        color: var(--light-blue);
        padding: 14px 20px;
        border: none;
        border-radius: 8px;
        display: inline-block;
    }
`;

export default Step1Form
