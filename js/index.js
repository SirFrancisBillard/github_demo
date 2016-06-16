//util functions

function changeById(id, str) {
	document.getElementById(id).innerHTML = str;
}

//scoring system

var score;
var scoreMin;
var scoreMax;

function resetScore() {
	score = 0;
	scoreMin = 0;
	scoreMax = 100;
}

function updateScore() {
	document.getElementById('scoreDisplay').innerHTML = score;
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
}

function subtractScore(num) {
	score = score - num;
	if (score > scoreMax) {
		score = scoreMax;
	}
	if (score < scoreMin) {
		score = scoreMin;
	}

}

function getScore() {
	return score;
}

function setScore(num) {
	score = num;
}

