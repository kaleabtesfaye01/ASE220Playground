// 'Q' for quitting
// 'C' for clearing
// 'K' for the continuing
function calculate() {
    let operand1 = parseInt(prompt("Enter the first operand"));
    console.log(operand1);

    var resume = true;
    while (resume) {
        let operand2 = parseInt(prompt("Enter the second operand"));
        console.log(operand2);
        let operator = prompt("Enter the operation");
        console.log(operator);

        operand1 = calculate2(operand1, operand2, operator);

        let action = prompt('Do you want to continue? ("K" to continue, "Q" to quit, "C" to clear');

        if (action == 'C') {
            console.log('Clearing...');
            operand1 = parseInt(prompt('Enter the first operand.'));
            console.log(operand1);
        } else if (action == 'K') {
            console.log('Resuming...');
        } else if (action == 'Q') {
            console.log('Quiting...');
            resume = false;
        } else {
            console.log('Command DNE');
        }
    }

    console.log('Done');
}

function calculate2(operand1, operand2, operator) {
    switch (operator) {
        case '+':
            operand1 += operand2;
            break;
        case '-':
            operand1 -= operand2;
            break;
        case '*':
            operand1 *= operand2;
            break;
        case '/':
            operand1 /= operand2;
        default:
            console.log("Command DNE");
            break;
    }
    console.log(operand1);
    return operand1;
}

calculate();