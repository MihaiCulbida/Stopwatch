console.log('Script loaded!')

const hourElement = document.querySelector('.hours')
const minuteElement = document.querySelector('.minutes')
const secondElement = document.querySelector('.seconds')
const millisecondElement = document.querySelector('.milliseconds')
const startButton = document.querySelector('.start')
const stopButton = document.querySelector('.stop')
const resetButton = document.querySelector('.reset')

console.log('Hour element:', hourElement)
console.log('Start button:', startButton)

let hour = 0,
    minute = 0,
    second = 0,
    millisecond = 0,
    interval

startButton.addEventListener('click', () => {
    console.log('Start button clicked!')
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

stopButton.addEventListener('click', () => {
    console.log('Stop button clicked!')
    clearInterval(interval)
})

resetButton.addEventListener('click', () => {
    console.log('Reset button clicked!')
    clearInterval(interval)
    hour = 0
    minute = 0
    second = 0
    millisecond = 0
    hourElement.innerText = "00"
    minuteElement.innerText = "00"
    secondElement.innerText = "00"
    millisecondElement.innerText = "00"
})

function startTimer() {
    millisecond++
    if(millisecond <= 9) {
        millisecondElement.innerText = "0" + millisecond
    } else {
        millisecondElement.innerText = millisecond
    }
    if (millisecond > 99) {
        second++
        if(second <= 9) {
            secondElement.innerText = "0" + second
        } else {
            secondElement.innerText = second
        }
        millisecond = 0
        millisecondElement.innerText = "00"
    }
    if (second > 59) {
        minute++
        if(minute <= 9) {
            minuteElement.innerText = "0" + minute
        } else {
            minuteElement.innerText = minute
        }
        second = 0
        secondElement.innerText = "00"
    }
    if (minute > 59) {
        hour++
        if(hour <= 9) {
            hourElement.innerText = "0" + hour
        } else {
            hourElement.innerText = hour
        }
        minute = 0
        minuteElement.innerText = "00"
    }
}