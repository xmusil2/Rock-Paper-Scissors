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
    const divNames = ['healtBarsDiv', 'resultDiv', 'computerChoiceDiv', 'vsDiv', 'playerchoiceDiv', 'optionsDiv', 'playAgainDiv']
    for (let i = 0; i < divNames.length; i++){
        const div = document.createElement('div');
        div.className = divNames[i];
        if ((i < 5) && (i > 0)){
            div.className += ' resultStyle';
        }
        document.body.appendChild(div);
    }

    const healthDiv = document.getElementsByClassName('healtBarsDiv');
    const playerHealthDiv = document.createElement('div');
    playerHealthDiv.className = 'playerHealthBar'
    const playerBar = document.createElement('h2');
    playerBar.innerHTML = 'Player healt:'

    const computerHealthDiv = document.createElement('div');
    computerHealthDiv.className = 'computerHealthBar'
    const computerBar = document.createElement('h2');
    computerBar.innerHTML = 'Computer healt:'

    playerHealthDiv.appendChild(playerBar);
    healthDiv[0].appendChild(playerHealthDiv);
    computerHealthDiv.appendChild(computerBar);
    healthDiv[0].appendChild(computerHealthDiv);

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
    const resultDiv = document.getElementsByClassName('resultDiv');
    const computerChoiceDiv = document.getElementsByClassName('computerChoiceDiv');
    const vsTxt = document.getElementsByClassName('vsDiv');

    const informatice_heading = document.getElementsByClassName('playerchoiceDiv');
    informatice_heading[0].innerHTML = 'Select your choice';

    const selectdiv = document.getElementsByClassName('optionsDiv');

    const btn_images = ['Rock', 'Paper', 'Scissors'];
    for (var i = 0; i < 3; i++){
        var btn = document.createElement('input');
        btn.className = 'btn_images';
        btn.id = i;
        btn.type = 'image';
        btn.src = './images/' + btn_images[i] +'.png';
        selectdiv[0].appendChild(btn);
    }

    const btns = document.querySelectorAll('.btn_images');
    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const computerChoice = 0;//Math.floor(Math.random() * 3);
            const playerChoice = parseInt(btn.id);
            let result = playRound(computerChoice, playerChoice);
            resultDiv[0].innerHTML = result[0];
            vsTxt[0].innerHTML = 'VS';
            computerChoiceDiv[0].innerHTML = 'Compuer choice: ' + result[1];
            informatice_heading[0].innerHTML = 'Player choice: ' + result[2];
        });
    });
}

function endGame(){
    function playAgain(){
        const resultDiv = document.getElementsByClassName('resultDiv');
        resultDiv[0].innerHTML = '';
        const computerChoiceDiv = document.getElementsByClassName('computerChoiceDiv');
        computerChoiceDiv[0].innerHTML = '';
        const vsTxt = document.getElementsByClassName('vsDiv');
        vsTxt[0].innerHTML = '';
        const informatice_heading = document.getElementsByClassName('playerchoiceDiv');
        informatice_heading[0].innerHTML = 'Select your choice';

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
    const playAgainDiv = document.getElementsByClassName('playAgainDiv');
    const btn_play_again = document.createElement('button');
    btn_play_again.innerHTML = 'Play again';
    btn_play_again.className = 'start_game_btn'
    btn_play_again.onclick = function(){playAgain()};
    playAgainDiv[0].appendChild(btn_play_again);
}

function calculateHearts(player_hearts, computer_hearts){

    if ((5 - player_hearts) != 0){
        const playerGreyHeart = document.getElementById('ph' + (player_hearts));
        if(playerGreyHeart)playerGreyHeart.className = 'grey';
        if(player_hearts == 0){
            console.log('You have lost');
            endGame();
        }
    }
    if ((5 - computer_hearts) != 0){
        const computerGreyHeart = document.getElementById('ch' + (computer_hearts));
        if(computerGreyHeart)computerGreyHeart.className = 'grey';
        if(computer_hearts == 0){
            console.log('You have won');
            endGame();
        }
    }
}

function playRound(computerChoice, playerChoice){
    const selections = ['Rock', 'Paper', 'Scissors'];
    const results = ['Draw', 'Computer wins', 'Player wins'];
    switch(true) {
        case (computerChoice == playerChoice):
            return([results[0], selections[computerChoice], selections[playerChoice]])

        case (computerChoice === 0):
            if (playerChoice === 1) {
                computer_health--;
                calculateHearts(player_health, computer_health);
                return([results[2], selections[computerChoice], selections[playerChoice]])     
            }
            if (playerChoice === 2) {
                player_health--;
                calculateHearts(player_health, computer_health);
                return([results[1], selections[computerChoice], selections[playerChoice]])
            }

        case (computerChoice === 1):
            if (playerChoice === 0) {
                player_health--;
                calculateHearts(player_health, computer_health);
                return([results[1], selections[computerChoice], selections[playerChoice]])
            }
            if (playerChoice === 2) {
                computer_health--;
                calculateHearts(player_health, computer_health);
                return([results[2], selections[computerChoice], selections[playerChoice]])
            }

        case (computerChoice === 2):
            if (playerChoice === 0) {
                computer_health--;
                calculateHearts(player_health, computer_health);
                return([results[2], selections[computerChoice], selections[playerChoice]])
            }
            if (playerChoice === 1) {
                player_health--;
                calculateHearts(player_health, computer_health);
                return([results[1], selections[computerChoice], selections[playerChoice]])
            }

        default:
            return(['Error', 'Error', 'Error'])
    }
}