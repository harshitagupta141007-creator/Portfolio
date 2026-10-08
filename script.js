/* =====================================================
   HARSHITA GUPTA PORTFOLIO
   JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* =====================================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
===================================================== */

const links = document.querySelectorAll(".nav-links a");


links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const sections = document.querySelectorAll(
    ".section, .contact-section"
);


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.12
    }

);


sections.forEach(function (section) {

    observer.observe(section);

});


/* =====================================================
   MESSAGE FOR SOCIAL LINKS
===================================================== */

function showMessage(message) {

    alert(message);

}


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const allSections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", function () {

    let currentSection = "";

    allSections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach(function (link) {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active-link");

        }

    });

});


/* =====================================================
   CONSOLE MESSAGE
===================================================== */

console.log(
    "✨ Welcome to Harshita Gupta's Portfolio!"
);