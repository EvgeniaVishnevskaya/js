function sayHelloToConsole() {
  console.log('Hello!')
}
sayHelloToConsole()
//alert("Hello!")

function sayHello(name = "незнакомец") {
  //if (name === undefined) {
  //  name = "незнакомец"
  //}
  //name = name || "незнакомец"
  alert('Hello, ' + name + '!')
}
//sayHello("Женя")
//sayHello()

let adminName = 'Иннокентий'
function logUser() {
  let userName = 'Иван Иваныч'
  console.log(userName)
  console.log(adminName);
}
logUser()
//console.log(userName)
console.log(adminName);

function getName() {
  let myName = 'Женя'
  return myName
}
let user = getName()
console.log(user);

function makeCoffe(cups, withMilk) {
  if (withMilk) {
    return console.log('Варю ' + cups + ' кофе с молоком');
  }
  return console.log('Варю ' + cups + ' кофе без добавок');
}
makeCoffe(24, false)
makeCoffe(5, true)
makeCoffe(8)

function findMax(a, b) {
  if (a === b) {
    return 'Числа равны'
  }
  if (a > b) {
    return a
  }
  return b


}
console.log(findMax(1, 3))
console.log(findMax(2, 2))
console.log(findMax(4, 2))


function showQuote(text, author) {
  author = author || "Неизвестный автор"
  if (text) {
    return console.log(text + ' - ' + author);
  }


}
showQuote('У лукоморья дуб зеленый...', 'А.С. Пушкин')
showQuote()
showQuote('Шла Саша по шоссе и сосала сушку')




function addOne(a) {
  return a + 1
}
console.log(addOne(8))
//console.log(addOne(Math.random()));




function nextEven(num) {
  let residue = Math.round(num) % 2
  if (residue === 0) {
    return Math.round(num) + 2
  }
  return Math.round(num) + 1
}
console.log(nextEven(11));
console.log(nextEven(34));
console.log(nextEven(12.4));
console.log(nextEven(11.2));
console.log(nextEven(12.8));
