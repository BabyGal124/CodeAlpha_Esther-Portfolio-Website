const codeLines = [
    { text: 'const ', color: '#ff7b72' },
    { text: 'esther', color: '#79c0ff' },
    { text: ' = {\n', color: '#e6edf3' },
    { text: '    name', color: '#79c0ff' },
    { text: ': ', color: '#e6edf3' },
    { text: '"Esther"', color: '#a5d6ff' },
    { text: ',\n', color: '#e6edf3' },
    { text: '    role', color: '#79c0ff' },
    { text: ': ', color: '#e6edf3' },
    { text: '"Frontend Developer"', color: '#a5d6ff' },
    { text: ',\n', color: '#e6edf3' },
    { text: '    design', color: '#79c0ff' },
    { text: ': ', color: '#e6edf3' },
    { text: '"UI/UX Designer"', color: '#a5d6ff' },
    { text: ',\n', color: '#e6edf3' },
    { text: '    location', color: '#79c0ff' },
    { text: ': ', color: '#e6edf3' },
    { text: '"Lagos, Nigeria"', color: '#a5d6ff' },
    { text: ',\n', color: '#e6edf3' },
    { text: '    mindset', color: '#79c0ff' },
    { text: ': ', color: '#e6edf3' },
    { text: '"Curious"', color: '#a5d6ff' },
    { text: ',\n', color: '#e6edf3' },
    { text: '    loves', color: '#79c0ff' },
    { text: ': [\n', color: '#e6edf3' },
    { text: '        ', color: '#e6edf3' },
    { text: '"Learning"', color: '#a5d6ff' },
    { text: ',\n        ', color: '#e6edf3' },
    { text: '"Problem Solving"', color: '#a5d6ff' },
    { text: ',\n        ', color: '#e6edf3' },
    { text: '"Creativity"', color: '#a5d6ff' },
    { text: '\n    ],\n', color: '#e6edf3' },
    { text: '    currentlyLearning', color: '#79c0ff' },
    { text: ': ', color: '#e6edf3' },
    { text: '"Modern Frontend Development"', color: '#a5d6ff' },
    { text: ',\n', color: '#e6edf3' },
    { text: '    funFact', color: '#79c0ff' },
    { text: ': ', color: '#e6edf3' },
    { text: '"Calm face fun energy"', color: '#a5d6ff' },
    { text: ',\n', color: '#e6edf3' },
    { text: '   motto', color: '#79c0ff' },
    { text: ': ', color: '#e6edf3' },
    { text: '"Every project is a chance to grow."', color: '#a5d6ff' },
    { text: '\n};\n', color: '#e6edf3' },
];

// Flatten into individual characters with their color
const chars = [];
codeLines.forEach(segment => {
    for (const ch of segment.text) {
        chars.push({ ch, color: segment.color });
    }
});

const typingCode = document.getElementById('typing-code');
const aboutSection = document.querySelector('.about-section');

let index = 0;
let hasTyped = false;

function typeCode() {
    if (index < chars.length) {
        const { ch, color } = chars[index];
        const span = document.createElement('span');
        span.style.color = color;
        span.textContent = ch;
        typingCode.appendChild(span);
        index++;
        setTimeout(typeCode, 30);
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasTyped) {
            hasTyped = true;
            typeCode();
        }
    });
}, { threshold: 0.3 });

observer.observe(aboutSection);


// Mobile nav toggle
const menuOpenBtn = document.getElementById('menu-open-button');
const menuCloseBtn = document.getElementById('menu-close-button');
const navMenu = document.getElementById('nav-menu');

menuOpenBtn.addEventListener('click', () => navMenu.classList.add('open'));
menuCloseBtn.addEventListener('click', () => navMenu.classList.remove('open'));

// Close menu when a nav link is clicked
navMenu.querySelectorAll('.nav-link, .nav-button').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('open'));
});

// Scroll spy — active nav link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const scrollSpy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove('active'));
            const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
            if (active) active.classList.add('active');
        }
    });
}, {
    rootMargin: '-40% 0px -55% 0px'
});

sections.forEach(section => scrollSpy.observe(section));


//Form section
const form = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");
const btnText = document.getElementById("btn-text");
const formStatus = document.getElementById("form-status");

form.addEventListener("submit", async function (event) {
    // Prevent the browser from redirecting to Formspree
    event.preventDefault();

    // Collect all form data
    const formData = new FormData(form);

    try {
        // Disable button while sending
        submitBtn.disabled = true;
        btnText.textContent = "Sending...";

        // Clear any previous status message
        formStatus.textContent = "";

        // Send form data to Formspree
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                Accept: "application/json"
            }
        });

        if (response.ok) {
            formStatus.textContent = "Thank you! Your message has been sent. I'll get back to you soon.";
            formStatus.className = "form-status success";
            form.reset();
        } else {
            formStatus.textContent = " Something went wrong. Please try again.";
            formStatus.className = "form-status error";
        }

    } catch (error) {
        console.error(error);
        formStatus.textContent = "Network error. Please check your connection and try again.";
        formStatus.className = "form-status error";
    } finally {
        // Restore button whether successful or not
        submitBtn.disabled = false;
        btnText.textContent = "Send Message";
    }
})

