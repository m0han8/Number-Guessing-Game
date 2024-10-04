var msg1 = document.getElementById("p3");
var msg2 = document.getElementById("p1");
var msg3 = document.getElementById("p2");

var answer = 89; 
var no_of_guesses = 0;
var guessed_nums = [];

function play() {
    var user_guess = parseInt(document.getElementById("guess").value);
    
    if (isNaN(user_guess)) {
        alert("Please enter a valid number!");
        return;
    }
    
    if (user_guess < 1 || user_guess > 100) {
        alert("Please enter a number between 1 and 100");
        return;
    }
    
    guessed_nums.push(user_guess);
    no_of_guesses++;

    if (user_guess < answer) {
        msg1.textContent = "Your guess is too low.";
    } else if (user_guess > answer) {
        msg1.textContent = "Your guess is too high.";
    } else {
        msg1.textContent = "Yippie You Win!!";
        document.getElementById("button").disabled = true;
    }

     msg2.textContent = "No. of guesses: " + no_of_guesses;
     msg3.textContent = "Guessed numbers are: " + guessed_nums.join(", ");
}

