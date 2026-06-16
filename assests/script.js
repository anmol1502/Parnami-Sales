/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1200);

});

/* =========================
   NAVBAR BACKGROUND
========================= */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(0,0,0,.95)";

        navbar.style.backdropFilter =
            "blur(20px)";

        navbar.style.boxShadow =
            "0 10px 35px rgba(255,0,0,.15)";

    } else {

        navbar.style.background =
            "rgba(0,0,0,.55)";

        navbar.style.boxShadow =
            "none";
    }

});

/* =========================
   COUNTER ANIMATION
========================= */

const counters =
    document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
            +counter.getAttribute("data-target");

        const count =
            +counter.innerText;

        const increment =
            target / 120;

        if (count < target) {

            counter.innerText =
                Math.ceil(count + increment);

            setTimeout(updateCounter, 15);

        } else {

            counter.innerText = target;
        }

    };

    updateCounter();

});

/* =========================
   SCROLL REVEAL
========================= */

const observer =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: .15
    });

document.querySelectorAll(
    ".stat-card,.product-card,.review-card,.gallery-grid img,.info-box"
).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

/* =========================
   PRODUCT GLOW EFFECT
========================= */

const products =
    document.querySelectorAll(".product-card");

products.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        card.style.background = `
        radial-gradient(
        circle at ${x}px ${y}px,
        rgba(255,0,0,.18),
        #0d0d0d 70%)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
            "#0d0d0d";

    });

});

/* =========================
   HERO PARALLAX
========================= */

window.addEventListener("mousemove", e => {

    const hero =
        document.querySelector(".hero-content");

    const x =
        (window.innerWidth / 2 - e.pageX) / 50;

    const y =
        (window.innerHeight / 2 - e.pageY) / 50;

    hero.style.transform =
        `translate(${x}px,${y}px)`;

});

/* =========================
   SMOOTH SCROLL
========================= */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document
            .querySelector(
                this.getAttribute("href")
            )
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});

/* =========================
   BUTTON RIPPLE EFFECT
========================= */

const buttons =
    document.querySelectorAll(
        ".btn-primary,.btn-secondary"
    );

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const circle =
            document.createElement("span");

        const diameter =
            Math.max(
                this.clientWidth,
                this.clientHeight
            );

        const radius =
            diameter / 2;

        circle.style.width =
            circle.style.height =
            `${diameter}px`;

        circle.style.left =
            `${e.clientX -
            this.offsetLeft -
            radius}px`;

        circle.style.top =
            `${e.clientY -
            this.offsetTop -
            radius}px`;

        circle.classList.add("ripple");

        const ripple =
            this.querySelector(".ripple");

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

/* =========================
   GALLERY ZOOM
========================= */

const galleryImages =
    document.querySelectorAll(
        ".gallery-grid img"
    );

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        const popup =
            document.createElement("div");

        popup.className =
            "image-popup";

        popup.innerHTML = `
        <span class="close-popup">&times;</span>
        <img src="${img.src}">
        `;

        document.body.appendChild(popup);

        popup.addEventListener("click", () => {

            popup.remove();

        });

    });

});

/* =========================
   FLOATING ANIMATION
========================= */

const floatingCards =
    document.querySelectorAll(
        ".stat-card"
    );

floatingCards.forEach((card, index) => {

    card.style.animation =
        `floatAnim 4s ease-in-out ${index * .2}s infinite`;

});

/* =========================
   TYPING EFFECT
========================= */

const title =
    document.querySelector(".hero h1");

if (title) {

    const originalText =
        title.innerHTML;

    title.innerHTML = "";

    let i = 0;

    function typing() {

        if (i < originalText.length) {

            title.innerHTML +=
                originalText.charAt(i);

            i++;

            setTimeout(
                typing,
                30
            );

        }

    }

    typing();

}

/* =========================
   CURSOR GLOW
========================= */

const glow =
    document.createElement("div");

glow.classList.add(
    "cursor-glow"
);

document.body.appendChild(glow);

document.addEventListener(
    "mousemove",
    e => {

        glow.style.left =
            e.clientX + "px";

        glow.style.top =
            e.clientY + "px";

    }
);

/* =========================
   SCROLL PROGRESS BAR
========================= */

const progressBar =
    document.createElement("div");

progressBar.className =
    "progress-bar";

document.body.appendChild(
    progressBar
);

window.addEventListener(
    "scroll",
    () => {

        const totalHeight =
            document.body.scrollHeight -
            window.innerHeight;

        const progress =
            (window.pageYOffset /
                totalHeight) * 100;

        progressBar.style.width =
            progress + "%";

    }
);

document.addEventListener('contextmenu', e => e.preventDefault());
