// ==========================================
// Michelle's Premium 18th Birthday Website
// ==========================================

// Birthday Date
const birthday = new Date("2029-08-29T00:00:00").getTime();

// Countdown Elements
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// Countdown
const timer = setInterval(() => {

    const now = new Date().getTime();
    const distance = birthday - now;

    if (distance <= 0) {

        clearInterval(timer);

        document.querySelector(".countdown").innerHTML = `
            <h2>🎉 Happy 18th Birthday Michelle! 🎂❤️</h2>
        `;

        startFireworks();

        return;
    }

    days.textContent = Math.floor(distance / (1000 * 60 * 60 * 24));

    hours.textContent = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    minutes.textContent = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    seconds.textContent = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

},1000);

// ==========================================
// Typing Letter
// ==========================================

const letter = `Dear Michelle ❤️,

Happy 18th Birthday!

Today is one of the most important days of your life.

May your future be filled with endless joy,
good health, success, peace and love.

Always keep smiling because your smile
makes the world brighter.

May every dream you have come true.

Enjoy every second of your special day.

Happy Birthday once again!

❤️ From EZED NYANUGA`;

let index = 0;

function typeWriter(){

    if(index < letter.length){

        document.getElementById("typing").innerHTML +=
        letter.charAt(index);

        index++;

        setTimeout(typeWriter,40);

    }

}

typeWriter();

// ==========================================
// Floating Hearts
// ==========================================

function createHeart(){

    const heart = document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"%";

    heart.style.fontSize=(15+Math.random()*30)+"px";

    heart.style.animationDuration=
    (4+Math.random()*4)+"s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,300);// ==========================================
// Floating Balloons
// ==========================================

function createBalloon(){

    const balloon = document.createElement("div");

    balloon.innerHTML = "🎈";

    balloon.style.position = "absolute";
    balloon.style.left = Math.random() * 100 + "%";
    balloon.style.bottom = "-60px";
    balloon.style.fontSize = (30 + Math.random() * 20) + "px";
    balloon.style.animation = "floatBalloon 10s linear forwards";

    document.getElementById("balloons").appendChild(balloon);

    setTimeout(() => balloon.remove(), 10000);

}

setInterval(createBalloon, 1200);

// Add balloon animation dynamically
const balloonStyle = document.createElement("style");

balloonStyle.innerHTML = `
@keyframes floatBalloon{
    from{
        transform:translateY(0);
        opacity:1;
    }
    to{
        transform:translateY(-120vh);
        opacity:0;
    }
}
`;

document.head.appendChild(balloonStyle);

// ==========================================
// Confetti
// ==========================================

function launchConfetti(){

    for(let i = 0; i < 120; i++){

        const piece = document.createElement("div");

        piece.style.position = "absolute";
        piece.style.left = Math.random() * 100 + "%";
        piece.style.top = "-20px";
        piece.style.width = "8px";
        piece.style.height = "14px";
        piece.style.background =
            `hsl(${Math.random()*360},100%,60%)`;

        piece.style.animation =
            `confettiFall ${3 + Math.random()*3}s linear forwards`;

        document.getElementById("confetti").appendChild(piece);

        setTimeout(() => piece.remove(), 7000);

    }

}

const confettiStyle = document.createElement("style");

confettiStyle.innerHTML = `
@keyframes confettiFall{
    to{
        transform:translateY(120vh) rotate(720deg);
        opacity:0;
    }
}
`;

document.head.appendChild(confettiStyle);

// ==========================================
// Fireworks
// ==========================================

function startFireworks(){

    alert("🎆 Happy 18th Birthday Michelle! 🎂❤️");

    launchConfetti();

}

// ==========================================
// Copy Gift Number
// ==========================================

const copyButton = document.getElementById("copyNumber");

if(copyButton){

    copyButton.onclick = () =>{

        const number =
        document.getElementById("giftNumber").textContent.trim();

        navigator.clipboard.writeText(number);

        alert("✅ Gift number copied successfully!");

    };

}

// ==========================================
// Surprise Button
// ==========================================

document.getElementById("celebrateBtn").onclick = () =>{

    launchConfetti();

    const music = document.getElementById("music");

    music.play().catch(() => {});

    alert(`🎉 Happy 18th Birthday Michelle!

May your life be filled with love,
joy, success and endless blessings.

Enjoy your special day!

❤️ From EZED NYANUGA`);

};

// ==========================================
// Background Music
// ==========================================

document.body.addEventListener("click", () => {

    const music = document.getElementById("music");

    music.play().catch(() => {});

}, { once:true });

console.log("🎂 Premium Birthday Website Loaded Successfully!");
