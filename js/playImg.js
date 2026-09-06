// Ensure button starts hidden
var btn = document.getElementById("heartTxt");
if (btn) btn.style.opacity = 0;
var btnVal = 0;

// Missing DOM element references & state variables
var myImage = document.getElementById("img");
var myTxt = document.getElementById("Txt");
var imageIndex = 0;
var len = typeof imageArray !== "undefined" ? imageArray.length : 0;
var flag = 0;
var t = 0;

// Helper function: Maps current photo index back to its A-Z caption
function getCaptionIndex(idx) {
	if (typeof imageGroupArray === "undefined") {
		return idx; // Fallback if imageGroupArray is missing
	}
	var accumulatedCount = 0;
	for (var i = 0; i < imageGroupArray.length; i++) {
		accumulatedCount += imageGroupArray[i].length;
		if (idx < accumulatedCount) {
			return i;
		}
	}
	return 0;
}

function showImage(){
	if (myImage && imageArray && imageArray.length > 0) {
		myImage.setAttribute("src", imageArray[imageIndex]);
	}
	if (myTxt && typeof txtArray !== "undefined") {
		var capIdx = getCaptionIndex(imageIndex);
		myTxt.innerHTML = txtArray[capIdx] || "";
	}
	
	imageIndex++;
	if(imageIndex >= len){
		imageIndex = 0;
	}
}

function play(){
	if(t == 0){
		if (myImage) myImage.setAttribute("src", "");
		if (myTxt) myTxt.innerHTML = "";
		imageIndex = 0;
		clearInterval(showImageInterval);
	}
	flag = 1 - flag;
	
	var typeDiv = document.getElementById("typeDiv");
	var imgTxt = document.getElementById("imgTxt");
	
	if (typeDiv) typeDiv.style.opacity = flag;
	
	if (imgTxt) {
		// Crucial fix: Must toggle visibility alongside opacity
		imgTxt.style.visibility = (1 - flag === 1) ? "visible" : "hidden";
		imgTxt.style.opacity = 1 - flag;
	}
	
	if(t == 0){
		setInterval(showImage, 2500);
	}
	t++;
}

function preshowImage(){
	var imgTxt = document.getElementById("imgTxt");
	if (imgTxt) imgTxt.style.opacity = 0;
	
	if (myImage && imageArray && imageArray.length > 0) {
		myImage.setAttribute("src", imageArray[imageIndex]);
	}
	
	if (myTxt && typeof txtArray !== "undefined") {
		var capIdx = getCaptionIndex(imageIndex);
		myTxt.innerHTML = txtArray[capIdx] || "";
	}
	
	imageIndex++;
	if(imageIndex >= len){
		imageIndex = 0;
	}
}

function buttonFadeIn(){
	if(btnVal < 1){
		btnVal += 0.025;
		if (btn) btn.style.opacity = btnVal;
	}
	else{
		clearInterval(buttonInterval);
		if(typeof ok !== "undefined" && ok == 3){
			ok += 1;
		}
	}
}

function event(){
	showImageInterval = setInterval(preshowImage, 100);

	imgInterval = setInterval(function (){
		if(typeof ok !== "undefined" && ok == 3){
			setTimeout(function(){
				buttonInterval = setInterval(buttonFadeIn, 50);
			}, 1500);
			clearInterval(imgInterval);
		}
	}, 50);
}

var showImageInterval;
var imgInterval;
var buttonInterval;

event();
