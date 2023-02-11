const inputEl = document.getElementById("input-el")
const boxTwo = document.getElementById("boxTwo")
const btnConvert = document.querySelector("#btn-convert")
const meterToFeet = 3.281
const feetToMeter = 0.304800
const literToGallon = 0.264
const gallonToLiter = 3.785411784
const kilogramToPounds = 2.204
const poundsToKilogram = 0.45359237
let num = 0

btnConvert.addEventListener("click", () => {
    num = inputEl.value
    render()
})

function render() {
    const meterRes = num * meterToFeet
    const feetRes = num * feetToMeter
    const literRes = num * literToGallon
    const gallonRes = num * gallonToLiter
    const kilogramRes = num * kilogramToPounds
    const poundsRes = num * poundsToKilogram

    const arrHeading = ["Length (Meter/Feet)", "Volume (Liters/Gallons)", "Mass (Kilograms/Pounds)"]
    boxTwo.style.display = "flex"

    const arrContent = [`${num} meters = ${meterRes.toFixed(2)} feet | ${num} feet = ${feetRes.toFixed(2)} meters`, `${num} liters = ${literRes.toFixed(2)} gallons | ${num} gallons = ${gallonRes.toFixed(2)} liters`, `${num} kilos = ${kilogramRes.toFixed(2)} pounds | ${num} pounds = ${poundsRes.toFixed(2)} kilos`];

    let result = ""

    for (let i = 0; i < arrHeading.length && arrContent.length; i++) {
        result += `
            <div class="innerBox">
                <p class="headingInner">${arrHeading[i]}</p>
                <p class="contentInner">${arrContent[i]}</p>
            </div>
    `
    }

    boxTwo.innerHTML = result
}
