const startGameButton = document.querySelector(".startQuiz")
const questionsContainer = document.querySelector(".questionsContainer")
const answersContainer = document.querySelector(".answersContainer")
const questionText = document.querySelector(".question")
const nextQuestionButton = document.querySelector(".nextQuestion")
const linkHome = document.querySelector(".linkHome")
const linkDashboard = document.querySelector(".linkDashboard")
const containerQuiz = document.querySelector(".containerQuiz")


startGameButton.addEventListener("click", startGame)
nextQuestionButton.addEventListener("click", displayNextQuestion)


let currentQuestionIndex = 0
let totalCorrect = 0


function startGame(){
    startGameButton.classList.add("hide")
    questionsContainer.classList.remove("hide")
    linkHome.classList.add("hide")
    linkDashboard.classList.add("hide")
    containerQuiz.classList.add("containerQuizMaior")
    displayNextQuestion()
}


function displayNextQuestion(){
    resetState()

    if (questions.length === currentQuestionIndex) {
        return finishGame()
    }

    questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("button", "answer")
        newAnswer.textContent = answer.text
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }
        answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer)
    })
}


function resetState(){
    while(answersContainer.firstChild){
        answersContainer.removeChild(answersContainer.firstChild)
    }

    document.body.removeAttribute("class")
    nextQuestionButton.classList.add("hide")
}


function selectAnswer(event){
    const answerClicked = event.target

    if(answerClicked.dataset.correct){
        document.body.classList.add("correct")
        totalCorrect++
    } else {
        document.body.classList.add("incorrect")
    }

    document.querySelectorAll(".answer").forEach(button => {
        if (button.dataset.correct){
            button.classList.add("correct")
        } else {
            button.classList.add("incorrect")
        }

        button.disabled = true
    })

    nextQuestionButton.classList.remove("hide")
    currentQuestionIndex++
}


function finishGame(){
    const totalQuestion = questions.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestion)
    sessionStorage.setItem("questoesCorretas", totalCorrect);

    let message = ""

    switch (true) {
        case (performance >= 90):
            message = "Excelente, você sabe tudo sobre o São Paulo"
            break
        case (performance >= 70):
            message = "Muito Bem, você sabe muita coisa"
            break
        case (performance >= 50):
            message = "Ok, mas pode melhorar"
            break
        default:
            message = "Veja as histórias no site para melhorar sua pontuação"
    }

    questionsContainer.innerHTML = 
    `
    <p class="finalMessage">
    Você acertou ${totalCorrect} de ${totalQuestion} questões
    <span>
    Resultado: ${message}
    </span>
    </p>
    <button onclick=window.location.reload() class="button">
    Refazer teste
    </button>
    `
}

