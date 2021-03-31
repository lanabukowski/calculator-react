export function parseActionsString (string) {
    const calculation = [];
    let current = '';
    for (let i = 0, ch; ch = string.charAt(i); i++) {
        if ('^*/+-'.indexOf(ch) > -1) {
            if (current == '' && ch == '-') {
                current = '-';
            } else {
                calculation.push(parseFloat(current), ch);
                current = '';
            }
        } else {
            current += string.charAt(i);
        }
    }
    if (current != '') {
        calculation.push(parseFloat(current));
    }
    return calculation;
}

export function calculate (calc) {
    const operations = [
               {'*': (a, b) => a * b, '/': (a, b) => a / b},
               {'+': (a, b) => a + b, '-': (a, b) => a - b},
            ];
    let newCalc = [];
    let currentOp;
    for (let i = 0; i < operations.length; i++) {
        for (let j = 0; j < calc.length; j++) {
            if (operations[i][calc[j]]) {
                currentOp = operations[i][calc[j]];
            } else if (currentOp) {
                newCalc[newCalc.length - 1] = 
                    currentOp(newCalc[newCalc.length - 1], calc[j]);
                currentOp = null;
            } else {
                newCalc.push(calc[j]);
            }
        }
        calc = newCalc;
        newCalc = [];
    }
    if (calc.length > 1) {
        alert('Invalid Mathematical Equation');
        return calc;
    } else {
        return calc[0];
    }
}