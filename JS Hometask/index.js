console.log("Hello world");

// 1. Зробіть функцію, яка приймає параметром число від 1 до 7, а повертає день тижня українською мовою

// function getDayOfWeek(dayNumber) {
//     let days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П/ятниця', 'Субота', 'Неділя'];
//     return days[dayNumber - 1];
// }
// let dayNumber = 1; // Змінювати значення тут
// console.log(`${getDayOfWeek(dayNumber)}`);


// // 2. Даний рядок типу 'var_text_hello'. Зробіть із нього текст 'VarTextHello'.

// let inputString = 'var_text_hello';
// let outputString = inputString.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
// console.log(outputString);

// // 3. Створіть функцію, яка заповнюватиме масив 10-ма іксами за допомогою циклу.

// function fillArrayWithX() {
//     const array = [];
//     for (let i = 0; i < 10; i++) {
//         array.push('x');
//     }
//     return array;
// }
// console.log(fillArrayWithX());

// // 4. Якщо змінна a більше нуля - то в ggg запишемо функцію, яка виводить один!, інакше запишемо функцію, яка виводить два!

// let ggg;
// let a = -5; // Змінювати значення тут

// if (a > 0) {
//     ggg = function() {
//         console.log('один!');
//     };
// } else {
//     ggg = function() {
//         console.log('два!');
//     };
// }

// ggg();

// // 5. Функція ggg приймає 2 параметри: анонімну функцію, яка повертає 3 та анонімну функцію, яка повертає 4. Поверніть результатом функції ggg суму 3 та 4

// function ggg(func1, func2) {
//     return func1() + func2();
// }

// let result = ggg(function() { return 3; }, function() { return 4; });

// console.log(result);

// // 6. Написати функцію яка порівнює два масиви, якщо вони ідентичні тоді повертаємо true інакше false

// let array1 = [1, 2, 3]; // Змінні міняти тут
// let array2 = [1, 2, 3]; // Змінні міняти тут

// function compareArrays(arr1, arr2) {
//     return JSON.stringify(arr1) === JSON.stringify(arr2);
// }
// console.log(compareArrays(array1, array2));

// // 7. Написати функцію яка розбиває масив на підмасиви  за заданим розміром. Приклад ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

// function splitArray(arr, chunkSize) {
//     const result = [];
//     for (let i = 0; i < arr.length; i += chunkSize) {
//         result.push(arr.slice(i, i + chunkSize));
//     }
//     return result;
// }

// let exampleArray = [1, 2, 3, 4, 5];
// let chunkSize = 2;
// let resultArray = splitArray(exampleArray, chunkSize);

// console.log(resultArray);