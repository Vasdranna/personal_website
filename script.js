const siteLanguage = document.documentElement.getAttribute("lang");

/* ———————————————————————————————————————————————————————————————————————————————————— */
/*                                     RANDOM IMAGE                                     */
/* ———————————————————————————————————————————————————————————————————————————————————— */

const imgElem = document.querySelector(".img");

const randomNumber = Math.floor(Math.random() * 100) % Object.keys(images).length;

const selectedImg = Object.keys(images)[randomNumber];
const selectedBgColor = images[selectedImg][0];
const selectedFgColor = images[selectedImg][1];
const selectedAccentColor = images[selectedImg][2];

// Set the random image
const basePath = siteLanguage === "es" ? "img/" : "../img/";
imgElem.setAttribute("src", `${basePath}${selectedImg}`);

document.body.style.setProperty("--bg-color", selectedBgColor);
document.body.style.setProperty("--fg-color", selectedFgColor);
document.body.style.setProperty("--accent-color", selectedAccentColor);

document.documentElement.style.backgroundColor = selectedBgColor;

/* ———————————————————————————————————————————————————————————————————————————————————— */
/*                                     RANDOM QUOTE                                     */
/* ———————————————————————————————————————————————————————————————————————————————————— */

const quoteParagraph = document.querySelector(".quote-p");

const quotes = siteLanguage === "es" ? quotesSpanish : quotesEnglish;
const quote = quotes[Math.floor(Math.random() * quotes.length)];

quoteParagraph.innerHTML = quote;

/* ———————————————————————————————————————————————————————————————————————————————————— */
/*                                    RANDOM DISCOVER                                   */
/* ———————————————————————————————————————————————————————————————————————————————————— */

const translations = {
  es: {
    music: "Una canción que quizá te guste",
    movie: "Una película que podrías ver",
    series: "Una serie que deberías ver",
    book: "Un libro que quizá te guste",
    default: "Algo que quizá te guste",
  },
  en: {
    music: "A song you might like",
    movie: "A movie you could watch",
    series: "A series you should watch",
    book: "A book you might like",
    default: "Something you might like",
  },
};

const discoverLink = document.querySelector(".discover");
const discoverText = document.querySelector(".discover-text");

const selected = things[Math.floor(Math.random() * things.length)];

const categoryText = translations[siteLanguage][selected.category] || translations[siteLanguage].default;
discoverText.textContent = categoryText;
discoverLink.href = selected.url;

/* ———————————————————————————————————————————————————————————————————————————————————— */
/*                                    ABOUT ME MODAL                                    */
/* ———————————————————————————————————————————————————————————————————————————————————— */

const modalOpenerElem = document.querySelector(".modal-opener");
const closeModalElem = document.querySelector(".close-btn");
const modalElem = document.querySelector(".modal");

// Show modal
modalOpenerElem.addEventListener("click", () => {
  modalElem.classList.remove("modal-close");
  modalElem.classList.add("modal-show");
});

// Close modal with click in close button
closeModalElem.addEventListener("click", () => {
  closeModalFn();
});

// Close modal with Esc key
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" || e.key === "Esc") {
    closeModalFn();
  }
});

// Close modal with click outside
window.addEventListener("click", (e) => {
  const clickedOnOverlay = e.target === modalElem;
  const clickedInsideModal = modalElem.contains(e.target);
  const clickedOpener = modalOpenerElem.contains(e.target);

  if ((!clickedInsideModal && !clickedOpener) || clickedOnOverlay) {
    closeModalFn();
  }
});

function closeModalFn() {
  modalElem.classList.remove("modal-show");
  modalElem.classList.add("modal-close");
}

/* ———————————————————————————————————————————————————————————————————————————————————— */
/*                                         EMAIL                                        */
/* ———————————————————————————————————————————————————————————————————————————————————— */

const a = document.querySelector(".email-link");
const s = document.querySelector(".email-string");
const d = atob("Z2l1ZGFuLmNj");
const localPart = siteLanguage === "es" ? "hola" : "hello";

a.href = "mailto:" + localPart + "@" + d;
s.textContent = localPart + "@" + d;

a.addEventListener("mouseenter", () => s.classList.add("show"));
a.addEventListener("mouseleave", () => s.classList.remove("show"));