const questions = [
    {
        question: "Quem é o maior artilheiro da história do São Paulo ?",
        answers: [
            { text: "Rogério Ceni", correct: false },
            { text: "Serginho Chulapa", correct: true },
            { text: "Luis Fabiano", correct: false },
            { text: "Raí", correct: false }
        ]
    },
    {
        question: "Contra quem foi a final da Copa do Brasil de 2023 ?",
        answers: [
            { text: "Palmeiras", correct: false },
            { text: "Corinthians", correct: false },
            { text: "Fluminense", correct: false },
            { text: "Flamengo", correct: true }
        ]
    },
    {
        question: "Qual desses jogadores nunca jogou no São Paulo",
        answers: [
            { text: "Renato Gaúcho", correct: true },
            { text: "Aristizábal", correct: false },
            { text: "Clemente Rodrigues", correct: false },
            { text: "Saavedra", correct: false }
        ]
    },
    {
        question: "Qual ano o Morumbi foi inaugurado ?",
        answers: [
            { text: "1930", correct: false },
            { text: "1960", correct: true },
            { text: "1962", correct: false },
            { text: "1961", correct: false }
        ]
    },
    {
        question: "Qual a nacionalidade de Diego Lugano ?",
        answers: [
            { text: "Paraguaio", correct: false },
            { text: "Argentino", correct: false },
            { text: "Peruano", correct: false },
            { text: "Uruguaio", correct: true}
        ]
    },
    {
        question: "Quantas passagens o Hernanes tem no São Paulo ?",
        answers: [
            { text: "2", correct: false },
            { text: "4", correct: false },
            { text: "3", correct: true },
            { text: "1", correct: false }
        ]
    },
    {
        question: "Qual campeonato o Luciano foi artilheiro ?",
        answers: [
            { text: "Brasileirão 2021", correct: false },
            { text: "Paulistão 2021", correct: false },
            { text: "Brasileirão 2020", correct: true },
            { text: "Copa do Brasil 2020", correct: false }
        ]
    },
    {
        question: "Quantos estrangeiros o São Paulo tem atualmente no elenco ?",
        answers: [
            { text: "6", corretc: false },
            { text: "9", correct: false },
            { text: "8", correct: true },
            { text: "7", correct: false }
        ]
    },
    {
        question: "Quem é o jogador com mais partidas na história do São Paulo ?",
        answers: [
            { text: "Raí", correct: false },
            { text: "Zetti", correct: false },
            { text: "Rogério Ceni", correct: true },
            { text: "Cafú", correct: false }
        ]
    },
    {
        question: "Quais foram os times que o São Paulo de Telê Santana ganhou no mundial de 1992 e 1993 ?",
        answers: [
            { text: "Juventus e Real Madrid", correct: false },
            { text: "Ajax e Liverpool", correct: false },
            { text: "Barcelona e Olympique de Marseillie", correct: false },
            { text: "Barcelona e Milan", correct: true }
        ]
    },
    {
        question: "Quem o São Paulo ganhou na final da Libertadores de 2005 ?",
        answers: [
            { text: "Athlético Paranaense", correct: true },
            { text: "River Plate", correct: false },
            { text: "Atlético Paranaense", correct: false },
            { text: "Internacional", correct: false }
        ]
    },
    {
        question: "Qual técnico foi tricampeão Brasileiro com o São Paulo ?",
        answers: [
            { text: "Telê Santana", correct: false },
            { text: "Fernando Diniz", correct: false },
            { text: "Muricy Ramalho", correct: true },
            { text: "Paulo Autuori", correct: false }
        ]
    },
    {
        question: "Quantos campeonatos Brasileiros o São Paulo tem ?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: true },
            { text: "7", correct: false },
            { text: "8", correct: false }
        ]
    },
    {
        question: "Em quantas finais de Libertadores o São Paulo chegou, e quantas ele ganhou ?",
        answers: [
            { text: "Chegou em 6, ganhou 3", correct: true },
            { text: "Chegou em 7, ganhou 3", correct: false },
            { text: "Chegou em 4, ganhou 2", correct: false },
            { text: "Chegou em 7, ganhou 4", correct: false }
        ]
    },
    {
        question: "Quem fez os gols da final da Sudamericana de 2012 ?",
        answers: [
            { text: "Rogério Ceni e Luís Fabiano", correct: false },
            { text: "Luís Fabiano e Lucas Moura", correct: false },
            { text: "P.H Ganso e Jadson", correct: false },
            { text: "Lucas Moura e Osvaldo", correct: true }
        ]
    },{
        question: "Quem deu o passe para o gol do Luciano na final do Paulista de 2021 ?",
        answers: [
            { text: "Gabriel Sara", correct: false },
            { text: "Pablo", correct: false },
            { text: "Rodrigo Nestor", correct: true },
            { text: "Igor Gomes", correct: false }
        ]
    },{
        question: "Quem bateu a falta que resultou no gol do Nestor na final da Copa do Brasil de 2023 ?",
        answers: [
            { text: "Rafinha", correct: false },
            { text: "Lucas Moura", correct: false },
            { text: "Alisson", correct: false },
            { text: "Wellington Rato", correct: true }
        ]
    },{
        question: "Quem deu o passe para o gol do Mineiro no Mundial de 2005 ?",
        answers: [
            { text: "Aloísio Chulapa", correct: true },
            { text: "Amoroso", correct: false },
            { text: "Danilo", correct: false },
            { text: "Josué", correct: false }
        ]
    },{
        question: "Qual foi o agregado da semifinal da Copa do Brasil de 2023 ?",
        answers: [
            { text: "São Paulo 3 x 1 Corinthians", correct: false },
            { text: "São Paulo 3 x 1 Palmeiras", correct: false },
            { text: "São Paulo 3 x 2 Corinthians", correct: true },
            { text: "São Paulo 2 x 1 Corinthians", correct: false }
        ]
    },{
        question: "Qual o estádio da final do Mundial de 1992 ?",
        answers: [
            { text: "Estádio Olímpico de Pequim", correct: false },
            { text: "Estádio Olímpico de Tóquio", correct: true },
            { text: "Estádio Internacional de Yokohama", correct: false },
            { text: "Estádio Internacional de Pequim", correct: false }
        ]
    }, 
]