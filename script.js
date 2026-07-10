alert("New Script Loaded");
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

 const letter = `Dear Ali ❤️

Happy Birthday, my dearest.

When we talked for the very first time, I never imagined that one day you would become one of the most precious people in my life.

Now, life without you feels incomplete...

اس قدر کشش ہے تمہاری اداؤں میں،
ہم اگر تم ہوتے تو خود سے عشق کر لیتے۔ ❤️

...

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
console.log(current);
    if (current < photos.length - 1) {

        current++;

        photo.src = photos[current];
        caption.textContent = captions[current];

        if (current === photos.length - 1) {
            nextBtn.innerHTML = "💌 Read My Letter";
        }

    } else {

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