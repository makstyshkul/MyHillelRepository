class Hamburger {
	static tugric = 0;
	static calories = 0;
	constructor(sizes,stuffing) {
		this.sizes = sizes;
		this.stuffing = stuffing;
	}
	static sizeSmall = {
		tugric  : 50,
		calories : 20
	}

	static sizeBig =  {
		tugric : 100,
		calories : 40
	}

	static addCheese = {
		tugric :  10,
		calories :  20
	}

	static addSalat =  {
		tugric :  20,
		calories :  5
	}

	static addPotato = {
		tugric :  15,
		calories :  10
	}

static addMayo = {
		tugric :  20,
		calories : 5
	}

	static addFlavoring = {
		tugric :  15,
		calories :  0
	}

	

	addTopping(topping){
		this.topping = topping;
	}

	calculateCalories() {
		let countCalories =  this.sizes.calories + this.stuffing.calories + this.topping.calories;
	return	countCalories;
	}

	calculatePrice() {
		let countTugric =  this.sizes.tugric + this.stuffing.tugric + this.topping.tugric;
		return countTugric;
	}
}

// маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.sizeSmall,Hamburger.addCheese);

// добавка из майонеза
hamburger.addTopping(Hamburger.addMayo)

// спросим сколько там калорий
console.log('Calories: ' + hamburger.calculateCalories());

// сколько стоит
console.log('Price: ' + hamburger.calculatePrice());

// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.addFlavoring)

// А сколько теперь стоит?
console.log('Price with flavoring: ' + hamburger.calculatePrice());
