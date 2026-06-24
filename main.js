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