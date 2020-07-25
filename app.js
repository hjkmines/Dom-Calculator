const clear = document.querySelector("#clear")
const screen = document.querySelector("#screen")
const buttons = document.querySelectorAll("span")
const operators = document.querySelectorAll(".operator")


clear.addEventListener("click", () => {
  screen.textContent = ""
})

buttons.forEach(node => {
  if (node.textContent == 0 || node.textContent == 1 || node.textContent == 2 || node.textContent == 3 || node.textContent == 4 || node.textContent == 5 || node.textContent == 6 || node.textContent == 7 || node.textContent == 8 || node.textContent == 9) {
    node.classList.add("number")
  }
})

const numbers = document.querySelectorAll(".number")

// input numbers
numbers.forEach(number => {
  number.addEventListener("click", event => {
    screen.textContent += event.target.textContent
  })
}) 

// operations 
operators.forEach(operator => {
  console.log(operator.textContent == "=")
  // if (operator.textContext == "+") {
  //   operator.addEventListener("click", () => {
  //     const divide1 = parseInt(screen.textContent)
  //     console.log(typeof divide1)

  //   })
  // }
})

