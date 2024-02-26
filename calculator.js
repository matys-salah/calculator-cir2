let queue = []

function isAnOperator(elem) {
    return (elem == "+" || elem == "-" || elem == ":" || elem == "*")
}

function popFirstValue() {
    // Pops the first value of the array, it has to be a float value.
    value = '';
    while (queue.length > 0) {
        elem = queue[0];
        if (isAnOperator(elem)) {break;}
        value = value + elem;
        queue.shift()
    }
    return parseFloat(value);
}

function getResult() {
    console.log(queue);
    result = popFirstValue();
    while (queue.length > 0) {
        operator = queue.shift();
        v1 = popFirstValue();
        if (operator == '+') {result += v1}
        if (operator == '-') {result -= v1}
        if (operator == ':') {result /= v1}
        if (operator == '*') {result *= v1}
    }
    reset();
    document.getElementById("top").innerText = result
}

function reset() {
    queue = [];
    document.getElementById("top").innerText = "Result here";
}

function addToQueue(elem) {
    if ((queue.length == 0) & isAnOperator(elem)) {
        return
    }
    if (elem != null) {
        if (isAnOperator(elem) & isAnOperator(queue[queue.length-1])) {
            return
        }
    }
    document.getElementById("top").innerText = elem;
    queue.push(elem);
}