// Координаты палуб корабля
let location1 = Math.floor(Math.random() * 7)
let location2 = location1 + 1
let location3 = location2 + 1
// Координата выстрела
let currentShot
// Сколько сделано выстрелов
let shots = 0
// Сколько попаданий
let hits = 0
//  Потоплен ли корабль?
let isSunk = false

//Цикл игры: работает пока корабль не потонет
while (isSunk === false) {
  // Получаем координаты выстрела
  currentShot = Number(prompt('Введите число от 0 до 9:'))
  // Отмечаем, что сделан выстрел
  shots += 1

  if (currentShot === location1 || currentShot === location2 || currentShot === location3) {
    alert('Попал!')
    hits +=1
    if (hits === 3) {
      isSunk = true
      alert('Пустой кораль утонул. Победа!')
    }
  } else {
    if (currentShot > 9 || currentShot < 0 ) {
      alert('Ошибка! Введите число от 0 до 9:')
    } else {
      alert('Промах!')
    }
  }

  // Проверяем попадание



  // Если не попал, то играем дальше
  // Если попал, то увеличиает счетчик попаданий
  // Если попал 3 раза, то топим корабль и сообщаем игроку об успехе
  // isSunk = true
}
