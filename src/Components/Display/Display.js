import React from 'react';
import './display.css'
import Result from '../Display/Result';
import Actions from '../Display/Actions';

const screen = (props) => (
    <section className="screen">
        <Actions>{props.equation}</Actions>
        <Result>{props.result}</Result>
    </section>
);

export default screen;