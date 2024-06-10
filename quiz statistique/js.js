const quizData = [
    {
        question: 'Si la roue A tourne dans le sens anti-horaire, dans quel sens tourne la roue C? <br> <img src="meca-1.png" alt="">',
        a: "Horaire",
        b: "Anti horaire",
        c: "je ne sais pas",
        d: "Ca depend de la roue B",
        correct: "b",
    },
    {
        question: ' Si la roue A fait 4 tours, combien de tours fait la roue C?<br> <img src="meca-2.png" alt="">',
        a: "2 tours",
        b: "4 tours",
        c: "8 tours",
        d: "Autre reponse",
        correct: "b",
    },
    {
        question: 'Combien de poulies tournent dans le meme sens que la poulie A? Ne pas compter la poulie A<br> <img src="meca-4.png" alt="">',
        a: "1 poulie (+ la poulie A)",
        b: "2 poulie (+ la poulie A)",
        c: "3 poulie (+ la poulie A)",
        d: "aucune poulie",
        correct: "c",
    },
    {
        question: 'Quelle masse doit etre ajoutee pour equilibrer la balance?<br> <img src="meca-7.png" alt="">',
        a: "15 kg",
        b: "20 kg",
        c: "30 kg",
        d: "40 kg",
        correct: "b",
    },
{
        question: ' Une masse de 10kg comprime deux ressorts identiques en serie de 10cm. Quelle est cette distance si les ressorts sont mis en parallele?<br> <img src="meca-10.png" alt="">',
        a: "2.5 cm",
        b: "5 cm",
        c: "7 cm",
        d: "10 cm",
        correct: "a",
    },
{
        question: ' Lequel de ces reservoirs sera entierement rempli en premier?<br> <img src="meca-3.png" alt="">',
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "a",
    },
{
        question: 'Quel outil permet de serrer plus facilement le boulon?<br> <img src="meca-11.png" alt="">',
        a: "A",
        b: "B",
        c: "Identiques dans les deux cas",
        d: "Aucune reponse",
        correct: "a",
    },
{
        question: 'Cette figure subit une rotation de 225 degre dans le sens horaire. Quelle figure en est le resultat ?<br> <img src="rot-3.png" alt="">',
        a: "2",
        b: "3",
        c: "4",
        d: "5",
        correct: "d",
    },
{
        question: 'Cette figure subit une symetrie sur l axe horizontal.Quelle figure en est le resultat ?<br> <img src="sym-6.png" alt="">',
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "d",
    },
{
        question: "Trouvez le nombre manquant <br> 3 5 9 ? 23 33 ",
        a: "12",
        b: "15",
        c: "18",
        d: "20",
        correct: "b",
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