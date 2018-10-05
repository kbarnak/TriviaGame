//Quiz Questions
var coffeeQuestions = [
    {
        question: "Which country produces and exports the most coffee?",
        choices: ["Indonesia", "Brazil", "Vietnam", "Colombia"],
        correct: 1
    }, {
        question: "The phrase 'cuppa joe' derives from:",
        choices: ["Joe DiMaggio", "Joe Cool", "Shoeless Joe Jackson", "G.I. Joe"],
        correct: 3
    }, {
        question: "Which writer reportedly drank 50 cups of coffee a day?",
        choices: ["Shakespear", "Gertrude Stein", "Pushkin", "Voltaire"],
        correct: 3
    }, {
        question: "Starbucks is named for a character in which classic novel?",
        choices: ["The Lion, the Witch and the Wardrobe", "The Great Gatsby", "Moby Dick", "Battlestar Gallactica"],
        correct: 2
    }, {
        question: "Which brewing method is beloved because it preserves the oils in the coffee?",
        choices: ["French press", "Electric drip", "Percolator", "Cold brew"],
        correct: 0
    }, {
        question: "Cappuccino gets its name from a:",
        choices: ["Monastic order", "Breed of diary cow", "Machine to froth milk", "Puccini opera"],
        correct: 0
    }, {
        question: "Which of the following is the largest retailer of coffee-by-the cup?",
        choices: ["Starbucks", "Dunkin' Donuts", "Hilton Hotels", "7-Eleven"],
        correct: 1
    }, {
        question: "When you drink a cup of coffee, you'll feel the caffeine effects about how long after?",
        choices: ["5 minutes", "10 minutes", "30 minutes", "60 minutes"],
        correct: 3
    }, {
        question: "Which is considered the best tasting coffee bean?",
        choices: ["Robusta", "Kona", "Wontkins", "Arabica"],
        correct: 3
    }, {
        question: "Coffee may offer protection against which ailment?",
        choices: ["Insomnia", "Athlete's foot", "Diabetes", "Leprosy"],
        correct: 2
    }, {
        question: "Coffee mixed with sweetened condensed milk is called...",
        choices: ["Irish Coffee", "Turkish Coffee", "Spanish Coffee", "Thai Coffee"],
        correct: 3
    }, {
        question: "Residents of which country drink the most coffee?",
        choices: ["Finland", "U.S.A", "Germany", "Italy"],
        correct: 0
    }
];

//Timer Variable needed to set a timer
var gameTimer;
var totalGameTime = 30;
var questionIndex = 0; //Refers to Coffee Question being asked from array

//Starting the timer when the game starts
function startGame() {
    $(".timer").text(totalGameTime);
    //set a timer
    startTimer();
    //set the score (numCorrect, numIncorrect)

}

//Functions that displays the Coffee Questions from the Array 
function displayQuestion() {

    //     // question++;

    //     var choicesArr = coffeeQuestions[questionIndex].choices;
    //     var buttonsArr = [];

    //     for (i = 0; i < choicesArr.length; i++) {
    //         var button = $('<button>');
    //         button.text(choicesArr[i]);
    //         button.attr("#coffee-questions", i);
    //         $("#answer-choices").append(button);
    //     }

    var currentQuestion = coffeeQuestions[questionIndex];
    var parentDiv = $("<div>");
    var pQuestionText = $("<p>");
    // $("").text(coffeeQuestions[questionIndex].text);
    parentDiv.append(pQuestionText);
    $(".quiz-questions").text(currentQuestion);
    console.log(this)
        ;
    //Dynamically display the options for the user

    // for (var i = 0; i < coffeeQuestions[questionIndex].choices.length; i++) {
    //     var optionButton = $("<button>");
    //     optionButton.addClass("btn btn-info");
    //     optionButton.text(currentQuestion.choices[i]);
    //     optionButton.val(i);

    //     optionButton.on("click", function () {
    //         console.log(this);
    //     });
    //     parentDiv.append();
    //     $(".quiz-questions").append(parentDiv);
    // }
}

//On CLICK function that starts the game by hiding the instructions (going back to first setTimer function) and displaying the quiz coffee questions
$("#start-button").on("click", function () {
    $(".rules").hide();
    //THIS represents the button that was clicked on
    $(this).hide();

    //start the game
    startGame();

    //display questions
    displayQuestion();
});


//Organize Code

//Callback Function

function endGame() {
    $('#reset').on('click', function () {
        // reset all variables and counts
        clickCount = 0;
        questionCount = 0;
        score = 0;
        gameTimer;
        totalGameTime = 30;
    })
}

//Display timer functions that makes the timer visible in the HTML and reduces the seconds remaining
function startTimer() {
    gameTimer = setInterval(function () {
        totalGameTime--;
        $(".timer").text(totalGameTime);

        if (totalGameTime === 0) {
            setInterval(gameTimer);
            endGame();
            console.log(this);
        }
    }, 1000);
}

//Event Delegation
//Handles dynamically generated buttons
// $(document).on("click", ".correct", function () { });
// console.log(this);
// function endGame() {
    //display message
    //reste the game
// }