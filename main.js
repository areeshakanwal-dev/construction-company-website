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