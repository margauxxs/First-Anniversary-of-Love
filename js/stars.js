const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;     
    init();
});

// Twinkling Star Object
function Star(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.alpha = Math.random();
    this.speed = Math.random() * 0.01 + 0.005;
}

Star.prototype.draw = function() {
    c.save();
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
    c.shadowColor = '#FFFFFF';
    c.shadowBlur = 10;
    c.fill();
    c.closePath();
    c.restore();
};

Star.prototype.update = function() {
    this.alpha += this.speed;
    if (this.alpha >= 1 || this.alpha <= 0.1) {
        this.speed = -this.speed;
    }
    this.draw();
};

let stars;
let auroraStep = 0;

function init() {
    stars = [];
    // Create subtle starry backdrop
    for(let i = 0; i < 150; i++){
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 2;
        stars.push(new Star(x, y, radius, 'white'));
    }
}

// Draws the shifting Northern Lights gradient wave
function drawAurora() {
    auroraStep += 0.003; // Controls speed of the aurora shift
    
    const xShift = Math.sin(auroraStep) * (canvas.width * 0.2);
    const yShift = Math.cos(auroraStep) * (canvas.height * 0.15);

    // Dynamic gradient representing Aurora colors (Emerald green, purple, soft violet)
    const auroraGradient = c.createLinearGradient(
        0 + xShift, 
        0, 
        canvas.width - xShift, 
        canvas.height + yShift
    );

    auroraGradient.addColorStop(0, '#020b14');   // Deep night sky base
    auroraGradient.addColorStop(0.35, '#052b28'); // Dark pine
    auroraGradient.addColorStop(0.60, '#105e4e'); // Northern Lights Emerald Green
    auroraGradient.addColorStop(0.85, '#3b1754'); // Soft Violet / Purple
    auroraGradient.addColorStop(1, '#05021a');   // Midnight horizon

    c.fillStyle = auroraGradient;
    c.fillRect(0, 0, canvas.width, canvas.height);
}

// Main Animation Loop
function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    
    // 1. Render Animated Northern Lights
    drawAurora();

    // 2. Render Twinkling Stars
    stars.forEach(star => {
        star.update();
    });

    requestAnimationFrame(animate);
}

init();
animate();
