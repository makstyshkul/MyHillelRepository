class Apartments {
	constructor(flats, floors, number) {
		this.flats = flats;
		this.floors = floors;
		this.number = number;
	}
	// flat(){
	// 	this.person = flat.person;
	// 	this.floor =  flat.floor;
	// 	this.square =  flat.square;
	// }
	AddNewApartment(countFlats, countFloors, number) {
		this.flats = countFlats;
		this.floors = countFloors;
		this.number = number;
	}
}

class Flat {
	constructor(person, floor, square) {
		this.person = person;
		this.floor = floor;
		this.square = square;
	}
	persons() {
		this.surname = persons.surname;
		this.name = persons.name;
		this.age = persons.age;
		this.married = persons.married;
		this.child = persons.child;
	}
}

class Persons {
	constructor(surname, name, age, married, child) {
		this.surname = surname;
		this.name = name;
		this.age = age;
		this.married = married;
		this.child = child;
	}
}
const persons = new Persons('Ivanov', 'Ivan', 21, true, 1);
const flat = new Flat(3, 2, 70);
const apartment = new Apartments(10, 2, 1)
flat.persons();
console.log(flat)
console.log(persons)
// apartment.flat();
console.log(apartment)
apartment.AddNewApartment(15, 3, 2);
console.log(apartment)