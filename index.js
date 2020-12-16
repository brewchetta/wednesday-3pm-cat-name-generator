const form = document.querySelector('#qwe')
const inputField = document.querySelector('#cat-name-input')
const output = document.querySelector('#output')

form.addEventListener("submit", generateCatName)

function generateCatName(event) {
  event.preventDefault()
  let word = inputField.value
  const wordArray = word.split('')
  wordArray.push("yowzer")
  // to shift more than one, look up .splice()
  const firstLetter = wordArray.shift()
  const secondLetter = wordArray.shift()
  wordArray.push(firstLetter, secondLetter)
  const newWord = wordArray.join("")
  output.innerText = newWord
}
