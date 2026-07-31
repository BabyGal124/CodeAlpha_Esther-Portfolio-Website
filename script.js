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
    { text: '"Clean Code"', color: '#a5d6ff' },
    { text: '\n    ],\n', color: '#e6edf3' },
    { text: '    currentlyLearning', color: '#79c0ff' },
    { text: ': ', color: '#e6edf3' },
    { text: '"Modern Frontend Development"', color: '#a5d6ff' },
    { text: ',\n', color: '#e6edf3' },
    { text: '    funFact', color: '#79c0ff' },
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
