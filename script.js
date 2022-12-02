const paragraphDay = document.querySelector(".day")
const paragraphHour = document.querySelector(".hour")
const paragraphMinutes = document.querySelector(".minutes")
const paragraphSeconds = document.querySelector(".seconds")

const inscrevaSe = document.querySelector("#inscreva-se")
const cancelar = document.querySelector("#cancelar")
const dialog = document.querySelector("dialog")

inscrevaSe.onclick = function() {
    dialog.show()
}

cancelar.onclick = function() {
    dialog.close()
}

function countDown() {
    const newYearDate = new Date("1 Jan 2025")
    const currentDate = new Date()

    const totalSeconds = (newYearDate - currentDate) / 1000

    const day = Math.floor(totalSeconds / 3600 / 24)
    const hour = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60

    paragraphDay.innerHTML = `${formatTime(day)} : &nbsp;`
    paragraphHour.innerHTML = `${formatTime(hour)} : &nbsp;`
    paragraphMinutes.innerHTML = `${formatTime(minutes)} : &nbsp;`
    paragraphSeconds.innerHTML = `${formatTime(seconds)}`
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}


countDown()

setInterval(countDown, 1000)