import React from 'react';
import './keypad.css';
import Button from '../Button/Button';

const Keypad = props => (
    <section className="keypad">
            <Button type="primary" onButtonPress={props.onButtonPress}>AC</Button>
            <Button onButtonPress={props.onButtonPress}>&larr;</Button>
            <Button onButtonPress={props.onButtonPress}>%</Button>
            <Button type="operator" onButtonPress={props.onButtonPress}>/</Button>
            <Button onButtonPress={props.onButtonPress}>7</Button>
            <Button onButtonPress={props.onButtonPress}>8</Button>
            <Button onButtonPress={props.onButtonPress}>9</Button>
            <Button type="operator" onButtonPress={props.onButtonPress}>*</Button>
            <Button onButtonPress={props.onButtonPress}>4</Button>
            <Button onButtonPress={props.onButtonPress}>5</Button>
            <Button onButtonPress={props.onButtonPress}>6</Button>
            <Button type="operator" onButtonPress={props.onButtonPress}>-</Button>
            <Button onButtonPress={props.onButtonPress}>1</Button>
            <Button onButtonPress={props.onButtonPress}>2</Button>
            <Button onButtonPress={props.onButtonPress}>3</Button>
            <Button type="operator" onButtonPress={props.onButtonPress}>+</Button>
            <Button onButtonPress={props.onButtonPress}>.</Button>
            <Button onButtonPress={props.onButtonPress}>0</Button>
            <Button type="large" onButtonPress={props.onButtonPress}>=</Button>
    </section>
);

export default Keypad;