document.addEventListener("DOMContentLoaded", function () {

const sections = document.querySelectorAll(
    ".presentation, .intro-portfolio, footer"
);

sections.forEach(function (section) {
    section.classList.add("apparition");
});

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });

}, {
    threshold: 0.15
});

sections.forEach(function (section) {
    observer.observe(section);
});

});
const boutonHaut = document.getElementById("retour-haut");

if (boutonHaut) {
    window.addEventListener("scroll", function () {
        boutonHaut.style.display =
            window.scrollY > 300 ? "block" : "none";
    });

    boutonHaut.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}