// Text Slider Animation - 2 SECOND INTERVAL
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.text-slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
    
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }

  function nextSlide() {
    let next = currentSlide + 1;
    if (next >= slides.length) {
      next = 0;
    }
    showSlide(next);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      clearInterval(slideInterval);
      showSlide(index);
      slideInterval = setInterval(nextSlide, 4000);
    });
  });

  slideInterval = setInterval(nextSlide, 4000);
  showSlide(0);

  const container = document.querySelector('.services-hero');
  container.addEventListener('mouseenter', function() {
    clearInterval(slideInterval);
  });
  
  container.addEventListener('mouseleave', function() {
    slideInterval = setInterval(nextSlide, 4000);
  });
});

// _______________next__________________
// ====== PROJECTS FILTER ======
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
});

// -------------------Orange Box-------------------------

document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.num');
    
    // Options for Intersection Observer
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Triggers when 50% of the element is visible
    };
    
    // Function to animate counter
    function animateCounter(counter) {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // Animation duration in milliseconds
        const startTime = performance.now();
        
        // Update counter function
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(easeOutQuart * target);
            
            counter.textContent = currentValue;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        }
        
        // Start animation
        requestAnimationFrame(updateCounter);
    }
    
    // Intersection Observer callback
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                animateCounter(counter);
                observer.unobserve(counter); // Stop observing after animation starts
            }
        });
    }
    
    // Create observer
    const observer = new IntersectionObserver(handleIntersection, options);
    
    // Observe each counter
    counters.forEach(counter => {
        observer.observe(counter);
    });
});

// ===== MAP FUNCTIONS =====

function openFullscreen() {
    const mapIframe = document.querySelector('.google-map iframe');
    if (mapIframe) {
        if (mapIframe.requestFullscreen) {
            mapIframe.requestFullscreen();
        } else if (mapIframe.webkitRequestFullscreen) {
            mapIframe.webkitRequestFullscreen();
        } else if (mapIframe.msRequestFullscreen) {
            mapIframe.msRequestFullscreen();
        }
    }
}

function getDirections() {
    const address = '198 West 21st Street, New York, NY 10010';
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
}

// ===== SCROLL ANIMATION FOR SERVICES =====
document.addEventListener('DOMContentLoaded', function() {
    // Function to check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < window.innerHeight - 100 &&
            rect.bottom > 0
        );
    }

    // Function to animate elements
    function animateOnScroll() {
        // Animate heading
        const header = document.querySelector('.services-header');
        if (header && isElementInViewport(header)) {
            header.classList.add('visible');
        }

        // Animate service cards
        const cards = document.querySelectorAll('.service-card');
        cards.forEach(card => {
            if (isElementInViewport(card)) {
                card.classList.add('visible');
            }
        });
    }

    // Run animation on load
    setTimeout(animateOnScroll, 100);

    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Run animation on resize
    window.addEventListener('resize', animateOnScroll);
});

// ===== WHO WE ARE ANIMATION =====
document.addEventListener('DOMContentLoaded', function() {
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight - 80 && rect.bottom > 0;
    }

    function animateWhoWeAre() {
        const content = document.querySelector('.who-we-are-content');
        const image = document.querySelector('.who-we-are-image');

        if (content && isElementInViewport(content)) {
            content.classList.add('visible');
        }

        if (image && isElementInViewport(image)) {
            image.classList.add('visible');
        }
    }

    // Run on load
    setTimeout(animateWhoWeAre, 200);

    // Run on scroll
    window.addEventListener('scroll', animateWhoWeAre);
    window.addEventListener('resize', animateWhoWeAre);
});

// ===== PROJECTS HEADER ANIMATION ONLY =====
document.addEventListener('DOMContentLoaded', function() {
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight - 80 && rect.bottom > 0;
    }

    function animateProjectsHeader() {
        const header = document.querySelector('.projects-header');
        if (header && isElementInViewport(header)) {
            header.classList.add('visible');
        }
    }

    // Run on load
    setTimeout(animateProjectsHeader, 200);

    // Run on scroll
    window.addEventListener('scroll', animateProjectsHeader);
    window.addEventListener('resize', animateProjectsHeader);
});