// Particles background (library-based)
if (window.particlesJS && document.getElementById("particles-js")) {
    particlesJS("particles-js", {
        particles: {
            number: { value: 70, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.22, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#3b82f6",
                opacity: 0.15,
                width: 1,
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true,
            },
            modes: {
                grab: { distance: 160, line_linked: { opacity: 0.35 } },
            },
        },
        retina_detect: true,
    });
}

// Typing animation (supports both class names)
if (window.Typed) {
    const typingSelector = document.querySelector(".typing-text") ? ".typing-text" : ".typed-text";
    if (document.querySelector(typingSelector)) {
        new Typed(typingSelector, {
            strings: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
            loop: true,
            typeSpeed: 50,
            backSpeed: 26,
            backDelay: 1450,
        });
    }
}

// Initialize 3D tilt effect with fallback selectors
if (window.VanillaTilt) {
    VanillaTilt.init(document.querySelectorAll(".project-card, .profile-container, .profile-wrapper, .skill-card"), {
        max: 12,
        speed: 450,
        glare: true,
        "max-glare": 0.12,
        perspective: 900,
    });
}

// Progress animation for all skill sections
const skillSections = document.querySelectorAll(".skills");
if (skillSections.length) {
    const progressObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.querySelectorAll(".progress").forEach((el, index) => {
                const targetWidth = el.getAttribute("data-width") || el.style.width || "0%";
                el.style.width = "0%";
                setTimeout(() => {
                    el.style.width = targetWidth;
                }, 120 + (index * 80));
            });

            observer.unobserve(entry.target);
        });
    }, { threshold: 0.25 });

    skillSections.forEach((section) => progressObserver.observe(section));
}

// Scroll reveal animation
const revealElements = document.querySelectorAll(
    ".hero-content, .section-title, .skill-card, .project-card, .contact-form, .social-links a"
);

revealElements.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.transitionDelay = `${Math.min(index * 35, 260)}ms`;
});

if (revealElements.length) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

    revealElements.forEach((element) => revealObserver.observe(element));
}