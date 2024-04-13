// import from DOM
let display = document.querySelector('input')
let answer = ''

//when ever value = '' it's suppose show read 0
function updateDisplay() {
    if (display.value == '') {
        display.value = 0
    } else {
        display.value = display.value
    }
}


//append characters to the display
function addtoDisplay(input) {
    let displayValue = display.value

    //check if vulue is not 0 or error
    if (displayValue == 0 && !displayValue.includes('.') || displayValue == 'Error') {
        display.value = input
    }
    else {
        display.value += input
    }
}

//append operator to display
function appendDisplay(input) {

    let displayValue = display.value
    let lastLetter = displayValue.charAt(displayValue.length - 1)

    // check the last letter on display if not an operator
    if (lastLetter == '+' || lastLetter == '-' || lastLetter == '*' || lastLetter == '/' || lastLetter == '.') {
        let slicedValue = displayValue.slice(0, -1)
        slicedValue += input
        display.value = slicedValue
    } else {
        display.value += input
    }
}

// fuction to clear display value 0
function clearData() {
    display.value = 0
}

//fuctiom to calculate numbers
function calculate() {
    try {
        answer = eval(display.value)
    } catch (error) {
        answer = 'Error'
    }
    display.value = answer
}

//function to clear last charater on the display
function backDelete() {
    let displayValue = display.value

    if (displayValue !== 'Error' || displayValue != 0) {
        let slicedValue = displayValue.slice(0, -1)
        display.value = slicedValue
    } else {
        display.value = 0
    }

    //call updateDisplay function to imediately display 0 if the display.value = ''
    updateDisplay()
}