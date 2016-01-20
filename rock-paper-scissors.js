user_input = confirm("Want to play a game?")
console.log(user_input)

function win_or_lose(player_input, cpu_input){
		if ((player_input == 'paper' && cpu_input == 'rock') || (player_input == 'scissors' && cpu_input == 'paper') || (player_input == 'rock' && cpu_input == 'scissors'))
			status = 'win';
		else if (player_input == cpu_input)
			status = 'tie';
		else
			status = 'lose';
	return status;
}

function computer_choice(){
	x = Math.random();
	if (x < 0.33)
		cpu_input = "scissors";
	else if (x >= 0.33 && x < 0.66)
		cpu_input = "paper";
	else
		cpu_input = "rock";
	return cpu_input;
}

function rock_paper_scissors_game(){
	user_input = confirm("Want to play a game?");

	while (user_input == true) {
		cpu_input = computer_choice();
		player_input = prompt("Pick rock, paper, or scissors: ");
		// console.log(win_or_lose(player_input, cpu_input));
		
		if (win_or_lose(player_input, cpu_input) == 'win')
			alert("I picked " + cpu_input + '. You win!');
		else if (win_or_lose(player_input, cpu_input) == 'lose')
			alert("I picked " + cpu_input + '. Sorry, you lose!');
		else if(win_or_lose(player_input, cpu_input) == 'tie')
			alert('I picked ' + cpu_input + ', so we tied this time.');
		
		user_input = confirm('Want to go again?');
		if (user_input == false)
			break;
	}
}

rock_paper_scissors_game()

