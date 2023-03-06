import React from 'react';
import styled from 'styled-components';

const ToggleSwitch = ({ isChecked, setIsChecked }) => {
    const handleChecked = () => {
        setIsChecked(!isChecked);
    }
    console.log(isChecked);
    return (
        <LabelWrapper className='switch' >
            <input type="checkbox" onClick={handleChecked}/>
            <span class="slider round"></span>
        </LabelWrapper>
    )
}

const LabelWrapper = styled.label`

    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;

    input {
    opacity: 0;
    width: 0;
    height: 0;
    }

    .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--marine-blue);
    transition: .4s;
    border-radius: 34px;
    }
    .slider:before {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
    }
    input:checked + .slider {
        background-color: var(--marine-blue);
    }
    input:checked + .slider:before {
        transform: translateX(26px);
    }
`;

export default ToggleSwitch
