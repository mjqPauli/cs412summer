const sortString = str => {
    if (typeof str === 'string') {
        return str.match(/[a-zA-Z]/g).sort().join('');
    }else{
        return new Error("Input must be a string")
    }
}

module.exports = {sortString}