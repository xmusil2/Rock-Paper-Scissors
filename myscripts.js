let heading = document.createElement('h1');
heading.innerHTML = 'Rock paper scissors'
heading.className = 'start_game_heading'
document.body.appendChild(heading);

let btn = document.createElement('button');
btn.innerHTML = 'Play game';
btn.className = 'start_game_btn'
btn.onclick = function () {
    alert("Button is clicked");
  };
document.body.appendChild(btn);



const btns = document.querySelectorAll('.btn');
const result = document.getElementById('result');


btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const computerChoice = Math.floor(Math.random() * 3);
        const playerChoice = parseInt(btn.id);
        result.innerHTML = playRound(computerChoice, playerChoice);
    });
})

function playRound(computerChoice, playerChoice){
    let output = 'Error occured';

    switch(true) {
        //Computer selects rock
        case (computerChoice === 0):   
            if (playerChoice === 0) {output = "Draw<br> Computer" +
        " selection: Rocks <br>VS <br>Player selection: Rock"}
            if (playerChoice === 1) {output = "Player wins<br> Computer" +
            " selection: Rocks <br>VS <br>Player selection: Paper"}
            if (playerChoice === 2) {output = "Computer wins<br> Computer" +
            " selection: Rocks <br>VS <br>Player selection: Scissors"}
            return(output)

        //Computer selects paper
        case (computerChoice === 1):
            if (playerChoice === 0) {output = "Computer wins<br> Computer" +
            " selection: Paper <br>VS <br>Player selection: Rock"}
            if (playerChoice === 1) {output = "Draw<br> Computer" +
            " selection: Paper <br>VS <br>Player selection: Paper"}
            if (playerChoice === 2) {output = "Player wins<br> Computer" +
            " selection: Paper <br>VS <br>Player selection: Scissors"}
            return(output)

        //Computer selects scissors
        case (computerChoice === 2):
            if (playerChoice === 0) {output = "Player wins<br> Computer" +
            " selection: Scissors <br>VS <br>Player selection: Rock"}
            if (playerChoice === 1) {output = "Computer wins<br> Computer" +
            " selection: Scissors <br>VS <br>Player selection: Paper"}
            if (playerChoice === 2) {output = "Draw<br> Computer" +
            " selection: Scissors <br>VS <br>Player selection: Scissors"}
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
