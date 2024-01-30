let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const interval = 5000; 

function showSlides() {
  document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 50}%)`;
}

function updateDots() {
  const dotsContainer = document.getElementById('slider-dots');
  dotsContainer.innerHTML = '';

  for (let i = 0; i < totalSlides / 2; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot'); 
    if (i === currentIndex / 2) {
      dot.classList.add('active-dot');
    }
    dot.addEventListener('click', () => {
      currentIndex = i * 2;
      showSlides();
      updateDots();
    });
    dotsContainer.appendChild(dot);
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex -= 2;
    showSlides();
    updateDots();
  }
}

function nextSlide() {
  if (currentIndex < totalSlides - 2) {
    currentIndex += 2;
    showSlides();
    updateDots();
  }
}

function autoSlide() {
  setInterval(() => {
    nextSlide();
  }, interval);
}


showSlides();
updateDots();
autoSlide();