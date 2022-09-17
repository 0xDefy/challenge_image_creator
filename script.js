const btn = document.getElementById("btn")
const daySet = document.getElementById("dayIn")
const input = document.getElementById("input")
const outScr = document.getElementById("image")
const ScrSht = document.getElementById("ScrSht")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    daySet.textContent = input.value
}) 

const takeShot = () => {
    let div = document.getElementById("inputImg")

    // using html2 canvas to screenshot and append it to output div

    html2canvas(div, {
        allowTaint: true,
        useCORS : true,
    }).then(function(canvas) {
        outScr.appendChild(canvas)
    })
}

ScrSht.addEventListener("click", () => takeShot())