class Person{
	constructor(surname,name,age){
		this.surname = surname;
		this.name = name;
		this.age = age;
	}
}
let a = prompt('please input a surname','vasiliev');
let  b =  prompt('please input a name','ivan')
let c = +prompt('please input an age','23')
const person = new Person(a,b,c)
function surname (){
		if(a === null || ''){
			alert('please input your surname')
		}
}
surname();
function name (){
	if(b === null || ''){
		alert('please input your name')
	}
}
name();
console.log(person)

class Car {
	constructor(marka,model,type){
		this.marka = marka;
		this.model = model;
		this.type = type;
	}
	owner(){
		this.surname = person.surname;
		this.name = person.name;
		this.age = person.age;
	}
	}
	function age(){
		if(c < 18){
		alert('you dont have a driver license')
			}
		}
age()
const car = new Car(prompt('please input a marka','audi'),prompt('please input a model','r8'),prompt('please input a type','passenger'));
console.log(car)
car.owner();
console.log(car)
