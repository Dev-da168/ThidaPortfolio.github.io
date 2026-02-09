// Mobile Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            // Must match your CSS .hamburger.active
            hamburger.classList.toggle('active'); 
            // Must match your CSS .nav-menu.active
            navMenu.classList.toggle('active');
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade in animation on scroll
const faders = document.querySelectorAll('.fade-in');
if (faders.length > 0) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    faders.forEach(fade => observer.observe(fade));
}

// Theme toggle
document.querySelectorAll('.theme-toggle').forEach(toggleBtn => {
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const icon = toggleBtn.querySelector('.theme-icon');
        if (icon) {
            icon.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
        }
    });
});

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.links a');

if (navToggle && navbar) {
    navToggle.addEventListener('click', () => {
        navbar.classList.toggle('nav-open');
    });
    
    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('nav-open');
        });
    });
}

// Button interactions
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Navbar sticky effect on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 12px rgb(255, 255, 255)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Active nav link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Experience data
const experienceSection = {
    paragame: {
        title: "4th National Games and 2nd National Para-Game",
        image: [
            './img /paragame1.jpeg',
            './img /paragame2.jpeg',
        ],
        description: `
            <ul>Responsibile:
            <li>Collaborated with event staff</li>
            <li>Coordinated with event staff</li>
            <li>Ensured smooth operations during the games</li>
            </ul>
        `
    },
    tijulkun: {
        title: "Tijulkun 2024",
        image: ["./img /tijulkun1.jpeg"],
        description: `
            <ul>Responsibile:
            <li>Organized traditional Khmer games</li>
            <li>Coordinated with participants and other volunteers</li>
            <li>Managed game equipment and setup</li>
            </ul>
            
        `
    },
    aupp: {
        title: "AUPP CCSP - Water Sanitation & Waste Management",
        image: ["./img /aupp1.jpeg"],
        description: `
            <ul>Responsibile:
            <li>Organized traditional Khmer games</li>
            <li>Coordinated with participants and other volunteers</li>
            <li>Managed game equipment and setup</li>
            </ul>

        `
    },
    friends: {
        title: "Friends-International Organization - Web Developer",
        image: ["./img /mypic.jpeg"],
        description: `
            <ul>Responsibile:
            <li>Developed and maintained the organization's website</li>
            <li>Implemented new features to enhance user experience</li>
            <li>Collaborated with the team to ensure website functionality</li>
            </ul>
            
        `
    },
    cybersecurity: {
        title: "Cyber-Security and AI",
        image: ["./img /aupp2.jpeg", "./img /aupp3.jpeg"],
        description: `
            <ul>Responsibile:
            <li>Learned about cyber-security principles and practices</li>
            <li>Explored AI technologies and their applications</li>
            <li>Participated in workshops and hands-on activities</li>
            </ul>
        `
    }
};

// Modal functionality
function openModal(experienceKey, event) {
    event.preventDefault();
    const experience = experienceSection[experienceKey];
    if (!experience) {
        console.error('Experience not found:', experienceKey);
        return;
    }
    
    let modal = document.getElementById('experienceModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'experienceModal';
        modal.className = 'modal';
        document.body.appendChild(modal);
    }
    
    const modalContent = `
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <h2>${experience.title}</h2>
            <div class="modal-images">
                ${experience.image.map(img => `<img src="${img}" alt="${experience.title}">`).join('')}
            </div>
            <div class="modal-description">
                ${experience.description}
            </div>
        </div>
    `;
    
    modal.innerHTML = modalContent;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('experienceModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    const modal = document.getElementById('experienceModal');
    if (modal && event.target === modal) {
        closeModal();
    }
});


    
    // Send email using EmailJS
    document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    emailjs.send('service_jp04wx8', 'template_lrbsgt1', this)
        .then(function() {
            alert('Sent Successfully!');
        }, function(error) {
            console.log('Failed...', error);
            alert('Send failed: ' + JSON.stringify(error));
        });
    });

// Initialize EmailJS
(function(){
   emailjs.init("Z7UEqO1vGLWdUSIkb"); // Check this!
})();

// End of script.js

