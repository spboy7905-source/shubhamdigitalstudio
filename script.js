document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // 2. Gallery Filtering System
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('bg-amber-500', 'text-black'));
            filterBtns.forEach(b => b.classList.add('bg-[#112621]', 'text-amber-400', 'border', 'border-amber-500/30'));
            
            // Add active class to clicked button
            btn.classList.remove('bg-[#112621]', 'text-amber-400', 'border', 'border-amber-500/30');
            btn.classList.add('bg-amber-500', 'text-black');

            const filterValue = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // 3. Contact Form Submission Feedback (Simulation)
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('धन्यवाद! आपका संदेश Shubham Digital Studio तक पहुँच गया है। हम जल्द ही सुजानगढ़ से आपसे संपर्क करेंगे।');
            contactForm.reset();
        });
    }

    // 4. Navbar Background Blur on Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow-xl', 'bg-[#0b1915]/95');
        } else {
            header.classList.remove('shadow-xl', 'bg-[#0b1915]/95');
        }
    });
});
