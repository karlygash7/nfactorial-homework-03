// Работа с циклами(loops).

// 1. Посчитайте сумму всех четных чисел в промежутке 1-100. Выведите в консоль.
let result = 0;
for (let i = 1; i <= 100; i++){
    result += i;
}
console.log(result);

// Перепишите цикл for на while.

let b = 0;
while (b<3){
    b++;
    alert( `number ${b}!` );
}
