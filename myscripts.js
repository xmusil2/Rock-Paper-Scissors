const heading = document.createElement('h1');
heading.innerHTML = 'Rock paper scissors'
heading.className = 'start_game_heading'
document.body.appendChild(heading);

const btn_start = document.createElement('button');
btn_start.innerHTML = 'Play game';
btn_start.className = 'start_game_btn'
btn_start.onclick = function(){playGame()};
document.body.appendChild(btn_start);

function playGame(){
    heading.remove();
    btn_start.remove();
    setUpGame();
}

let player_health = 5;
let computer_health = 5;

function setUpGame(){
    const healthDiv = document.createElement('div');
    healthDiv.className = 'healtbars';

    const playerHealthDiv = document.createElement('div');
    playerHealthDiv.className = 'playerHealthBar'
    const playerBar = document.createElement('h2');
    playerBar.innerHTML = 'Player healt:'

    const computerHealthDiv = document.createElement('div');
    computerHealthDiv.className = 'computerHealthBar'
    const computerBar = document.createElement('h2');
    computerBar.innerHTML = 'Computer healt:'

    playerHealthDiv.appendChild(playerBar);
    healthDiv.appendChild(playerHealthDiv);
    computerHealthDiv.appendChild(computerBar);
    healthDiv.appendChild(computerHealthDiv);

    for (var i = 0; i < 5; i++){
        const playerHeart = document.createElement('div');
        playerHeart.className = 'red';
        playerHeart.id = 'ph' + i;
        playerHeart.innerHTML = '❤'
        playerHealthDiv.appendChild(playerHeart);

        const computerrHeart = document.createElement('div');
        computerrHeart.className = 'red';
        computerrHeart.id = 'ch' + i;
        computerrHeart.innerHTML = '❤'
        computerHealthDiv.appendChild(computerrHeart);
    }
    document.body.appendChild(healthDiv);

    const informatice_heading = document.createElement('h1');
    informatice_heading.id = 'informatice_heading';
    informatice_heading.innerHTML = 'Select your choice';
    document.body.appendChild(informatice_heading);

    const selectdiv = document.createElement('div')
    selectdiv.className = 'player_selections';
    const btn_images = ['Rock', 'Paper', 'Scissors'];
    for (var i = 0; i < 3; i++){
        var btn = document.createElement('input');
        btn.className = 'btn_images';
        btn.id = i;
        btn.type = 'image';
        btn.src = './images/' + btn_images[i] +'.png';
        selectdiv.appendChild(btn);
    }
    document.body.appendChild(selectdiv);

    const btns = document.querySelectorAll('.btn_images');
    btns.forEach((btn) => {
        btn.addEventListener('click', () => {

            const computerChoice = 0;//Math.floor(Math.random() * 3);
            const playerChoice = parseInt(btn.id);
            informatice_heading.innerHTML = playRound(computerChoice, playerChoice);
        });
    });
}

let gameResult = 'Game is still in progress'

function endGame(){

    function playAgain(){
        btn_play_again.remove();
        for(let i = 0; i <5; i++){
            const playerResetHeart = document.getElementById('ph' + (i));
            const computerReserHeart = document.getElementById('ch' + (i));
            playerResetHeart.className = 'red';
            computerReserHeart.className = 'red';
            for(let i = 0; i < 3; i++){
                document.getElementById(i).disabled = false;
            }
        }       
    }
    player_health = 5;
    computer_health = 5;

    for(let i = 0; i < 3; i++){
        document.getElementById(i).disabled = true;
    }

    const btn_play_again = document.createElement('button');
    btn_play_again.innerHTML = 'Play again';
    btn_play_again.className = 'start_game_btn'
    btn_play_again.onclick = function(){playAgain()};
    document.body.appendChild(btn_play_again);
}

function calculateHearts(player_hearts, computer_hearts){
    if ((5 - player_hearts) != 0){
        const playerGreyHeart = document.getElementById('ph' + (player_hearts));
        if(playerGreyHeart)playerGreyHeart.className = 'grey';
        if(player_hearts == 0){
            gameResult = 'You have lost';
            endGame();
        }
    }
    if ((5 - computer_hearts) != 0){
        const computerGreyHeart = document.getElementById('ch' + (computer_hearts));
        if(computerGreyHeart)computerGreyHeart.className = 'grey';
        if(computer_hearts == 0){
            gameResult = 'You have won';
            endGame();
        }
    }
}

function playRound(computerChoice, playerChoice){
    let output = 'Error occured';

    switch(true) {
        //Computer selects rock
        case (computerChoice === 0):   
            if (playerChoice === 0) {output = "Draw<br> Computer" +
        " selection: Rocks <br>VS <br>Player selection: Rock"}
            if (playerChoice === 1) {
                computer_health--;
                console.log(player_health + ' x ' + computer_health);
                calculateHearts(player_health, computer_health);
                output = "Player wins<br> Computer" +
            " selection: Rocks <br>VS <br>Player selection: Paper"}
            if (playerChoice === 2) {
                player_health--;
                console.log(player_health + ' x ' + computer_health);
                calculateHearts(player_health, computer_health);
                output = "Computer wins<br> Computer" +
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