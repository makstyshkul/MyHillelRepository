// /--------------DZ10--------------------------------------/
// Найти сумму и количество положительных элементов
// let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let sum = 0;
// let kol = '';
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] > 0) {
// 		sum += arr[i];
// 		kol += `${arr[i]} ` ;
// 	}
// }
// console.log(sum,kol);
// Найти минимальный элемент массива и его порядковый номер
// let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// function min(test){
// 	let result = 0;
// for(let i of test ){
// if( i < result){
// 	result = i;
// }
// }
// return result ;
// }
// console.log(min(arr),arr.indexOf(-63));
// Найти максимальный элемент массива и его порядковый номер
// let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// function max(test){
// 	let result = 0;
// for(let i of test ){
// if( i > result){
// 	result = i;
// }
// }
// return result ;
// }
// console.log(max(arr),arr.indexOf(76));
// Определить количество отрицательных элементов
// let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let kol = '';
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] < 0) {
// 		kol += `${arr[i]} ` ;
// 	}
// }
// console.log(kol);
// Найти количество нечетных положительных элементов.
// let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let kol = '';
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] > 0 && arr[i] % 2 !== 0)  {
// 		kol += `${arr[i]} ` ;
// 	}
// }
// console.log(kol);
// Найти количество четных положительных элементов
// let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let kol = '';
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] > 0 && arr[i] % 2 === 0)  {
// 		kol += `${arr[i]} ` ;
// 	}
// }
// console.log(kol);
// Найти сумму четных положительных элементов
// let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let kol = '';
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] > 0 && arr[i] % 2 === 0)  {
// 		sum += arr[i];
// 		kol += `${arr[i]} ` ;
// 	}
// }
// console.log(sum,kol);
// Найти сумму нечетных положительных элементов.
// let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let kol = '';
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] > 0 && arr[i] % 2 !== 0)  {
// 		sum += arr[i];
// 		kol += `${arr[i]} ` ;
// 	}
// }
// console.log(sum,kol);
// Найти произведение положительных элементов.
// let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let kol = '';
// let sum = 1;
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] > 0)  {
// 		sum *= arr[i];
// 		kol += `${arr[i]} ` ;
// 	}
// }
// console.log(sum,kol);
// Найти наибольший среди элементов массива, остальные обнулить
// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// function max(test) {
// let maxNumb = Math.max.apply(null,arr);
// let removeArr = arr.splice(0,arr.length,76)
// return maxNumb;
// }
// console.log(max(arr),arr);
// /---------------------DZ9---------------------------------------/
// Создать массив, длину и элементы которого задаёт пользователь.
// Отсортировать массив по возрастанию.
// Удалить элементы из массива с 2 по 4 (включительно!)
// 	const arr = [];
// function test(){
// 		let lengthArr = prompt('Введите длину масива:','');
// 		for(let i = 0;i < lengthArr;i++){
// 					arr[i] = +prompt('input value :', '');
// 			if (arr[i] === ''){
// 				arr[i] = prompt('input value :','');
// 			}
// 		}
// 	let arrSort = 	arr.sort((a,b) => a-b).splice(1,3)
// 		return arr ;
// 	}
// console.log(test())
// /-----------------DZ11-----------------------------/ ????????
// let users = [
// {"index": 0,"isActive": true,"balance": "$2,226.60","name": "Eugenia Sawyer","gender": "female","phone": "+1 (840) 583-3207","address": "949 John Street, Rose, Puerto Rico, 1857"},
// {"index": 1,"isActive": true,"balance": "$2,613.77","name": "Pauline Gallegos","gender": "female","phone": "+1 (985) 593-3328","address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"},
// {"index": 2,"isActive": false,"balance": "$3,976.41","name": "Middleton Chaney","gender": "male","phone": "+1 (995) 591-2478","address": "807 Fleet Walk, Brutus, Arkansas, 9783"},
// {"index": 3,"isActive": true,"balance": "$1,934.58","name": "Burns Poole","gender": "male","phone": "+1 (885) 559-3422","address": "730 Seba Avenue, Osage, Alabama, 6290"},
// {"index": 4,"isActive": true,"balance": "$3,261.65","name": "Mcfadden Horne","gender": "male","phone": "+1 (942) 565-3988","address": "120 Scholes Street, Kirk, Michigan, 1018"},
// {"index": 5,"isActive": false,"balance": "$1,790.56","name": "Suzette Lewis","gender": "female","phone": "+1 (837) 586-3283","address": "314 Dunne Place, Bawcomville, Guam, 9053"}
// ]



// function test (){
// 	let numberClear  = [];
// 	let numberPhone = [];
// 	for (let i = 0 ; i < users.length;i++){
// 		numberClear.push(users[i].balance.slice(1).split(""));
// 		function removeElement(numberClear,item){
// 			if (item === String || Number){
// 				numberClear.splice(item,1);
				
// 			}
// 			return item;
// 		}
// 		removeElement(numberClear[i],1)
// 	console.log(numberClear)

// }
// for (let j = 0; j < numberClear.length;j++){
// 		if (numberClear[j] > '2,000'){
// 			numberPhone.push(users[j].phone)
// 	}
// 	}
// 	return numberPhone;
// }
// console.log(test())

// function test2 (){
// 	let numberClear  = [];
// 	let b ;
// 	for (let i = 0 ; i < users.length;i++){
// 	numberClear.push(users[i].balance.replaceAll('$','').replaceAll(',',''));
// 	console.log(numberClear)
// 	let a = [];
// for (let j = 0;j < numberClear.length;j++){
// 	a.push(parseInt(numberClear[j]))
// }
// console.log(a);
// let sum   = 0 ;
// b = a.reduce((previousValue, currentValue) => previousValue + currentValue,
// sum);
// }
// return  b;
// }
// console.log(test2())
// /--------------DZ12-------------------------------------/
// Реализуйте функцию removeElement(array, item), чтобы удалить элемент item из массива array.
// const arr = [2,3,4,'hi','world',56,33];
// function removeElement(arr,item){
// 	if (item === String || Number){
// 		arr.splice(item,1);
// 	}
// 	return item;
// }
// removeElement(arr,3);
// console.log(arr);
// removeElement(arr,4);
// console.log(arr);
// /-----------------------DZ13------------------------------------------------/
// Дан массив с элементами разных типов. Создать функцию которая высчитывает среднее арифметическое только числовых элементов данного массива.
// let arr = [1,22,31,'iibnini','kjj', true, false,null,50,{'name ': 'Max'},-4]
// let arrNumb = [];
// let arrSum = 0;
// function average (){
// 	for (let i = 0; i < arr.length;i++){
// 		if ( (arr[i] > 0 || arr[i] < 0) && arr[i] !== true){
// 			arrNumb.push(arr[i]);
// 		}
// 	}
// 		for (let j of arrNumb){
// 			arrSum+=j;

// 	}
// 	return arrSum / arrNumb.length;
// }
// console.log(average());
// Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak. В переменной znak может быть: +, -, *, /, %, ^ (степень). 
// Вывести результат математического действия, указанного в переменной znak. Оба числа и знак получаются от пользователя.
// let a = +prompt('Введите число:','');
// 	let b = prompt('Введите знак:','+/-/*, / ,% / ^');
// 	let c = +prompt('Введите число:','');
// function doMath(x , znak, y){
// 	let result = 0;
// 	if (znak === '+'){
// 	result =	x + y;
// 	}else if(znak === '-'){
// 		result = x - y;
// 	}
// 	else if(znak === '*'){
// 		result = x * y;
// 	}
// 	else if(znak === '/'){
// 		result = x / y;
// 	}
// 	else if(znak === '^'){
// 		result = x**y;
// 	}
// 	else if(znak === '%'){
// 		result = x % y;
// 	}else{
// 		alert('Знак не найден!')
// 	}
// 	return result;
// }
// console.log(doMath(a,b,c));
// Написать функцию заполнения пользовательскими данными двумерного массива. Длину основного массива и внутренних массивов задаёт пользователь. 
// Значения всех элементов всех массивов задаёт пользователь
// let mainArr = [];
// let secondArr = [];
// let thirdArr = [];
// function test(){
// 		let a = prompt('input a length of array:','');
// 		for(let i = 0;i < a;i++){
// 					secondArr[i] = +prompt('input value :', '');
// 			if (secondArr[i] === ''){
// 				secondArr[i] = prompt('input value :','');
// 			}
// 		}
// 		console.log(secondArr);
// 		let b = prompt('input a length of array:','');
// 		for(let j = 0;j < a;j++){
// 					thirdArr[j] = +prompt('input value :', '');
// 			if (thirdArr[j] === ''){
// 				thirdArr[j] = prompt('input value :','');
// 			}
// 		}
// 		console.log(thirdArr);
// 	mainArr.push(secondArr,thirdArr);
// 		return mainArr;
// 	}
// console.log(test())
// Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом. 'func("hello world", ['l', 'd'])' вернет нам "heo wor". 
// Исходную строку и символы для удаления задаёт пользователь
// //let a = "hello world";
// let a = prompt("input a string:",'');
// //let b = ['l','d'];
// let b = [prompt("input a letter:",''),prompt("input a letter:",'')];

// function deleteWord(string, values) {
// let c = b.join('');
// let d  = a.replace(new RegExp(`[${c}]`, 'gi'),'')
// 	return d;
// }
// console.log(deleteWord(a, b))
