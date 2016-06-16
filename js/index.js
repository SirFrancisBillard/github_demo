var score;
var scoreMin;
var scoreMax

function resetScore() {
	score = 0;
	scoreMin = 0;
	scoreMax = 100;
}

function setScoreMin(num) {
	scoreMin = num;
}

function setScoreMax(num) {
	scoreMax = num;
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

function changeById(id, str) {
	document.getElementById(id).innerHTML = str;
}
