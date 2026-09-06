// Universal Typewriter Engine for Anniversary Site
var str = "Hi Mahal! Happy 1st Anniversary! ❤️";
var str2 = "I created a little collection of our memories together. Click the heart below! ✨";

var i = 0;
var j = 0;

function typeWriter1() {
    var div1 = document.getElementById("txt1");
    if (div1 && i < str.length) {
        div1.innerHTML += str.charAt(i);
        i++;
        setTimeout(typeWriter1, 80); // Typing speed for first line
    } else {
        setTimeout(typeWriter2, 400); // Pause before second line starts
    }
}

function typeWriter2() {
    var div2 = document.getElementById("txt2");
    if (div2 && j < str2.length) {
        div2.innerHTML += str2.charAt(j);
        j++;
        setTimeout(typeWriter2, 60); // Typing speed for second line
    }
}

// Automatically start typing as soon as the page loads
window.addEventListener("DOMContentLoaded", function() {
    setTimeout(typeWriter1, 500);
});
