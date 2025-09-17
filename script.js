const skillBars = document.querySelectorAll('.skill-progress');
        const contactForm = document.getElementById('contactForm');
        
        // Typing Effect
        const typingElement = document.getElementById('typing');
        const typingWords = ['responsive websites', 'user-friendly interfaces', 'interactive experiences', 'modern web applications'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            const currentWord = typingWords[wordIndex];
            
            if (isDeleting) {
                // Remove char
                typingElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                // Add char
                typingElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }
             // DOM Elements
        const themeToggleBtn = document.getElementById('themeToggle');
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
            // Initial type speed
            let typeSpeed = 200;
            
            if (isDeleting) {
                typeSpeed /= 2;
            }
            
            // If word is complete
            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 1000; // Pause at end of word
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex++;
                
                // Move to first word if last word is completed
                if (wordIndex === typingWords.length) {
                    wordIndex = 0;
                }
            }
            
            setTimeout(type, typeSpeed);
        }
         // Mobile Menu Toggle
        function toggleMenu() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        }
        
        // Animate Skill Bars on Scroll
        function animateSkills() {
            skillBars.forEach(skill => {
                const width = skill.getAttribute('data-width');
                skill.style.width = width;
            });
        }
        
        // Form Submission
        function handleFormSubmit(e) {
            e.preventDefault();
            alert('Thank you for your message! This is a demo form, so your message wasn\'t actually sent.');
            contactForm.reset();
        }
          // Dark/Light Mode Toggle
        function toggleTheme() {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('theme', 'light');
            }
        }
        
       
        // Close Mobile Menu when clicking on a link
        function closeMenu() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
         // Event Listeners
        themeToggleBtn.addEventListener('click', toggleTheme);
        hamburger.addEventListener('click', toggleMenu);
        contactForm.addEventListener('submit', handleFormSubmit);
        
        // Close mobile menu when clicking on links
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
        
        // Initialize
        function init() {
            // Check for saved theme preference
            if (localStorage.getItem('theme') === 'dark') {
                document.body.classList.add('dark-mode');
                themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            }
            
            // Start typing effect
            type();
              // Animate skills when in viewport
            window.addEventListener('scroll', () => {
                const skillsSection = document.querySelector('.skills-container');
                const sectionPosition = skillsSection.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (sectionPosition < screenPosition) {
                    animateSkills();
                }
            });
        }
        
        // Run initialization when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);
document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  try {
    let response = await fetch("https://formspree.io/f/mjkoovlj", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("✅ Message sent successfully!");
      form.reset();
    } else {
      alert("❌ Oops! Something went wrong.");
    }
  } catch (err) {
    alert("⚠️ Error: " + err.message);
  }
});
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  hamburger.classList.toggle('active');
});

// Optional: close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
    hamburger.classList.remove('active');
  });
});

   