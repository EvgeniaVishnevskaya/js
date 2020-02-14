let targetsExample01 = anime({
  targets: '.targets .box',
  translateX: 250,
  autoplay: false
})


let turgetsBtn01 =
  document.querySelector('#targetsBox')
turgetsBtn01.onclick = targetsExample01.play

let targetsExample02 = anime({
  targets: '.targets .triangle',
  translateX: 150,
  autoplay: false
})
let turgetsBtn02 =
  document.querySelector('#targetsTriangle')
turgetsBtn02.onclick = targetsExample02.play



let propsAnimation01 = anime ({
  targets: '.props .box',
  translateX: 400,
  rotate: 180,
  backgroundColor: '#fff',
  borderRadius: ['0%', '50%'],
  autoplay: false,
  duration: 1000,
  easing: 'easeInOutQuad'
})
let propsBtn01 = document.querySelector('#propsBtn01')
propsBtn01.onclick = propsAnimation01.play
