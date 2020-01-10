function calculateValidationNumber(input) {
    let sum = 0;

    while(input > 0 || sum > 9) {
        if (input == 0) {
            input = sum
            sum = 0;
        }
        sum += parseInt(input) % 10;
        input = parseInt(input) / 10;
    }
    return sum;
}

console.log(calculateValidationNumber(23478998));