const countToDate = new Date().setHours(new Date().getHours())
let previousTimeBetweenDates
setInterval(() => {
  const currentDate = new Date()
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000)
  flipAllCards(timeBetweenDates)
  console.log(timeBetweenDates)
  previousTimeBetweenDates = timeBetweenDates
}, 250)


function flipAllCards(time) {
  let tempo = new Date()
  flip(document.querySelector("[data-hours-tens]"), Math.floor(tempo.getHours()/10))
  flip(document.querySelector("[data-hours-ones]"), tempo.getHours() % 10)
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(tempo.getMinutes() / 10))
  flip(document.querySelector("[data-minutes-ones]"), tempo.getMinutes() % 10)
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(tempo.getSeconds() / 10))
  flip(document.querySelector("[data-seconds-ones]"), tempo.getSeconds() % 10)
}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top")
  const startNumber = parseInt(topHalf.textContent)
  if (newNumber === startNumber) return

  const bottomHalf = flipCard.querySelector(".bottom")
  const topFlip = document.createElement("div")
  topFlip.classList.add("top-flip")
  const bottomFlip = document.createElement("div")
  bottomFlip.classList.add("bottom-flip")

  top.textContent = startNumber
  bottomHalf.textContent = startNumber
  topFlip.textContent = startNumber
  bottomFlip.textContent = newNumber

  topFlip.addEventListener("animationstart", e => {
    topHalf.textContent = newNumber
  })
  topFlip.addEventListener("animationend", e => {
    topFlip.remove()
  })
  bottomFlip.addEventListener("animationend", e => {
    bottomHalf.textContent = newNumber
    bottomFlip.remove()
  })
  flipCard.append(topFlip, bottomFlip)
}