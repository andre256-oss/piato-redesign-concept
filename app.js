// ======================================
// PIATO REIMAGINED
// APPLE INSPIRED INTERACTIONS
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    initializeRevealAnimations();
    initializeNavbarEffects();
    initializeParallaxHero();
    initializeAmbientMotion();
    initializeActiveNavigation();
    initializeScrollProgress();
    initializeStaggerAnimations();

});

// ======================================
// REVEAL ANIMATIONS
// ======================================

function initializeRevealAnimations() {

    const elements = document.querySelectorAll(`
        .dish-card,
        .country-card,
        .event-stat,
        .gallery-item,
        .story-wrapper,
        .section-heading,
        .reserve-card
    `);

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("revealed");

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    elements.forEach(el => {

        el.classList.add("reveal");
        observer.observe(el);

    });

}

// ======================================
// NAVBAR SCROLL EFFECT
// ======================================

function initializeNavbarEffects() {

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        const scrollY = window.scrollY;

        if (scrollY > 80) {

            navbar.style.background =
                "rgba(8,8,8,0.85)";

            navbar.style.backdropFilter =
                "blur(40px)";

            navbar.style.border =
                "1px solid rgba(255,255,255,.08)";

        } else {

            navbar.style.background =
                "rgba(255,255,255,.08)";

            navbar.style.backdropFilter =
                "blur(30px)";

        }

    });

}

// ======================================
// HERO PARALLAX
// ======================================

function initializeParallaxHero() {

    const heroVideo =
        document.querySelector(".hero-video");

    const heroContent =
        document.querySelector(".hero-content");

    window.addEventListener("scroll", () => {

        const scrollY = window.scrollY;

        heroVideo.style.transform =
            `translateY(${scrollY * 0.18}px) scale(1.05)`;

        heroContent.style.transform =
            `translateY(${scrollY * 0.25}px)`;

    });

}

// ======================================
// AMBIENT FLOATING MOTION
// ======================================

function initializeAmbientMotion() {

    const glow1 =
        document.querySelector(".ambient-1");

    const glow2 =
        document.querySelector(".ambient-2");

    let angle = 0;

    function animate() {

        angle += 0.003;

        const x1 =
            Math.sin(angle) * 40;

        const y1 =
            Math.cos(angle) * 30;

        const x2 =
            Math.cos(angle) * 50;

        const y2 =
            Math.sin(angle) * 40;

        glow1.style.transform =
            `translate(${x1}px, ${y1}px)`;

        glow2.style.transform =
            `translate(${x2}px, ${y2}px)`;

        requestAnimationFrame(animate);

    }

    animate();

}

// ======================================
// ACTIVE NAVIGATION
// ======================================

function initializeActiveNavigation() {

    const sections =
        document.querySelectorAll("section");

    const navLinks =
        document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.clientHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                current = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (href === `#${current}`) {

                link.classList.add("active");

            }

        });

    });

}

// ======================================
// SCROLL PROGRESS BAR
// ======================================

function initializeScrollProgress() {

    const progressBar =
        document.createElement("div");

    progressBar.className =
        "scroll-progress";

    document.body.appendChild(progressBar);

    window.addEventListener("scroll", () => {

        const scrollTop =
            window.scrollY;

        const docHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const progress =
            (scrollTop / docHeight) * 100;

        progressBar.style.width =
            `${progress}%`;

    });

}

// ======================================
// STAGGER ANIMATIONS
// ======================================

function initializeStaggerAnimations() {

    const cards = document.querySelectorAll(`
        .dish-card,
        .country-card,
        .event-stat,
        .gallery-item
    `);

    cards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 80}ms`;

    });

}