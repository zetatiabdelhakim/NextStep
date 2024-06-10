var note = document.getElementsByClassName('note')
info = function(){
    let moyen = 0
    let coef = [4,4,4,4,1,1,1,1,1,3,1,5,4,4,4,5,0.5,0.5]
    for (let i=0;i<note.length;i++){
        moyen+=note[i].value*coef[i]
    }
    return moyen/48
}
meca = function(){
    let moyen = 0
    let coef = [3,3,3,3,3.5,3.5,2,2,3.5,1,1,1,3,3,3,2.5,3.5,3.5]
    for (let i=0;i<note.length;i++){
        moyen+=note[i].value*coef[i]
    }
    return moyen/48
    }


send = document.getElementById("button")
send.onclick=function(){console.log(String(info())+"   "+ String(meca()))
info_1=info()
meca_1=meca()
html = document.getElementById("id")
html.innerHTML='<head><title>Quiz</title><link rel="stylesheet" type="text/css" href="css.css"></head><body id="body"><div class="quiz-container" id="quiz"> <div class="quiz-header"> <h2 id="question">Question Text</h2><ul><li><input type="radio" name="answer" id="a" class="answer"><label for="a" id="a_text">Answer</label></li><li><input type="radio" name="answer" id="b" class="answer"><label for="b" id="b_text">Answer</label></li><li><input type="radio" name="answer" id="c" class="answer"><label for="c" id="c_text">Answer</label></li><li><input type="radio" name="answer" id="d" class="answer"><label for="d" id="d_text">Answer</label> </li></ul></div><button id="submit">Submit</button></div></body><script src="js_note.js"></script>'

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
];


