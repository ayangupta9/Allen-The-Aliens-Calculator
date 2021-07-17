
const numberBtns = Array.from(document.getElementsByClassName('numberBtn'))
const operatorBtns = Array.from(document.getElementsByClassName('operatorBtn'))

const numberDisplay = document.getElementById('numberDisplay')
const operatorDisplay = document.getElementById('operatorDisplay')

const equate = document.getElementById('equate')
const clear = document.getElementById('clear')

let operatorEnabled
let number1 = 0
let number2 = 0
let operator
let result

var items = document.querySelectorAll('.circle div')

for (var i = 0, l = items.length; i < l; i++) {
  items[i].style.left =
    (50 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(
      4
    ) + '%'

  items[i].style.top =
    (50 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(
      4
    ) + '%'
}

var items2 = document.querySelectorAll('.circle2 div')

for (var i = 0, l = items2.length; i < l; i++) {
  items2[i].style.left =
    (50 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(
      4
    ) + '%'

  items2[i].style.top =
    (50 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(
      4
    ) + '%'
}

numberBtns.forEach(numberBtn => {
  numberBtn.addEventListener('click', e => {
    if (!operatorEnabled) {
      number1 = parseInt(e.target.innerText) + 10 * number1
      numberDisplay.innerText = number1
    } else {
      number2 = parseInt(e.target.innerText) + 10 * number2
      numberDisplay.innerText = number2
    }
  })
})

operatorBtns.forEach(operatorBtn => {
  operatorBtn.addEventListener('click', e => {
    if (!operatorEnabled) {
      operator = e.target.innerText
      operatorDisplay.innerText = operator

      if (numberDisplay.innerText == result) {
        number1 = result
        numberDisplay.innerText = number1
      }
      operatorEnabled = true
    }
  })
})

equate.addEventListener('click', e => {
  if (operator === undefined) {
    alert('Enter an operator')
  } else {
    switch (operator) {
      case '+':
        result = number1 + number2
        break
      case '*':
        result = number1 * number2
        break
      case '/':
        result = number1 / number2
        break
      case '-':
        result = number1 - number2
        break
    }
    numberDisplay.innerText = result
    number2 = 0
    number1 = 0
    operatorEnabled = false
    operator = undefined
  }
})

clear.addEventListener('click', e => {
  number1 = 0
  number2 = 0
  result = undefined
  operator = undefined
  operatorEnabled = false
  numberDisplay.innerText = ''
  operatorDisplay.innerText = ''
})
