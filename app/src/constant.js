import arcadeIcon from './assets/images/icon-arcade.svg';
import advancedIcon from './assets/images/icon-advanced.svg';
import proIcon from './assets/images/icon-pro.svg';

const plans = [
    { title: 'Arcade', rate: {monthly: 9, yearly: 90}, icon: arcadeIcon},
    { title: 'Advance', rate: {monthly: 12, yearly: 120}, icon: advancedIcon},
    { title: 'Pro', rate: {monthly: 15, yearly: 150}, icon: proIcon},
]

const addsOn = [
    { title: 'Online Service', rate: {monthly: 1, yearly: 10}, info: "Access to multiplayer games", isChecked: false},
    { title: 'Larger Storage', rate: {monthly: 2, yearly: 20}, info: "Extra 1TB of cloud save", isChecked: false},
    { title: 'Customizable Profile', rate: {monthly: 2, yearly: 20}, info: "Custom theme on your profile", isChecked: false},
]

export { plans, addsOn }