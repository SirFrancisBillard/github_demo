var score;
var canScoreNegs;

function resetScore() {
	score = 0;
	canScoreNegs = false;
}

function setCanScoreNegs(bool) {
	canScoreNegs = bool;
}

function addScore(num) {
	score = score + num;
}

function subtractScore(num) {
	score = score - num;
	if canScoreNegs {
		// nothing
	} else {
		if score < 0 {
			score = 0;
		}
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
