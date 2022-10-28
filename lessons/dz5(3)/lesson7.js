class Hamburger {
	constructor() {

	}
	static tugric = 0;
	static calories = 0;

	static sizeSmall() {
		this.tugric = 50;
		this.calories = 20;

	}
	static sizeBig() {
		this.tugric = 100;
		this.calories = 40;
	}
	static addCheese() {
		this.tugric = this.tugric + 10;
		this.calories = this.calories + 20;
	}
	static addSalat() {
		this.tugric = this.tugric + 20;
		this.calories = this.calories + 5;
	}
	static addPotato() {
		this.tugric = this.tugric + 15;
		this.calories = this.calories + 10;
	}
	static addFlavoring() {
		this.tugric = this.tugric + 15;
		this.calories = this.calories + 0;
	}
	static addMayo() {
		this.tugric = this.tugric + 20;
		this.calories = this.calories + 5;
	}
	static calculateCalories() {
		return this.calories
	}
	static calculatePrice() {
		return this.tugric;
	}
}

const hamburger = new Hamburger()
//маленький гамбургер с начинкой из сыра
Hamburger.sizeSmall();
Hamburger.addCheese();
// добавка из майонеза
Hamburger.addMayo();
// спросим сколько там калорий
Hamburger.calculateCalories();
console.log('Calories: ' + Hamburger.calculateCalories());
// сколько стоит
console.log('Price: ' + Hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
Hamburger.addFlavoring();
console.log(hamburger);
//А сколько теперь стоит?
console.log('Price with flavoring: ' + Hamburger.calculatePrice());
