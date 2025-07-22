function revealOnScroll() {
    const revealElems = document.querySelectorAll('.card, .skills-section, .projects-section');
    const windowHeight = window.innerHeight;
    revealElems.forEach(elem => {
        const elemTop = elem.getBoundingClientRect().top;
        if (elemTop < windowHeight - 80) {
            elem.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

function addRipple(e) {
    const btn = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const rect = btn.getBoundingClientRect();
    circle.classList.add("ripple");
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - diameter / 2}px`;
    circle.style.top = `${e.clientY - rect.top - diameter / 2}px`;
    btn.appendChild(circle);
    setTimeout(() => {
        circle.remove();
    }, 600);
}
document.querySelectorAll('.download-btn, .social-links .icon').forEach(el => {
    el.addEventListener('click', addRipple);
});

const canvas = document.getElementById('particles-bg');
const ctx = canvas.getContext('2d');
let particles = [];
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
function createParticles() {
    particles = [];
    for (let i = 0; i < 38; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: 1.1 + Math.random() * 2.2,
            dx: (Math.random() - 0.5) * 0.19,
            dy: (Math.random() - 0.5) * 0.19,
            alpha: 0.2 + Math.random() * 0.18
        });
    }
}
createParticles();
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(93,140,255,${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    }
    requestAnimationFrame(animateParticles);
}
animateParticles();
window.addEventListener('resize', createParticles);

document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('i').style.color = '#fff';
    });
    card.addEventListener('mouseleave', () => {
        card.querySelector('i').style.color = '';
    });
});