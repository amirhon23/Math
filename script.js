// //Math
// let num = 3.9
// let pi = Math.PI //3.14....
// let random = Math.random()  * 10 //рандомное число
// let roundNum = Math.round(num) // логическое округление
// let floorNum = Math.floor(random) // округление в меньшую сторону
// let ceilNum = Math.ceil(random) // округление в большую сторону
// let powNumber = Math.pow(3, 2) //3 ** 2 возведение в степень 

// let arr = [22,4,5,10,7,6, -29] //array
// console.log(...arr); //spread оператор ...

// let min = Math.min(...arr) // получает минимальное число
// let max = Math.max(...arr) // получает максимальное число

// let fixedNum = pi.toFixed(2) //переводит в строку и обрезает дробные числа

// let price = "100.50 dolars"

// // console.log(pi);
// // console.log(random);
// // console.log(roundNum);
// // console.log(floorNum);
// // console.log(ceilNum);
// // console.log(powNumber);
// console.log(
//     // min
//     // max
//     //fixedNum

//     // parseInt(price) * 2 //parseInt достает целое число
//     // parseFloat(price) //parseFloat достает не целое число 
// );

/* Задание: сделать программу которая будет с кладывать 2 числа и переводит в тип number */
// let numOne = +prompt("Введите число 1")
// let numTwo = +prompt("Введите число 2")

// console.log(numOne + numTwo);


//1
let num = 4.5234512235070
let floorNum = Math.floor(num)
console.log(floorNum);
//2
let num5 = [1,-3,13,0,18,-34,32,-54] 
let min = Math.min(...num5)
let max = Math.max(...num5)
console.log(min);
console.log(max);
//3
let random = Math.floor(Math.random() * 100)
console.log(random);
//4
let num2 = parseInt(prompt("основаной степени"));
let num3 = parseInt(prompt("показатель степени"));
console.log(Math.pow(num2,num3));

