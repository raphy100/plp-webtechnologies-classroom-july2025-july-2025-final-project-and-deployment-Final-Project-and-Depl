// DOM Elements
        const themeToggleBtn = document.getElementById('themeToggle');
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        // Typing Effect
        const typingElement = document.getElementById('typing');
        const typingWords = ['responsive websites', 'user-friendly interfaces', 'interactive experiences', 'modern web applications'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            const currentWord = typingWords[wordIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typeSpeed = 200;
            
            if (isDeleting) {
                typeSpeed /= 2;
            }
            
            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 1000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex++;
                
                if (wordIndex === typingWords.length) {
                    wordIndex = 0;
                }
            }
            
            setTimeout(type, typeSpeed);
        }
        
        // Mobile Menu Toggle
        function toggleMenu() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('show');
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
            navMenu.classList.remove('show');
        }
        
        // Event Listeners
        themeToggleBtn.addEventListener('click', toggleTheme);
        hamburger.addEventListener('click', toggleMenu);
        
        // Close mobile menu when clicking on links
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
        
        // Initialize
        function init() {
            if (localStorage.getItem('theme') === 'dark') {
                document.body.classList.add('dark-mode');
                themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            }
            
            type();
        }
        
        document.addEventListener('DOMContentLoaded', init);