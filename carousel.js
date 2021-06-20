let currentSlide = 1;

const showSlide = (slideIndex) => {
  const slides = document.getElementsByClassName('carousel-slide');
  if (slideIndex > slides.length) {
    currentSlide = 1
  }
  if (slideIndex < 1) {
    currentSlide = slides.length
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slides[currentSlide - 1].style.display = 'flex'
}


const nextSlide = () => {
  showSlide(currentSlide += 1);
}

const previousSlide = () => {
  showSlide(currentSlide -= 1);
}

// window.onload
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
  document.getElementById('prev').addEventListener('click',  () => {
    previousSlide();
  })

  document.getElementById('next').addEventListener('click', () => {
    nextSlide();
  })
})