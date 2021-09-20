let player1 = prompt("Enter Player 1 Name:");
let player2 = prompt("Enter Player 2 Name:");

//console.log(player1 + player2);

document.getElementById('player1').textContent = player1;
document.getElementById('player2').textContent = player2;

const player1Num = Math.floor(Math.random() * 6) + 1;
const player2Num = Math.floor(Math.random() * 6) + 1;


document.getElementById('img1').src = `./images/dice${player1Num}.png`;
document.getElementById('img2').src = `./images/dice${player2Num}.png`;