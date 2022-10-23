const btns = document.querySelectorAll('.btn');
const result = document.getElementById('result');

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const computerChoice = Math.floor(Math.random() * 3);
        const playerChoice = parseInt(btn.id);
        result.innerHTML = playRound(computerChoice, playerChoice);
    });
})

function playRound(computerChoice, playerChoice){
    let output = "Error occured";

    switch(true) {
        //Computer selects rock
        case (computerChoice === 0):   
            if (playerChoice === 0) {output = "Draw"}
            if (playerChoice === 1) {output = "Player wins"}
            if (playerChoice === 2) {output = "Computer wins"}
            return(output)

        //Computer selects paper
        case (computerChoice === 1):
            if (playerChoice === 0) {output = "Computer wins"}
            if (playerChoice === 1) {output = "Draw"}
            if (playerChoice === 2) {output = "Player wins"}
            return(output)

        //Computer selects scissors
        case (computerChoice === 2):
            if (playerChoice === 0) {output = "Player wins"}
            if (playerChoice === 1) {output = "Computer wins"}
            if (playerChoice === 2) {output = "Draw"}
            return(output)

        default:
            return(output)
    }
}



/* for (let i = 0; i < 5; i++) {
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    console.log("game: " + playRound(computerChoice, playerChoice));
 }  */
