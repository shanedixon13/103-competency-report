var hunger = 100;
var energy = 50;
var happy = 10;
var knowledge = 5;

function feed() {
	if (hunger > 0) {
		hunger = hunger - 10;
		display();
	}
	if (energy < 100) {
		energy = energy + 10;
		display();
	}
}

function play() {
	if (happy < 100) {
		happy = happy + 5;
		display();
	}
	if (energy > 0) {
		energy = energy - 10;
		display();
	}
	if (hunger < 100) {
		hunger = hunger + 10;
		display();
	}
}

function study() {
	if (happy > 0) {
		happy = happy - 5;
		display();
	}
	if (knowledge < 100) {
		knowledge = knowledge + 1;
		display();
	}
}

function display() {
	document.getElementById("info-c1").innerHTML = `
        <p><b>Hunger:</b> ${hunger}% <b>Energy:</b> ${energy}%</p>
        <p><b>Happiness:</b> ${happy}% <b>Knowledge Level:</b> ${knowledge}</p>
`;
}

function init() {
	display();
}
window.onload = init;
