var carwhite = document.getElementById("white");
var carred = document.getElementById("red");
var resulta = document.getElementById("result");
var btns = document.getElementsByClassName("btn");
var resetar = document.getElementById("resetar");
var btnbranquin = document.getElementById("branco");
var btnvermeio = document.getElementById("vermelho");
var vrumvrum = document.getElementById("acelerar");
var desacelerar = document.getElementById("desacelerar");
var carroSelec = null;

var topInicialBranco = parseInt(getComputedStyle(carwhite).top);
var leftInicialBranco = parseInt(getComputedStyle(carwhite).left);
var topInicialVermelho = parseInt(getComputedStyle(carred).top);
var rightInicialVermelho = parseInt(getComputedStyle(carred).right);

var limiteTopo = 10;
var limiteBase = topInicialBranco;

carwhite.addEventListener("click", function () {
    resulta.textContent = "Branco";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    for (var i = 0; i < btns.length; i++) {
        btns[i].style.display = "block";
    }
    carroSelec = "branco";
});

carred.addEventListener("click", function () {
    resulta.textContent = "Vermelho";
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";
    for (var i = 0; i < btns.length; i++) {
        btns[i].style.display = "block";
    }
    carroSelec = "vermelho";
});

btnbranquin.addEventListener("click", function () {
    carwhite.click();
});
btnvermeio.addEventListener("click", function () {
    carred.click();
});

resetar.addEventListener("click", function () {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    resulta.textContent = "?";

    carwhite.style.top = topInicialBranco + "px";
    carwhite.style.left = leftInicialBranco + "px";
    carred.style.top = topInicialVermelho + "px";
    carred.style.right = rightInicialVermelho + "px";

    for (var i = 0; i < btns.length; i++) {
        btns[i].style.display = "none";
    }
    carroSelec = null;
});

vrumvrum.addEventListener("click", function () {
    if (!carroSelec) {
        alert("Selecione primeiro um dos carros.");
        return;
    }

    if (carroSelec == "branco") {
        var topAtual = parseInt(getComputedStyle(carwhite).top);
        var leftAtual = parseInt(getComputedStyle(carwhite).left);
        if (topAtual > limiteTopo) {
            carwhite.style.top = (topAtual - 10) + "px";
            carwhite.style.left = (leftAtual + 3) + "px";
        }
    }

    if (carroSelec == "vermelho") {
        var topAtual = parseInt(getComputedStyle(carred).top);
        var rightAtual = parseInt(getComputedStyle(carred).right);
        if (topAtual > limiteTopo) {
            carred.style.top = (topAtual - 10) + "px";
            carred.style.right = (rightAtual + 3) + "px";
        }
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        vrumvrum.click();
    }
});

desacelerar.addEventListener("click", function () {
    if (!carroSelec) {
        alert("Selecione primeiro um dos carros.");
        return;
    }

    if (carroSelec == "branco") {
        var topAtual = parseInt(getComputedStyle(carwhite).top);
        var leftAtual = parseInt(getComputedStyle(carwhite).left);
        if (topAtual < limiteBase) {
            carwhite.style.top = (topAtual + 10) + "px";
            carwhite.style.left = (leftAtual - 3) + "px";
        }
    }

    if (carroSelec == "vermelho") {
        var topAtual = parseInt(getComputedStyle(carred).top);
        var rightAtual = parseInt(getComputedStyle(carred).right);
        if (topAtual < limiteBase) {
            carred.style.top = (topAtual + 10) + "px";
            carred.style.right = (rightAtual - 3) + "px";
        }
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowDown") {
        desacelerar.click();
    }
});
