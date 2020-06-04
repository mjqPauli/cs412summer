function* generateFibs() {
    let [val1, val2, result] = [0, 1, 0];
    while (true) {
        yield result;
        result = val1 + val2;
        [val1, val2] = [val2, result];
    }
}

function* evenFibs() {
    const fibs = generateFibs();
    while (true) {
        let result = fibs.next().value;
        if(result % 2 === 0){
            yield result;
        }
    }
}

const ef = evenFibs();
let count = 6;

while(count --> 0){
    console.log(`Next Even Fibonacci: ${ef.next().value}`)
}

