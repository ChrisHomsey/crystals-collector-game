

//initialize

var generateNumbers = function() {

	score = 0;
	randomNumber = Math.floor(Math.random() * 100 + 20);
	
	colorVals = {
		red: Math.floor(Math.random() * 11 + 1),
		blue: Math.floor(Math.random() * 11 + 1),
		yellow: Math.floor(Math.random() * 11 + 1),
		green: Math.floor(Math.random() * 11 + 1)
	};
	$('#random-number').text(randomNumber);
	console.log("New Number: " + randomNumber);
}

var	score = 0;
var wins = 0;
var losses = 0;
generateNumbers();


var crystalGenerator
//Set random values for each gem


$('.crystal').click(function() {
	var val = $(this).attr('data-value');
	console.log(val + "... " + score + " + " + colorVals[val] + " = ");
	score += colorVals[val];
	console.log(score);

	if (score == randomNumber) {
		wins++;
		$('#wins').html(wins);
		console.log("WIN!");
		score = 0;

		generateNumbers();
	} else if (score > randomNumber) {
		losses++;
		$('#losses').html(losses);
		console.log("LOSE!");
		score: 0;
		generateNumbers();
	}
	$('#total-score').html(score);
})



