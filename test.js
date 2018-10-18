questions = [
    ['Who wrote the book "One man one Wife"?',['Chinua Achebe','Ngugi Wa Thiongo','T.M. Aluko','Ferdinard Oyono'] ,'T.M. Aluko', 0],
    ["Which Football Club is also called 'The troters?",[' Arsenal F C','Wigan Athletic','Barcellona F C','Bolton Wanderer'] ,'Bolton Wanderer', 100],
    ['Complete the title of the James Bond film The Man With The Golden...',['Gun','Tooth','Delicious','Eagle'] ,'Gun', 200],
    ['Which of these fruits shares its name with something superior or desirable?',['Apricot','Mango','Grapefruit','Plum'] ,'Plum', 300],
    ['In which sport do two teams pull at the opposite ends of a rope?',['Ice hockey','Basketball','Tug of war','Polo'] ,'Tug of war', 500],
    ['Where would a cowboy wear his chaps?',['On his hands','On his arms','On his legs','On his head'] ,'On his legs', 1000],
    ['Which of these zodiac signs is not represented by an animal that grows horns?',['Taurus','Capricorn','Aquarius','Aries'] ,'Aquarius', 2000],
    ['Sherpas and Gurkhas are native to which country?',['Russia','Ecuador','Nepal','Morocco'] ,'Nepal', 4000],
    ['Prime Minister Tony Blair was born in which country?',['England','Northern Ireland','Scotland','Wales'] ,'Scotland', 8000],
    ['Whose autobiography has the title, "A Long Walk to Freedom"?',['Ranulph Fiennes','Mother Teresa','Nelson Mandela','Mikhail Gorbachev'] ,'Nelson Mandela', 16000],
    ['Duffel coats are named after a town in which country?',['Belgium','Holland','Germany','Austria'] ,'Belgium', 32000],
    ["Complete this stage instruction in Shakespeare's 'The Winter's Tale', 'Exit, pursued by a...'?",['Tiger','Clown','Bear','Dog'] ,'Bear', 64000],
    ["The young of which creature is known as a 'squab'?",['Salmon','Horse','Pigeon','Octopus'] ,'Pigeon', 125000],
    ['Who is the patron saint of Spain?',['Saint James','Saint John','Saint Benedict','Saint Peter'] ,'Saint John', 150000],
    ['Which king was married to Eleanor of Aquitaine?',['Henry I','Henry II','Richard I','Henry V'] ,'Henry II', 1000000]
   ];
   
var bank = document.querySelector('.bank');
var correctAnswer;
var questionBox = document.querySelector('.question');
var questionNumber = document.querySelector('.question-number');
var answers = document.querySelector('.answers');
var restart = document.querySelector('.restart');
var fiftyFifty = document.querySelector('.fifty-fifty');
var freePass = document.querySelector('.free-pass');
var lifeLine = document.querySelector('.lifeline');

fiftyFifty.style.display = 'none';

Qnum = -1;
nextQuestion();
function nextQuestion() {
    Qnum = Qnum + 1;
    console.log("qnum is " + Qnum)
    var total = questions.length;
    if(Qnum < total) {
            askQuestion(Qnum);
    }
    else {
        bank.innerHTML("Balance : £1m");
        questionBox.innerHTML = "You're a millionaire";
        answers.style.display = 'none';
        restart.style.display = 'block';
        questionNumber.style.display = 'none';
        lifeLine.style.display = 'none';
    }
}

