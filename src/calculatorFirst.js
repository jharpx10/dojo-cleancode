

function calculate(operation, a, b) {

    switch (operation) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "*":
            return a * b;
            break;
        case "/":
            return a / b;
            break;
        case "%":
            return a % b;
            break;
    }

}
module.exports.calculate = calculate;