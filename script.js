const nav = document.querySelector("header");
const links = document.querySelectorAll("nav a");
const titre = document.querySelector("nav h1")

function updateNavStyles(scrolled) {
    if (scrolled) {
        nav.classList.add("even");
        links.forEach((link) => (link.style.color = "black"));
        titre.style.color = "black";
    } else {
        nav.classList.remove("even");
        links.forEach((link) => (link.style.color = ""));
        titre.style.color = "";
    }
}

window.addEventListener("scroll", () => {
    updateNavStyles(window.scrollY > 1);
});