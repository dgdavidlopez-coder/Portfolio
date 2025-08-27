// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animación de habilidades al hacer scroll
const skills = document.querySelectorAll('.fill');
const skillsSection = document.getElementById('skills');

function animateSkills() {
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.2;

  if(sectionPos < screenPos) {
    skills.forEach(skill => {
      skill.style.width = skill.style.getPropertyValue('--skill-width');
    });
    window.removeEventListener('scroll', animateSkills);
  }
}

window.addEventListener('scroll', animateSkills);

// Dark/Light Mode
const toggle = document.createElement('button');
toggle.textContent = '🌙';
toggle.style.position = 'fixed';
toggle.style.top = '10px';
toggle.style.right = '10px';
toggle.style.fontSize = '1.5rem';
toggle.style.background = 'none';
toggle.style.border = 'none';
toggle.style.cursor = 'pointer';
document.body.appendChild(toggle);

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});