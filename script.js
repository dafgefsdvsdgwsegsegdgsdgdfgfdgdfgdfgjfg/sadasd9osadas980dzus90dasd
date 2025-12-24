document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Loading Screen Logic
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
        // Re-initialize icons if needed or trigger animations
        
        // Typing Effect for Title
        const titleElement = document.querySelector('h1');
        const originalText = "GRAND ROLEPLAY";
        const spanText = " DE01";
        titleElement.innerHTML = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                titleElement.innerHTML += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                titleElement.innerHTML += `<span class="text-[#66e6ce] opacity-0 animate-fadeIn">${spanText}</span>`;
                setTimeout(() => {
                    document.querySelector('h1 span').classList.remove('opacity-0');
                }, 100);
            }
        };
        typeWriter();

    }, 5000);

    // Tab Switching Logic
    const tabs = document.querySelectorAll('[data-tab]');
    const sections = document.querySelectorAll('.content-section');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-tab');

            // Update Tab Styles
            tabs.forEach(t => {
                if (t === tab) {
                    t.classList.add('neon-border', 'bg-[#66e6ce]/20', 'text-[#66e6ce]', 'shadow-lg');
                    t.classList.remove('text-[#66e6ce]/60', 'hover:text-[#66e6ce]', 'hover:border-[#66e6ce]/60');
                } else {
                    t.classList.remove('neon-border', 'bg-[#66e6ce]/20', 'text-[#66e6ce]', 'shadow-lg');
                    t.classList.add('text-[#66e6ce]/60', 'hover:text-[#66e6ce]', 'hover:border-[#66e6ce]/60');
                }
            });

            // Show/Hide Sections
            sections.forEach(section => {
                if (section.id === `section-${targetId}`) {
                    section.classList.remove('hidden');
                    section.classList.add('animate-fadeIn');
                    
                    // Trigger Progress Bars if Experience Section
                    if (targetId === 'experience') {
                        animateProgressBars();
                    }
                } else {
                    section.classList.add('hidden');
                    section.classList.remove('animate-fadeIn');
                }
            });
        });
    });

    function animateProgressBars() {
        const bars = document.querySelectorAll('.progress-bar');
        bars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            // Reset width to 0 first to restart animation
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }

    // Copy Protection System
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    
    document.addEventListener('keydown', (e) => {
        // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+C, Ctrl+S, Ctrl+P, Ctrl+A
        if (
            e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || 
            (e.ctrlKey && e.key === 'u') || 
            (e.ctrlKey && e.key === 'c') ||
            (e.ctrlKey && e.key === 's') ||
            (e.ctrlKey && e.key === 'p') ||
            (e.ctrlKey && e.key === 'a')
        ) {
            e.preventDefault();
            return false;
        }
    });

    document.addEventListener('dragstart', (e) => e.preventDefault());
    document.addEventListener('selectstart', (e) => e.preventDefault());

    // Aggressive Anti-Debug
    setInterval(() => {
        // Function constructor trick to create a debugger breakpoint
        (function(){}).constructor("debugger")();
    }, 500);

    // Clear Console
    setInterval(() => {
        console.clear();
    }, 1000);
});
