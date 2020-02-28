

let divsNumber = 10
//let count = 0
//while (count < divsNumber) {
//  let div = document.createElement('div')
//  document.body.append(div)
//  count += 1
//}


 for (let i = 0; i < divsNumber; i+=1) {
   let div = document.createElement('div')
   div.style.background = `rgb(2${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
   document.body.append(div)
   div.style.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh)`
 }
