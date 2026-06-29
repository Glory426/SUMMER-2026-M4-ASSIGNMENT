//STEP 1
// Function to divide a number by 2
function halfNumber(number) {
    let result = number / 2;
    console.log("Half of " + number + " is " + result + ".");
    return result;
}

//STEP 2
// Function to square a number
function squareNumber(number) {
    let result = number * number;
    console.log("The result of squaring the number " + number + " is " + result + ".");
    return result;
}


//STEP 3
// Function to calculate what percent the first number is of the second
function percentOf(num1, num2) {
    let result = (num1 / num2) * 100;
    console.log(num1 + " is " + result + "% of " + num2 + ".");
    return result;
}


//STEP 4

// Function to find the modulus of two numbers
function findModulus(num1, num2) {
    let result = num2 % num1;
    console.log(result + " is the modulus of " + num1 + " and " + num2 + ".");
    return result;
}

//STEP 5
// Test the functions
halfNumber(5);          // Half of 5 is 2.5.
squareNumber(3);        // The result of squaring the number 3 is 9.
percentOf(2, 4);        // 2 is 50% of 4.
findModulus(4, 10);     // 2 is the modulus of 4 and 10.