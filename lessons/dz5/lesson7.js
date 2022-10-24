class Apartments{
constructor(floats,floors,number){
this.floats = floats;
this.floors = floors;
this.number = number;
}
float(){
	this.person = float.person;
	this.floor =  float.floor;
	this.square =  float.square;
}
}
class AddNewApartment{
	floats = 0;
	constructor(count){
		this.floats = this.floats + count;
		this.floors = apartment.floors;
this.number = apartment.number;
	}
}

class Float{
constructor(person,floor,square){
	this.person = person;
	this.floor = floor;
	this.square =square;
}
persons(){
	this.surname = persons.surname;
	this.name = persons.name;
	this.age = persons.age;
	this.married = persons.married;
	this.child = persons.child;
	}
}

class Persons{
constructor(surname,name,age,married,child){
	this.surname = surname;
this.name = name;
this.age = age;
this.married = married;
this.child = child;
}
}
const persons = new Persons('Ivanov','Ivan',21,true,1);
const float = new Float(3,2,70);
const apartment = new Apartments(10,2,1)
float.persons();
console.log(float)
console.log(persons)
apartment.float();
console.log(apartment)
const addNewApartment = new AddNewApartment(15);
console.log(addNewApartment)