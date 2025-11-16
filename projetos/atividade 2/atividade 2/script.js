var display = document.getElementById("display")
var btns = document.getElementsByClassName("btn")
var aux = ""


function getButton(value) {
    for(let btn of btns) {
        if(btn.textContent === value) return btn
    }
    return null
}


for (let btn of btns) {
    btn.addEventListener('mousedown', () => btn.style.backgroundImage = 'linear-gradient(gray, red)')
    btn.addEventListener('mouseup', () => btn.style.backgroundImage = 'linear-gradient(gray, black)')
    btn.addEventListener('mouseleave', () => btn.style.backgroundImage = 'linear-gradient(gray, black)')
}

document.addEventListener("keydown", function(event) {
    const key = event.key
    let btn
    
    if (/[0-9+/*\-.]/.test(key)) {
        event.preventDefault()
        btn = getButton(key)
        pressed(key)
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault()
        btn = getButton('=')
        calculate()
    } else if (key === 'Backspace') {
        event.preventDefault()
        btn = getButton('←')
        backspace()
    } else if (key === 'Delete' || key === 'c' || key === 'C') {
        event.preventDefault()
        btn = getButton('C')
        clearAll()
    }
    
    if(btn) btn.style.backgroundImage = 'linear-gradient(gray, red)'
})

document.addEventListener("keyup", function(event) {
    const key = event.key
    let btn
    
    if (/[0-9+/*\-.]/.test(key)) {
        btn = getButton(key)
    } else if (key === 'Enter' || key === '=') {
        btn = getButton('=')
    } else if (key === 'Backspace') {
        btn = getButton('←')
    } else if (key === 'Delete' || key === 'c' || key === 'C') {
        btn = getButton('C')
    }
    
    if(btn) btn.style.backgroundImage = 'linear-gradient(gray, black)'
})

// Funções da calculadora
function pressed(num) {
    aux += num
    display.textContent = aux
}

function clearAll() {
    display.textContent = aux = ""
}

function backspace() {
    aux = aux.slice(0, -1)
    display.textContent = aux
}

function calculate() {
    display.textContent = eval(aux)
}