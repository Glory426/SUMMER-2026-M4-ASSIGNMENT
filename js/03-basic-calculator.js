// ADD A FUNCTION CALLED CALCULATE
// Function to perform the calculation
function calculate(x, y, operation) {
    switch (operation) {
        case "add":
            return x + y;

        case "subtract":
            return x - y;

        case "multiply":
            return x * y;

        case "divide":
            return x / y;

        default:
            return null;
    }
}

let result;
let operation;

do {


// COLLECT FIRST NUMBER FROM USER
    const x = Number(window.prompt("Enter the first number:")); number:"))


// COLLECT SECOND NUMBER FROM USER
    const y = Number(window.prompt("Enter the second number:"));


// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
     operation = window.prompt(
        "Enter an operation (add, subtract, multiply, divide):"
    ).toLowerCase();

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
 // Calculate the result
    result = calculate(x, y, operation);

//Return result within an alert
  result = calculate(x, y, operation);

    if (result === null) {
        window.alert(
            "Invalid operation! Please enter add, subtract, multiply, or divide."
        );
    } else {
        window.alert(result);
    }
} while (result === null);