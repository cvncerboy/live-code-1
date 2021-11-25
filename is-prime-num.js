/*
Cek apakah sebuah bilangan adalah bilangan prima

Input: 23
Output: 23 adalah bilangan prima

Edge Case; jika memasukan 0 atau angka negative maka return "harus memasukan angka mulai dari 2"
*/



function isPrime(number) {
    let primeResult = 0;
    for(let i = 0; i < number; i++){
        if(number % i == 0){
            primeResult++;
        }
    }
    if(primeResult != 0){
        return `${number} adalah bilangan prima`;
    } else if(primeResult <= 0){
        return 'harus memasukan angka mulai dari 2';
    }
}

console.log(isPrime(23)) // 23 adalah bilangan prima
console.log(isPrime(7)) // 23 adalah bilangan prima
console.log(isPrime(0)) // harus memasukan angka mulai dari 2
console.log(isPrime(1)) // harus memasukan angka mulai dari 2
