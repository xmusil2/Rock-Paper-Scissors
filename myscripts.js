const heading = document.createElement('h1');
heading.innerHTML = 'Rock paper scissors'
heading.className = 'start_game_heading'
document.body.appendChild(heading);

const btn_start = document.createElement('button');
btn_start.innerHTML = 'Play game';
btn_start.className = 'start_game_btn'
btn_start.onclick = setUpGame;
document.body.appendChild(btn_start);

function setUpGame(){
    heading.remove();
    btn_start.remove();

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

            const computerChoice = Math.floor(Math.random() * 3);
            const playerChoice = parseInt(btn.id);
            informatice_heading.innerHTML = playRound(computerChoice, playerChoice);
        });
    });
}

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