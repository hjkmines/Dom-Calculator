const clear = document.querySelector("#clear")
const screen = document.querySelector("#screen")

screen.textContent = 3


clear.addEventListener("click", () => {
  screen.textContent = ""
})
