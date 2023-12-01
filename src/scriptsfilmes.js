// Sliders de duas imagens no filmes.html em todos os filmes

const slider = document.querySelectorAll('.slider');
const slider2 = document.querySelectorAll('.slider2');
const slider3 = document.querySelectorAll('.slider3');
const slider4 = document.querySelectorAll('.slider4');
const slider5 = document.querySelectorAll('.slider5');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
  slider2.forEach(item => item.classList.remove('on2'))
  slider3.forEach(item => item.classList.remove('on3'))
  slider4.forEach(item => item.classList.remove('on4'))
  slider5.forEach(item => item.classList.remove('on5'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
  slider2[currentSlide].classList.add('on2')
  slider3[currentSlide].classList.add('on3')
  slider4[currentSlide].classList.add('on4')
  slider5[currentSlide].classList.add('on5')
}

// Pular Slide do Filme
function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

setInterval(nextSlider, 2500) // Setar o tempo de intervalo entre as imagens automaticamente
