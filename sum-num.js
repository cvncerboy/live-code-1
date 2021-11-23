/*
Sum of natural numbers
input: 100

ouput: 5050

1+2+3+4+5...+99+100 =  5050
*/


function sumOfNaturalsNum(n) {
    let numFirst = 0;
    for(let i = 0; i < n; i++){
        numFirst += i;
    }
    return numFirst;
}

console.log(sumOfNaturalsNum(100)) // 4950
console.log(sumOfNaturalsNum(400)) // 79800
console.log(sumOfNaturalsNum(2250)) // 79800
