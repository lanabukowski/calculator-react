import React from 'react';
import './calculator.css';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import {calculate, parseActionsString} from '../../helpers/calculate';

class Calculator extends React.Component {
    state = {
        equation: '',
        result: 0,
        isResult: 0
    }

    componentWillMount() {
        document.addEventListener('keydown', event => {
            if ((event.key).match(/[0-9%\/*\-+\(\)=]/)) {
                console.log(event.key);
                this.handlePress(event.key);
            }
        })
    }

    onButtonPress = event => {
        const pressedButton = event.target.innerHTML;
        this.handlePress(pressedButton);
    }

    handlePress = pressedButton => {
        let equation = this.state.equation.toString();
        let result = this.state.result;
        let isResult = this.state.isResult;

        if (pressedButton === 'AC') return this.clear();
        else if (pressedButton === '←') {
            this.setState({equation: equation.substring(0, equation.length - 1), isResult:0});
        }
        else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.') {
            if(isResult) {
                this.setState({equation: pressedButton, isResult: 0});
            } else {
                this.setState({equation: equation += pressedButton});
                result = calculate(parseActionsString(equation));
                if (result === Infinity || isNaN(result)) {
                    alert("Invalid Mathematical Equation");
                    this.setState({result: 0, equation: ''});
                } else {
                    this.setState({result});
                }
            }
        } 
        else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1){
            console.log(equation, 'equationequation');
            this.setState({equation: equation += ' ' + pressedButton + ' ', isResult: 0});
        } 
        else if (pressedButton === '=') {
            result = calculate(parseActionsString(equation));
            this.setState({result: 0, equation: result, isResult: 1});
        }
    }

    clear() {
        this.setState({equation: '', result: 0, isResult: 0});
    }

    render() {
        return (
            <main className="calculator">
                <Display equation={this.state.equation} result={this.state.result} />
                <Keypad onButtonPress={this.onButtonPress} />
            </main>
        );
    }
}

export default Calculator;