let ceof_quiz_info= [4,1,1,2,3]
let ceof_quiz_meca= [2,4,0,2,3]
var score_info = 0
var score_meca = 0


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
           score_info += ceof_quiz_info[currentQuiz]
           score_meca += ceof_quiz_meca[currentQuiz]
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
        score_info /=11
        score_meca /=11
        console.log(String(score_info*20)+"   "+ String(score_meca*20)) 
        score_info_total = String(score_info*0.3*20 + info_1*0.7 )
        score_meca_total = String(score_meca*0.3*20 + meca_1*0.7 )
           html.innerHTML =  `   
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NextStep - Laureat</title>

    <!-- Swiper CSS -->
    <link rel="stylesheet" href="../css/swiper-bundle.min.css">

    <!-- CSS -->
    <link rel="stylesheet" href="../css/style.css">

    <!-- Loading Bootstrap -->
    <link href="../css/bootstrap.css" rel="stylesheet">

    <!-- Loading Template CSS -->
    <link href="../css/style1.css" rel="stylesheet">
    <link href="../css/animate.css" rel="stylesheet">
    <link href="../css/style-magnific-popup.css" rel="stylesheet">

    <!-- Font Awesome -->
    <link href="../css/fonts.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">

    <!-- Google Fonts -->
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500,700,100' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700' rel='stylesheet' type='text/css'>

    <!-- Font Favicon -->
    <link rel="shortcut icon" href="../images/favicon.ico">
                                    
</head>
<body style="background-color: #EFEFEF;">
    <!--begin header -->
<header class="header">

    <!--begin nav -->
    <nav class="navbar navbar-default navbar-fixed-top">
        
        <!--begin container -->
        <div class="container">
    
            <!--begin navbar -->
            <div class="navbar-header">
                <button data-target="#navbar-collapse-02" data-toggle="collapse" class="navbar-toggle" type="button">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                                                
                <a href="../index.html" class="navbar-brand brand scrool"><span class="blue">Next</span>Step</a>
            </div>
                    
            <div id="navbar-collapse-02" class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">			      
                    <li><a href="#home">Acceuil</a></li>
                    <li><a href="../index.html">Se deconnecter</a></li>
                    <li><a href="#contact" class="purchase scrool">Contactez-nous</a></li>
                </ul>
            </div>
            <!--end navbar -->
                                
        </div>
        <!--end container -->
        
    </nav>
    <!--end nav -->
    
</header>
<!--end header -->

<!--begin home_wrapper -->
<section id="home" class="home-wrapper" style="background: url(../images/bg1.jpg);">

    <!--begin gradient_overlay -->
    <div class="gradient_overlay"></div>
    <!--end gradient_overlay -->
    
    <!--begin container-->
    <div class="container home-wrappe-inside"> 
        
        <!--begin row-->
        <div class="row">
            
            <!--begin col-md-12-->
            <div class="col-md-12 text-center">
                
                <h1 class="home-title wow fadeIn" data-wow-delay="0.5s">NextStep a prendre</h1>
                <div class="separator_wrapper">
                    <i class="icon icon-star-two red"></i>
                </div>
                <p class="home-subtitle wow fadeIn" data-wow-delay="1s">
                    Apres avoir effectue une analyse approfondie des notes des modules et des resultats des quiz, il est devenu evident que l'intelligence artificielle et l'ingenierie informatique vous conviendraient le mieux. Les informations et les competences couvertes dans ces domaines correspondent a vos interêts et a vos forces, et les poursuivre offrirait de nombreuses opportunites de croissance et de reussite dans le paysage technologique en evolution rapide. De plus, la forte demande de professionnels ayant une expertise en IA et en ingenierie informatique rend ces domaines particulierement attractifs pour les perspectives d'emploi et le developpement de carriere.
                </p>
                <h3 style="color: #ffff;">Bonne Chance!</h3> 
            </div>
            <!--end col-md-12-->
            
        </div>
        <!--end row-->
          
    </div>
    <!--end container-->
    
</section>
    <!--end home_wrapper -->
<section style=" display:block;  margin-top: 550px;">
    <center>
        <section class="section-white" id="blog">
    
            <!--begin container-->
            <div class="container">
    
                <!--begin row-->
                <div class="row margin-bottom-50">
                
                    <!--begin col-md-12-->
                    <div class="col-md-10 col-md-offset-1 text-center">
                        <h2 class="section-title">Mes Scores </h2>
                        
                        <div class="separator_wrapper">
                            <i class="icon icon-star-two blue"></i>
                        </div>
                
                        <p class="section-subtitle"></p>
                    </div>
                    <!--end col-md-12-->
                
                </div>
                <!--end row-->
                
                <!--begin row-->
                <div class="row">
    
                    <div class="col-sm-4">
                        
                        <!--begin blog-item -->
                        <div class="blog-item">
                            
                            <!--begin popup image -->
                            <div class="popup-wrapper">
                                <div class="popup-gallery">
                                    <a href="#"><img src="../images/fullDev.jpg" style="height: 200px; class="width-100" alt="pic"><span class="eye-wrapper2"><i class="icon icon-link eye-icon"></i></span></a>
                                </div>
                            </div>
                            <!--begin popup image -->
                                
                            <!--begin blog-item_inner -->
                            <div class="blog-item-inner">
                            
                                <h3 class="blog-title">IAGI</h3>
                                <p> Score: ${score_info_total}</p><br><br>
                                            
                
    
                            </div>
                            <!--end blog-item-inner -->
                            
                        </div>
                        <!--end blog-item -->
                            
                    </div>
                    <div class="col-sm-4">
                        
                        <!--begin blog-item -->
                        <div class="blog-item">
                            
                            <!--begin popup image -->
                            <div class="popup-wrapper">
                                <div class="popup-gallery">
                                    <a href="#"><img src="../images/mecanique-erp.webp" class="width-100" style="height: 200px; alt="pic"><span class="eye-wrapper2"><i class="icon icon-link eye-icon"></i></span></a>
                                </div>
                            </div>
                            <!--begin popup image -->
                                
                            <!--begin blog-item_inner -->
                            <div class="blog-item-inner">
                            
                                <h3 class="blog-title">GM</h3>
                                <p> Score: ${score_meca_total}</p><br><br>
                                            
                              
    
                            </div>
                            <!--end blog-item-inner -->
                            
                        </div>
                        <!--end blog-item -->
                            
                    </div>
                    
                    <!--begin col-sm-4 -->
                    <div class="col-sm-4">
                        
                        <!--begin blog-item -->
                        <div class="blog-item">
                            
                            <!--begin popup image -->
                            <div class="popup-wrapper">
                                <div class="popup-gallery">
                                    <a href="#"><img src="../images/choix.png" style="height: 200px;" class="width-100" alt="pic"><span class="eye-wrapper2"><i class="icon icon-link eye-icon"></i></span></a>
                                </div>
                            </div>
                            <!--begin popup image -->
                                
                            <!--begin blog-item_inner -->
                            <div class="blog-item-inner">
                            
                                <h3 class="blog-title">GI</h3>
                                <p> Score: 14.5</p><br><br>
                                            
                                
    
                            </div>
                            <!--end blog-item-inner -->
                            
                        </div>
                        <!--end blog-item -->
                            
                    </div>
                    <!--end col-sm-4-->
                 
                </div>
                <!--end row-->
        
            </div>
            <!--end container-->
        
        </section>
    </center>
</section>     
 
    




<section style="display: block; position: relative; margin-top: 0px;">
   <!--begin contact -->
   <section class="section-dark" id="contact">
    
    <!--begin container-->
    <div class="container">

        <!--begin row-->
        <div class="row margin-bottom-50">
        
            <!--begin col-md-10-->
            <div class="col-md-10 col-md-offset-1 text-center">
                <h2 class="section-title grey">Contactez-Nous</h2>
                
                <div class="separator_wrapper_white">
                    <i class="icon icon-star-two grey"></i>
                </div>
                <p class="section-subtitle grey">Vos questions,remarques,appreciation ou critiques sont toujours les bienvennus.</p>

            </div>
            <!--end col-md-10-->
        
        </div>
        <!--end row-->
        
        <!--begin row-->
        <div class="row">
    
            <!--begin success message -->
            <p class="contact_success_box" style="display:none;">We received your message and you'll hear from us soon. Thank You!</p>
            <!--end success message -->
            
            <!--begin contact form -->
            <form id="contact-form" class="contact" action="php/contact.php" method="post">
                <!--begin col-md-6-->
                <div class="col-md-12">
                   <center> <textarea class="contact-commnent white-input" rows="2" cols="20" name="contact_message" placeholder="Votre Message..."></textarea></center>
                </div>
                <!--end col-md-6-->
                
                <!--begin col-md-12-->
                <div class="col-md-12">
                    <input value="Envoyez" id="submit-button" class="contact-submit" type="submit">
                </div>
                <!--end col-md-12-->
                
            </form>
            <!--end contact form -->
        
        </div>
        <!--end row-->
        
  </div>
  <!--end container-->
        
</section>
<!--end contact-->
<!--begin footer -->
<div class="footer">
        
    <!--begin container -->
    <div class="container">
    
        <!--begin row -->
        <div class="row">
        
            <!--begin col-md-12 -->
            <div class="col-md-12 text-center">
                
                <!--begin copyright -->
                <div class="copyright">
                    <p class="footer-logo"><span class="blue">Next</span>Step</p>
                </div>
                <!--end copyright -->
                                                
                <!--begin footer_social -->
                <ul class="footer_social">
                    <li>
                        <a href="#">
                            <i class="icon icon-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="icon icon-pinterest"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="icon icon-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="icon icon-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="icon icon-skype"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="icon icon-dribble"></i>
                        </a>
                    </li>
                </ul>
                <!--end footer_social -->
                
            </div>
            <!--end col-md-6 -->
            
        </div>
        <!--end row -->
        
    </div>
    <!--end container -->
            
</div>
<!--end footer -->  
</section>
    
</body>

<!-- Swiper JS -->
<script src="../js/swiper-bundle.min.js"></script>

<!-- JavaScript -->
<script src="../js/script.js"></script>


<!-- Load JS here for greater good =============================-->
<script src="../js/jquery-1.11.3.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
<script src="../js/jquery.magnific-popup.min.js"></script>
<script src="../js/jquery.nav.js"></script>
<script src="../js/jquery.scrollTo-min.js"></script>
<script src="../js/SmoothScroll.js"></script>
<script src="../js/wow.js"></script>
<script src="../js/countdown.js"></script>
<script src="../js/custom.js"></script>
<script src="../js/plugins.js"></script>

           `

       }
    }
})
}

