// 26 Photo Groups (A to Z)
var imageGroupArray = [
	["pic/picA1.JPG", "pic/picA2.JPG", "pic/picA3.JPG", "pic/picA4.JPG"],
	["pic/picB1.JPG", "pic/picB2.JPG", "pic/picB3.JPG"],
	["pic/picC1.JPG", "pic/picC2.JPG", "pic/picC3.JPG", "pic/picC4.JPG"],
	["pic/picD1.JPG", "pic/picD2.JPG", "pic/picD3.JPG"],
	["pic/picE1.JPG", "pic/picE2.JPG"],
	["pic/picF1.JPG", "pic/picF2.JPG", "pic/picF3.JPG", "pic/picF4.JPG", "pic/picF5.JPG"],
	["pic/picG1.jpg", "pic/picG2.jpg", "pic/picG3.jpg", "pic/picG4.jpg"],
	["pic/picH1.JPG", "pic/picH2.JPG"],
	["pic/picI1.JPG", "pic/picI2.JPG", "pic/picI3.JPG", "pic/picI4.JPG"],
	["pic/picJ1.JPG", "pic/picJ2.JPG", "pic/picJ3.JPG"],
	["pic/picK1.JPG"],
	["pic/picL1.JPG", "pic/picL2.JPG", "pic/picL3.JPG", "pic/picL4.JPG", "pic/picL5.JPG"],
	["pic/picM1.JPG", "pic/picM2.JPG", "pic/picM3.JPG", "pic/picM4.JPG"],
	["pic/picN1.JPG", "pic/picN2.JPG", "pic/picN3.JPG"],
	["pic/picO1.JPG", "pic/picO2.JPG", "pic/picO3.JPG"],
	["pic/picP1.JPG", "pic/picP2.JPG", "pic/picP3.JPG", "pic/picP4.JPG", "pic/picP5.JPG"],
	["pic/picQ1.JPG"],
	["pic/picR1.JPG", "pic/picR2.JPG", "pic/picR3.JPG", "pic/picR4.JPG"],
	["pic/picS1.JPG", "pic/picS2.JPG", "pic/picS3.JPG", "pic/picS4.JPG"],
	["pic/picT1.JPG", "pic/picT2.JPG", "pic/picT3.JPG", "pic/picT4.JPG", "pic/picT5.JPG", "pic/picT6.JPG"],
	["pic/picU1.JPG"],
	["pic/picV1.JPG", "pic/picV2.JPG", "pic/picV3.JPG"],
	["pic/picW1.jpg", "pic/picW2.jpg", "pic/picW3.jpg", "pic/picW4.jpg"],
	["pic/picX1.JPG", "pic/picX2.JPG", "pic/picX3.JPG"],
	["pic/picY1.JPG", "pic/picY2.JPG", "pic/picY3.jpg", "pic/picY4.jpg"],
	["pic/picZ1.JPG", "pic/picZ2.JPG", "pic/picZ3.JPG"]
];

var txtArray = [
	"A is for Arcade! Our fun time at Timezone. 🕹️",
	"B is for Baking! (Sunod sunuran ka lang hahaha) 🎂",
	"C is for Coffee Dates! Na ikaw lang coffee akin non coffee. ☕",
	"D is for Dolomite Beach! Meet kahit may toyo. 🌅",
	"E is for Every Single Day I Love You. (Jejemon hahaha 🧀)",
	"F is for First Date! Where everything began. 💖",
	"G is for Golfing! Beginner. 🛒",
	"H is for Hugs! Backhugsssss. 🤗",
	"I is for Inspection Day Side Quest! Kahilo minsan byahe hahaha. 👷‍♂️",
	"J is for Just us, ayieeeee hahaha.💖",
	"K is for Kissing! 😘",
	"L is for LDR Video Calls! Unli calls, unli tampo. 📱",
	"M is for Ocean Park Date! Ano relate? hahaha. 🐠",
	"N is for Night Dates! Esplanade. ✨",
	"O is for Our Bahay-Bahayan Date! Simple and cozy. 🏠",
	"P is for Pagkain! 🧀",
	"Q is for Quiet moments, kasi magkaaway hahhaha. ❤️",
	"R is for Roadtrip! Mapaumaga, gabi, nalipad sa kalsada hahaha. 🚗",
	"S is for Swimming! Pool sa taas ng building. 🏊‍♂️",
	"T is for Tagaytay. 💭",
	"U is for Us. 👩‍❤️‍👨",
	"V is for Voyage! (First time makasakay sa ferry) 🌹",
	"W is for Walk Dates! Mga mukhang bagong gising at uwing pawisan. 🤝",
	"X is for eXtra special meeeee! 😄",
	"Y is for You and Me Birthmonth Date! 🎉",
	"Z is for Zzz sleeping! 😴 Happy Anniversary, Mahal!"
];

var groupIdx = 0;
var photoInGroupIdx = 0;
var intervalTimer;

function renderCurrentPhoto() {
	var myImage = document.getElementById("img");
	var myTxt = document.getElementById("Txt");

	if (imageGroupArray[groupIdx]) {
		var activeGroup = imageGroupArray[groupIdx];
		if (myImage) {
			myImage.src = activeGroup[photoInGroupIdx];
		}
		if (myTxt) {
			myTxt.innerHTML = txtArray[groupIdx] || "";
		}
	}
}

function advancePhoto() {
	var activeGroup = imageGroupArray[groupIdx];
	photoInGroupIdx++;

	// Advance group when current photo series completes
	if (photoInGroupIdx >= activeGroup.length) {
		photoInGroupIdx = 0;
		groupIdx++;
		if (groupIdx >= imageGroupArray.length) {
			groupIdx = 0;
		}
	}
	renderCurrentPhoto();
}

function play() {
	var typeDiv = document.getElementById("typeDiv");
	var heartTxt = document.getElementById("heartTxt");
	var imgTxt = document.getElementById("imgTxt");

	if (typeDiv) typeDiv.style.display = "none";
	if (heartTxt) heartTxt.style.display = "none";

	if (imgTxt) {
		imgTxt.style.display = "block";
		imgTxt.style.visibility = "visible";
		imgTxt.style.opacity = "1";
	}

	groupIdx = 0;
	photoInGroupIdx = 0;
	renderCurrentPhoto();

	if (intervalTimer) clearInterval(intervalTimer);
	intervalTimer = setInterval(advancePhoto, 2500);
}

// Enable manual photo switching on click
document.addEventListener("DOMContentLoaded", function() {
	var imgTxtContainer = document.getElementById("imgTxt");
	if (imgTxtContainer) {
		imgTxtContainer.onclick = function() {
			advancePhoto();
		};
	}
});
