
const ul = document.createElement("ul")
const div = document.createElement("div")
let seconds = document.querySelector("#counter")
let rawInt = parseInt(seconds.innerText)
let counter = document.querySelector("#counter")
let numberLikes = {}
const pauseButton = document.querySelector("#pause")
const commentField = document.querySelector("#comment-input")
const submitButton = document.querySelector("#submit")
const commentList = document.querySelector("#list")
let counting = true

const countSeconds = () => {
    if (counting == true) {
        rawInt += 1
        seconds.innerText = rawInt
    }
}
let startCounter = () => {
        (setInterval(countSeconds, 1000))
}

pauseButton.addEventListener("click", () => {
    counting = !counting
    console.log(counting)
})

document.addEventListener("DOMContentLoaded", startCounter)



// PLUS AND MINUS BUTTONS
const minusButt = document.querySelector("#minus")
const minusOne = () => {
    rawInt -= 1
    seconds.innerText = rawInt
}
minusButt.addEventListener("click", minusOne)

const addButt = document.querySelector("#plus")
const addOne = () => {
    rawInt += 1
    seconds.innerText = rawInt
}
addButt.addEventListener("click", addOne)
//HEART BUTTON
let heartButt = document.querySelector("#heart")
let heartList = document.querySelector("#heartlist")

heartButt.addEventListener("click", () => {
    if (numberLikes[rawInt]) {
        numberLikes[rawInt] += 1
        heartList.innerHTML += `<li>${rawInt} has been liked ${numberLikes[rawInt]} times</li>` 
    } else {
        numberLikes[rawInt] = 1
        heartList.innerHTML += `<li>${rawInt} has been liked 1 time</li>` 
    }
})


//////////////////COMMENTS  ./////////////////
submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    commentList.innerHTML += `<li>${commentField.value}</li>`
    commentField.value = ""
})
