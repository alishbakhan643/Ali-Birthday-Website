// ==========================
// ELEMENTS
// ==========================

const heartBtn = document.getElementById("heartBtn");

const hero = document.querySelector(".hero");

const message = document.querySelector(".message");

const photoSection = document.querySelector(".photo-section");

const photo = document.getElementById("photo");

const caption = document.getElementById("caption");

const nextBtn = document.getElementById("nextBtn");

const letterSection = document.querySelector(".letter-section");

const letterText = document.getElementById("letterText");

const finishBtn = document.getElementById("finishBtn");

const finalSection = document.querySelector(".final-section");

// ==========================
// PHOTOS
// ==========================



const photos = [
"Ali0.jpeg",
"01.jpeg",
"02.jpeg",
"03.jpeg",
"04.jpeg"

];

// ==========================
// CAPTIONS
// ==========================

const captions = [

"The smile that makes my world brighter. ❤️",

"One of my favorite memories of you. 💖",

"I pray Allah always keeps you smiling. 🤲",

"Every picture of you brings peace to my heart. 🌹",

"Happy Birthday, Ali. Stay blessed always. 🎂❤️"

];

// ==========================
// LOVE LETTER
// ==========================

const letter = Dear Ali ❤️

Happy Birthday, my dearest.

When we talked for the very first time, I never imagined that one day you would become one of the most precious people in my life.

Now, life without you feels incomplete. Sometimes I just want to close my eyes and imagine you standing in front of me, so I can look at you for as long as I want and tell you how deeply I love you.

اس قدر کشش ہے تمہاری اداؤں میں
ہم اگر تم ہوتے تو خود سے عشق کر لیتے۔ ❤️

You are more precious to me than my own life. Not a single day passes without thinking about you, and my heart never truly feels at peace when you're away.

Your eyes... I honestly don't have the right words to describe them. Every time I think of them, my heart smiles.

Your care, your respect, your loyalty, and your love have completely changed my world. They made me fall in love with you more than I ever thought possible.

No matter where life takes us, I hope we always remain in each other's prayers and hearts. ❤️

Every day I pray to Allah that He blesses you with happiness, protects you from every hardship, and, if it is best for us, brings us together in a beautiful halal way.

Thank you for being the reason behind so many of my smiles.

I love you today, tomorrow, forever and ever. ❤️

Forever Yours,

Alishba 🌹`;

// ==========================
// PHOTO INDEX
// ==========================

let current = 0;

// ==========================
// OPEN MY HEART
// ==========================

heartBtn.addEventListener("click", () => {

hero.classList.add("hidden");

message.classList.remove("hidden");

setTimeout(() => {

message.classList.add("hidden");

photoSection.classList.remove("hidden");

},3000);

});

// ==========================
// NEXT MEMORY
// ==========================

nextBtn.addEventListener("click", () => {

current++;

if(current < photos.length){

photo.src = photos[current];

caption.innerHTML = captions[current];

}

if(current === photos.length-1){

nextBtn.innerHTML="💌 Read My Letter";

}

if(current >= photos.length){

photoSection.classList.add("hidden");

letterSection.classList.remove("hidden");

typeLetter();

}

});

// ==========================
// TYPEWRITER
// ==========================
function typeLetter() {

    letterText.innerHTML = "";

    const chars = Array.from(letter);

    let i = 0;

    function typing() {

        if (i < chars.length) {

            letterText.textContent += chars[i];

            i++;

            setTimeout(typing, 35);

        } else {

            finishBtn.style.display = "block";

        }

    }

    typing();

}

// ==========================
// FINAL SURPRISE
// ==========================

finishBtn.addEventListener("click", () => {

    letterSection.classList.add("hidden");

    finalSection.classList.remove("hidden");

    finalSection.scrollIntoView({
        behavior: "smooth"
    });

});