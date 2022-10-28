class Person{
	constructor(surname,name,age){
		this.surname = surname;
		this.name = name;
		this.age = age;
	}
	surnamePer(){
		if(this.surname === null || ''){
			alert('please input your surname')
		}
}
namePer(){
	if(this.name === null || ''){
		alert('please input your name')
	}
}
}
const person = new Person(prompt('please input a surname','vasiliev'), prompt('please input a name','ivan'),+prompt('please input an age','23'))
person.surnamePer();
person.namePer();
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
	age(){
		if(person.age < 18){
		alert('you dont have a driver license')
			}
		}
	}
const car = new Car(prompt('please input a marka','audi'),prompt('please input a model','r8'),prompt('please input a type','passenger'));
car.age()
console.log(car)
car.owner();
console.log(car)
