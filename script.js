var btn = document.querySelectorAll('.box');
var move = true;
var winner = document.getElementById('winner'); // Use getElementById
var win = false;
var reset = document.getElementById('reset');

let sol = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
const checkwin = () => {
  for (let element of sol) {
    var1 = btn[element[0]].innerText;
    var2 = btn[element[1]].innerText;
    var3 = btn[element[2]].innerText;
    if (var1 !== "" && var2 !== "" && var3 !== "") {
      if (var1 === var2 && var2 === var3) {
        winner.innerText = `${var1} 
        won!`;
        winner.style.opacity = 0.7;
        console.log(var1 + " won");
        reset.style.zIndex = 101;
        break;
      }
    }
  }
}

reset.addEventListener('click', function() {
  for (let element of btn) {
    element.innerText = '';
    element.disabled = false;
  }
  winner.innerText = ''; // Reset the winner message
  winner.style.opacity = 0.0;
  // reset.style.zIndex = 0; // Adjusting reset button zIndex if necessary
  move = true; // Reset the move variable to start with 'X'
});

btn.forEach(element => {
  element.addEventListener('click', function() {
    if (move) {
      element.innerText = 'X';
      move = false;
    } else {
      element.innerText = 'O';
      move = true;
    }
    checkwin();
    element.disabled = true;
  });
});




