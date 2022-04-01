let userName = window.prompt("Please enter your name")
let userScore = 0
let playAgain = true


function playGame(){
    for(let i = 0; i < questions.length; i++){
        let question = questions[i]
        let userAnswer = window.prompt(question.text)
        if(userAnswer === question.correctAnswer){
        userScore = userScore + 10
    }

}
window.alert("Your score is: "+userScore)
// let playAgain = window.prompt("Would you like to play again?")
//     if(playAgain === "yes")
//         playGame()
//     else window.prompt("Thanks for playing, Goodbye")
}




while (playAgain === true) {
    playGame()
    let userChoice = window.prompt("Would you like to play again? Answer Yes or No")
    if (userChoice === "Yes") {
        playAgain = true
    }else {
        playAgain = false
        window.alert("Thanks for playing!")
    }
}
