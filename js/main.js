const container = document.querySelector('.container')
const slides = Array.from(container.children)
const nxtBtns = document.querySelectorAll('.slider-btn--next')
const prevBtns = document.querySelectorAll('.slider-btn--preview')
const sliderCntl = document.querySelector('.slider-controls')

const slideWidth = slides[0].getBoundingClientRect().width

slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + 'px'
})

nxtBtns.forEach((n) => {
  n.addEventListener('click', () => {
    const currentSlide = container.querySelector('.active')
    const nextSlide = currentSlide.nextElementSibling
    const destination = getComputedStyle(nextSlide).left

    container.style.transform = `translateX(-${destination})`
    currentSlide.classList.remove('active')
    nextSlide.classList.add('active')
    currentSlide.classList.add('inactive')
    nextSlide.classList.remove('inactive')
  })
})

prevBtns.forEach((p) => {
  p.addEventListener('click', () => {
    const currentSlide = container.querySelector('.active')
    const prevSlide = currentSlide.previousElementSibling
    const destination = getComputedStyle(prevSlide).left

    container.style.transform = `translateX(-${destination})`
    currentSlide.classList.remove('active')
    prevSlide.classList.add('active')
    currentSlide.classList.add('inactive')
    prevSlide.classList.remove('inactive')
  })
})
