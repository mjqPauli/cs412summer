const evaluate = expression => {
    if (typeof expression === 'string') {
        switch (expression.charAt(1)) {
            case '+':
                return (expression) => Number(expression.charAt(0)) + Number(expression.charAt(2))
            case '-':
                return (expression) => Number(expression.charAt(0)) - Number(expression.charAt(2))
            case '*':
                return (expression) => Number(expression.charAt(0)) * Number(expression.charAt(2))
            case '/':
                return (expression) => Number(expression.charAt(0)) / Number(expression.charAt(2))
            default:
                return new Error('Operator is not supported')
        }
    } else{
        return new Error('Input must be a string')
    }
}

module.exports = {evaluate}