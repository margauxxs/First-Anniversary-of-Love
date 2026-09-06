let i = 0;
// Personalized typewriter text for Mahal
let text1 = "Happy 1st Anniversary, Mahal!";
let text2 = "Welcome to our special memory page. ❤️";
let speed = 100;

function typeWriter(text, para){
	if(ok == 2){
		clearInterval(typeInterval);
	}
	if(i < text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	}
	else{
		if(ok == 0){
			i = 0;
		}
		ok += 1;
	}
}

var typeInterval;

typeInterval = setInterval(function(){
	if(ok == 0){
		typeWriter(text1, "txt1");
	}
	else if(ok == 1){
		typeWriter(text2, "txt2");
	}
}, 100);
