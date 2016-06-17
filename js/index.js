//util functions

var puppies;
puppies = "https://www.google.com/search?q=puppies&espv=2&biw=1145&bih=594&site=webhp&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjm34Pura3NAhUhHGMKHYEyBRIQ_AUIBigB";

function changeById(id, str) {
	document.getElementById(id).innerHTML = str;
}

//scoring system

var score;
var scoreMin;
var scoreMax;

function updateScore() {
	document.getElementById('scoreDisplay').innerHTML = score;
}

function resetScore() {
	score = 0;
	scoreMin = 0;
	scoreMax = 100;
	updateScore()
}

function setScoreMin(num) {
	scoreMin = num;
}

function getScoreMin() {
	return scoreMin;
}

function setScoreMax(num) {
	scoreMax = num;
}

function getScoreMax() {
	return scoreMax;
}

function addScore(num) {
	score = score + num;
	if (score > scoreMax) {
		score = scoreMax;
	}
	if (score < scoreMin) {
		score = scoreMin;
	}
	updateScore()
}

function subtractScore(num) {
	score = score - num;
	if (score > scoreMax) {
		score = scoreMax;
	}
	if (score < scoreMin) {
		score = scoreMin;
	}
	updateScore()
}

function getScore() {
	return score;
}

function setScore(num) {
	score = num;
	updateScore()
}

//drawing

function drawSphere(val) {
	sphere(val, val, val, val, val, val)
}

//math

function intToBin(num) {
	
}




































