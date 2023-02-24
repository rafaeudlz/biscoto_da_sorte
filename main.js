const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnStart = document.querySelector("#btnStart")
const btnReset = document.querySelector("#btnReset")

btnStart.addEventListener('click', switchPhrases)
btnReset.addEventListener('click', resetScreens)

const phrase = [
    "Nem todas as tempestades vêm para atrapalhar a sua vida. Algumas vêm para limpar seu caminho.",
    "A persistência realiza o impossível.",
    "Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer.",
    "No meio da dificuldade encontra-se a oportunidade.",
    "É parte da cura o desejo de ser curado.",
    "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
    "Os problemas são oportunidades para se mostrar o que sabe.",
    "É em meio a dificuldade que se encontra a oportunidade.",
    "Tente de novo. Fracasse de novo. Mas fracasse melhor.",
]

let randomPhrases = phrase[Math.floor(Math.random() * phrase.length)]

function switchPhrases() {
    switchScreens()
    randomPhrase()
    screen2.querySelector("p").innerText = `${randomPhrases}`
    
}

function resetScreens() {
    switchScreens()
}

function switchScreens () {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function randomPhrase() {
    randomPhrases = phrase[Math.floor(Math.random() * phrase.length)]
}