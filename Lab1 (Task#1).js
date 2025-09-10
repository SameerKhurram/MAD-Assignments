                  // Lab # 01 (Task # 1)

// 1. ADD function (To check for undefined arguments)
function add(a, b) {
    if (a === undefined) {
        a = 0; 
    }
    if (b === undefined) {
        b = 0; 
    }
    return a + b;
}

// 2. SUBTRACT function (By using ES6 default parameters)
function subtract(a = 0, b = 0) {
    return a - b;
}

// 3. MULTIPLY function (By using ES6 rest parameters)
function multiply(...numbers) {
    let result = 1;
    for (let i = 0; i < numbers.length; i++) {
        result = result * numbers[i];
    }
    return result;
}

// 4. DIVIDE function (By using 'arguments' object)
function divide() {
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        result = result / arguments[i];
    }
    return result;
}

// Main 
console.log("Add(5, undefined) = " + add(5));          
console.log("Subtract(10, 4) = " + subtract(10, 4));   
console.log("Multiply(2, 3, 4) = " + multiply(2, 3, 4)); 
console.log("Divide(100, 2, 5) = " + divide(100, 2, 5));
