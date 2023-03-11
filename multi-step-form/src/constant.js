import arcadeIcon from './assets/images/icon-arcade.svg';
import advancedIcon from './assets/images/icon-advanced.svg';
import proIcon from './assets/images/icon-pro.svg';

const plans = [
    { title: 'Arcade', rate: {monthly: 9, yearly: 90}, icon: arcadeIcon},
    { title: 'Advance', rate: {monthly: 12, yearly: 120}, icon: advancedIcon},
    { title: 'Arcade', rate: {monthly: 15, yearly: 150}, icon: proIcon},
]

const addsOn = [
    { title: 'Online Service', rate: 1, info: "Access to multiplayer games"},
    { title: 'Larger Storage', rate: 2, info: "Extra 1TB of cloud save"},
    { title: 'Customizable Profile', rate: 2, info: "Custom theme on your profile"},
]

export { plans, addsOn }