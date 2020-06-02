const handler = (input,func) => func(input);


const expression1 = (input) => handler(input, function (str) {
    let result = str.split('c')
    for (let i = 1; i < result.length; i++){
        result[i] = 'c'+ result[i];
    }
    return result;
})

const expression2 = (input) => handler(input, function (str) {
    let result = {
        originalString: str,
        modifiedString: str.replace(/a/g,'A'),
        numberReplaced: str.match(/a/g).length,
        length: str.length
    }
    return result
})

module.exports = {expression1,expression2}