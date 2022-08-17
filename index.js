function submitAnswers(){
  

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var correct = 0;


    if (question1 == "Object-Based"){

    correct ++;
        
    }
    
    
    if (question2 == "Immediate if"){
    
    correct ++;
    
    }
    
    if (question3 == "Block that combines a number of statements into a single compound statement"){
    
    correct ++;
    
    }
    if (question4 == "Declaration statements"){
    
    correct ++;
    }
    
    var percentage = (correct/4*100); 

document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_correct").innerHTML = "You got " + correct + " out of 4 correct. This is " + percentage +  "%";
document.getElementById("print1").innerHTML = "Correct Answer is OBJECT-BASED";
document.getElementById("print2").innerHTML = "Correct Answer is IMMEDIATE IF";
document.getElementById("print3").innerHTML = "Correct Answer is BLOCK THAT COMBINES A NUMBER OF STATEMENTS INTO A SINGLE COMPOUND STATEMENT";
document.getElementById("print4").innerHTML = "Correct Answer is DECLARATION STATEMENTS";

if (percentage > 80 ) {

    document.getElementById("percentage_score").innerHTML = " You have excellently passed!!! 🥳"

} else if (percentage > 50 & percentage < 80 ){

    document.getElementById("percentage_score").innerHTML = " You have fairly passed!!! 🙂"

} else{

    document.getElementById("percentage_score").innerHTML = " You have scored poorly! Please re-take the test!!! 😥"
}

}

function refreshPage(){
    window.location.reload();
  } 