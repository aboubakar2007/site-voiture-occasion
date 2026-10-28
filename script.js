const nav = document.querySelector("header");

// barre blanche dès qu'on fait défiler la page
function updateNavStyles(scrolled) {
    nav.classList.toggle("even", scrolled);
}

window.addEventListener("scroll", () => {
    updateNavStyles(window.scrollY > 1);
});

// menu mobile
const burger = document.querySelector(".burger");
const menu = document.querySelector("nav");

burger.addEventListener("click", () => {
    const ouvert = menu.classList.toggle("ouvert");
    burger.setAttribute("aria-expanded", ouvert);
    burger.querySelector("i").className = ouvert ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});

menu.querySelectorAll("a").forEach((lien) => {
    lien.addEventListener("click", () => {
        menu.classList.remove("ouvert");
        burger.setAttribute("aria-expanded", "false");
        burger.querySelector("i").className = "fa-solid fa-bars";
    });
});

// marque l'élément cliqué comme actif parmi ses voisins
function activer(bouton) {
    bouton.parentElement.querySelectorAll(".actif").forEach((b) => b.classList.remove("actif"));
    bouton.classList.add("actif");
}

// changement de vidéo d'accueil
const vid = document.getElementById("vid");
document.querySelectorAll(".bouton-accueil button").forEach((bouton) => {
    bouton.addEventListener("click", () => {
        vid.src = bouton.dataset.video;
        activer(bouton);
    });
});

// couleurs des véhicules phares
document.querySelectorAll(".voiture-color").forEach((bouton) => {
    bouton.addEventListener("click", () => {
        bouton.closest(".voiture-phare").querySelector(".voiture-img img").src = bouton.dataset.img;
        activer(bouton);
    });
});

// modèles affichés selon la marque choisie
const cases = document.querySelectorAll(".voiture-container img");
document.querySelectorAll(".marque").forEach((bouton) => {
    bouton.addEventListener("click", () => {
        bouton.dataset.voitures.split("|").forEach((src, i) => {
            cases[i].src = src;
        });
        activer(bouton);
    });
});

// abonnement : message dans la page plutôt qu'une alerte
document.getElementById("abonnement").addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.reset();
    document.getElementById("merci").hidden = false;
});
