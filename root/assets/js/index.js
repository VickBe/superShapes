


const duplicateHtml = (element, quantity) => {

  const newContent = element.innerHTML

  const content = new Array(quantity).fill(newContent).join('')

  element.innerHTML = content
}

duplicateHtml(document.querySelector('#crosses'), 10)

duplicateHtml(document.querySelector('#tinySquares'), 40)

duplicateHtml(document.querySelector('#dots'), 20)

anime({
  targets: '#crosses path',
  rotate: '1turn',
  delay: (el, i) => i * 100,
  duration: 1200,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

anime({
  targets: '.conveyor',
  translateX: '-50%',
  duration: 1500,
  loop: true,
  easing: 'linear'
})

anime({
  targets: '#tunnel circle',
  scale: 1.2,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine',
  duration: 250,
  delay: (element, index) => index * 50
})
const zigzagPath = document.querySelector('#zigzag path')
const zigzagOffset = anime.setDashoffset(zigzagPath)
zigzagPath.setAttribute('stroke-dashoffset', zigzagOffset)
anime({
  targets: zigzagPath,
  strokeDashoffset: [zigzagOffset, 0],
  duration: anime.random(1000, 4000),
  delay: anime.random(0, 1000),
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine',
  autoplay: true
})

const wavePath = document.querySelector('#wave path')
const waveOffset = anime.setDashoffset(wavePath)
wavePath.setAttribute('stroke-dashoffset', waveOffset)
anime({
  targets: wavePath,
  strokeDashoffset: [waveOffset, 0],
  duration: anime.random(1000, 4000),
  delay: anime.random(0, 1000),
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine',
  autoplay: true

})

const tinySquaresAnimation = document.querySelectorAll('#tinySquares .tinySquare')
tinySquaresAnimation.forEach(tinySquare => {
  anime({
    targets: tinySquare,
    rotate: (el, i) => anime.random(90, 360),
    delay: (el, i) => anime.random(0, 500),
    duration: (el, i) => anime.random(250, 750),
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate',
    autoplay: true
  })
})


// anime({
//   targets: '#dots .dot ',
//   scale: [0, 1.2],
//   delay: (el, i) => i * 100,
//   duration: 200,
//   loop: true,
//   direction: 'alternate',
//   easing: 'easeInOutSine'
// })

const dotsAnimation = document.querySelectorAll('#dots .dot')
dotsAnimation.forEach(dot => {
  anime({
    targets: dot,
    scale: (el, i) => anime.random(0.1, 1.1),
    delay: (el, i) => anime.random(200, 800),
    duration: (el, i) => anime.random(500, 950),
    loop: true,
    easing: 'easeInOutSine',
    autoplay: true
  })
})

anime({
  targets: '.flash',
  // we put the colors into an array and grab each one by its index
  backgroundColor: (el, i) => ['#E8505B', '#18B0AB', '#F9D56D', '#8675A8'][i],
  // apply a random delay to each one
  delay: (el, i) => anime.random(50, 100),
  duration: 500,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

anime({
  targets: '#squares rect',
  // we need to force the translate position to center the squares
  translateX: ['-50%', '-50%'],
  // we’re not actually animating them, it’s a bit of a hack
  translateY: ['-50%', '-50%'],
  // animate rotation from 45 to 0 to -45
  rotate: [45, 0, -45],
  // delay each one incrementally by 100ms
  delay: (el, i) => 100 * i,
  duration: (el, i) => 750,
  loop: true,
  easing: 'easeInOutSine',
  direction: 'alternate'
})