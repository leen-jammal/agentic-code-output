function Calculator() {
    const [displayValue, setDisplayValue] = React.useState('0');
    const [operator, setOperator] = React.useState(null);
    const [prevValue, setPrevValue] = React.useState(null);

    const handleNumberClick = (number) => {
        setDisplayValue((prev) => (prev === '0' ? String(number) : prev + number));
    };

    const handleOperatorClick = (op) => {
        setOperator(op);
        setPrevValue(displayValue);
        setDisplayValue('0');
    };

    const handleEqualClick = () => {
        const num1 = parseFloat(prevValue);
        const num2 = parseFloat(displayValue);
        let result = 0;

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                return;
        }

        setDisplayValue(String(result));
        setOperator(null);
        setPrevValue(null);
    };

    const handleClearClick = () => {
        setDisplayValue('0');
        setOperator(null);
        setPrevValue(null);
    };

    const handleDecimalClick = () => {
        if (!displayValue.includes('.')) {
            setDisplayValue((prev) => prev + '.');
        }
    };

    return (
        React.createElement('div', { className: 'calculator' },
            React.createElement('div', { className: 'display' }, displayValue),
            React.createElement('div', { className: 'buttons' },
                React.createElement('button', { onClick: handleClearClick }, 'C'),
                React.createElement('button', { onClick: () => handleOperatorClick('/') }, '/'),
                React.createElement('button', { onClick: () => handleOperatorClick('*') }, '*'),
                React.createElement('button', { onClick: () => handleNumberClick(7) }, '7'),
                React.createElement('button', { onClick: () => handleNumberClick(8) }, '8'),
                React.createElement('button', { onClick: () => handleNumberClick(9) }, '9'),
                React.createElement('button', { onClick: () => handleOperatorClick('-') }, '-'),
                React.createElement('button', { onClick: () => handleNumberClick(4) }, '4'),
                React.createElement('button', { onClick: () => handleNumberClick(5) }, '5'),
                React.createElement('button', { onClick: () => handleNumberClick(6) }, '6'),
                React.createElement('button', { onClick: () => handleOperatorClick('+') }, '+'),
                React.createElement('button', { onClick: () => handleNumberClick(1) }, '1'),
                React.createElement('button', { onClick: () => handleNumberClick(2) }, '2'),
                React.createElement('button', { onClick: () => handleNumberClick(3) }, '3'),
                React.createElement('button', { onClick: handleEqualClick }, '='),
                React.createElement('button', { onClick: () => handleNumberClick(0) }, '0'),
                React.createElement('button', { onClick: handleDecimalClick }, '.')
            )
        )
    );
}

ReactDOM.render(
    React.createElement(Calculator, null),
    document.getElementById('root')
);