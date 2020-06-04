function* printWords (str = "All I know is something like a bird within her sang") {
    const strArray = str.split(' ');
    yield* strArray;
}

const words = printWords();
let word = words.next();

while (!word.done){
    console.log(word.value);
    word = words.next();
}