function askQuestion(counterNum) {

    questionBox.innerHTML=questions[counterNum][0];
    
    questionNumber.innerHTML = 'Question number ' + (counterNum + 1);

    answers.innerHTML='';
    answers.innerHTML+='<li id="first" data-answer=' + questions[counterNum][1][0].replace(/ /g,'') + '>' + questions[counterNum][1][0] + '</li>';
    answers.innerHTML+='<li id="second" data-answer=' + questions[counterNum][1][1].replace(/ /g,'') + '>' + questions[counterNum][1][1] + '</li>';
    answers.innerHTML+='<li id="third" data-answer=' + questions[counterNum][1][2].replace(/ /g,'') + '>' + questions[counterNum][1][2] + '</li>';
    answers.innerHTML+='<li id="fourth" data-answer=' + questions[counterNum][1][3].replace(/ /g,'') + '>' + questions[counterNum][1][3] + '</li>';
    console.log(answers);
    bank.innerHTML = "Balance : £" + questions[counterNum][3];
    correctAnswer = questions[counterNum][2];
    correctAnswer = correctAnswer.replace(/ /g,'').toLowerCase();
    console.log("Answer is " + correctAnswer);

      document.querySelectorAll('.answers li').forEach(function(el){
        el.addEventListener('click', function() {
        //   alert(this.getAttribute( 'data-answer' ));
        var UserAnswer = this.getAttribute( 'data-answer' ).replace(/ /g,'').toLowerCase();
        // alert(UserAnswer);
        if (UserAnswer == correctAnswer) {
            nextQuestion();
        }
        else {
    
            questionBox.innerHTML= "Sorry you've lost your money";
            bank.innerHTML = "Balance : £0";
            answers.style.display = 'none';
            restart.style.display = 'block';
            questionNumber.style.display = 'none';
            lifeLine.style.display = 'none';
            fiftyFifty.style.display = 'none';
            freePass.style.display = 'none';
        }
        });
      });

    //   fiftyFifty.addEventListener('click', function ( event ) {
    //     fiftyFifty.style.display = 'none';
    //     alert();
    //     alert(this.getAttribute( 'data-answer' ).replace(/ /g,'').toLowerCase());

    //     fiftyFiftycount = 0;
    //     var elements = document.querySelectorAll('.answers li');
    //     Array.prototype.forEach.call(elements, function(){
    //         alert(this.getAttribute( 'data-answer' ).replace(/ /g,'').toLowerCase());
    //         if(fiftyFiftycount < 2) {
    //             if(this.getAttribute( 'data-answer' ).replace(/ /g,'').toLowerCase() != correctAnswer) {
    //                 this.style.display = 'none';
    //                 fiftyFiftycount = fiftyFiftycount + 1;
    //             }
    //         }
    //     });
    //     }, false);

    // fiftyFifty.click(function(){
    //     fiftyFifty.hide();
    //     fiftyFiftycount = 0;
      
    //     $(".answers li").each(function() {
    //         if(fiftyFiftycount < 2) {
    //             if($(this).data('answer').replace(/ /g,'').toLowerCase() != correctAnswer) {
    //                 $(this).hide();
    //                 fiftyFiftycount = fiftyFiftycount + 1;
    //             }
    //         }
    //     });
    // });
}


fiftyFifty.addEventListener('click', function ( event ) {
        fiftyFifty.style.display = 'none';
        alert();
        // alert(this.getAttribute( 'data-answer' ).replace(/ /g,'').toLowerCase());

        fiftyFiftycount = 0;
        var elements = document.querySelectorAll('.answers li');
        Array.prototype.forEach.call(elements, function(){
            // alert(this);
            alert(elements.getAttribute( 'data-answer' ).replace(/ /g,'').toLowerCase());
            if(fiftyFiftycount < 2) {
                if(elements.getAttribute( 'data-answer' ).replace(/ /g,'').toLowerCase() != correctAnswer) {
                    alert();
                    this.style.display = 'none';
                    fiftyFiftycount = fiftyFiftycount + 1;
                }
            }
        });
        }, false);

function answerQuestion() {
    $('.answers li').off();           
}

restart.addEventListener('click', function ( event ) {
reStart();
}, false);

freePass.addEventListener('click', function ( event ) {
		
    freePass.style.display = 'none';

    // Jump to next question
    nextQuestion();
    
});

function reStart() {
		
    Qnum = -1;
    nextQuestion();

    answers.style.display = 'block';
    restart.style.display = 'none';
    questionNumber.style.display = 'block';
    lifeLine.style.display = 'block';
    fiftyFifty.style.display = 'block';
    freePass.style.display = 'block';
}
