const quizData = [
    {
        question: "Linux est?",
        a: "Langage de programmation",
        b: "Logiciel",
        c: "Peripherique",
        d: "Systeme d'exploitation",
        correct: "d",
    },
    {
        question: "Quelle partie est le cerveau de l'ordinateur?",
        a: "Le disque dur",
        b: "Le processeur",
        c: "La RAM",
        d: "La souris",
        correct: "b",
    },
    {
        question: "En algebre booleenne, laquelle de ces proprites est vraie?",
        a: "a+0=a",
        b: "a+0=0",
        c: "a+0=1",
        d: "a+0=(non)a",
        correct: "a",
    },
    {
        question: "L'expression logique 'a ou b et False' est ?",
        a: "True si a est vrai ",
        b: "toujours vrai",
        c: "True si b est vrai",
        d: "toujours faux",
        correct: "a",
    },
{
        question: "combien de personnes faut-il mettre dans une salle pour qu'il y ait 1 chance sur 2 que deux entre elles soient nees le meme jour(pas forcement le meme annee)?",
        a: "96",
        b: "23",
        c: "19",
        d: "on ne peut pas savoir.",
        correct: "b",
    },
{
        question: "Combien de mots de passe differents peut-on composer avec 7 lettres majuscules?",
        a: "7!",
        b: "26^7",
        c: "7^26",
        d: "7^7",
        correct: "b",
    },
{
        question: "En algebre booleenne, laquelle de ces proprites est vraie?",
        a: "a+0=1",
        b: "a+a=a",
        c: "a+0=0",
        d: "a+(non)a=0",
        correct: "b",
    },
{
        question: "La serie 2+4+8+...+2^19 est?",
        a: "199997",
        b: "400005",
        c: "734561",
        d: "aucune reponse est juste.",
        correct: "d",
    },
{
        question: "La serie 1-1+1-1+1... jusqu'a l'infini est egale a?",
        a: "0",
        b: "1/2",
        c: "1994",
        d: "ca peut etre 0, ca peut etre 1",
        correct: "d",
    },
{
        question: "Un, Vn, Wn trois suites numeriques tel que Un <= Wn <= Vn?",
        a: "si Un converge et Vn converge, Wn converge.",
        b: "si Vn converge, Wn converge.",
        c: "si Un converge, Wn converge.",
        d: "aucune reponse est juste.",
        correct: "d",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerHTML = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    let body = document.getElementById("body")
    body.style.overflow="auto"
    let div = document.getElementById("quiz")
    let height = div.offsetHeight;
    console.log(height)
    if(height > 500)
    {
        body.style.margin ="5%"
    }
    else{
        body.style.margin="0%"
}
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick='window.location = "../bac.html"'>Go back</button>
           `
       }
    }
})