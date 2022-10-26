class Hamburger{
	tugric = 0;
	calories = 0;
	constructor(){

	}
	sizeSmall(){
		this.tugric = 50;
		this.calories = 20;
		
	}
	sizeBig(){
		this.tugric = 100;
		this.calories = 40;
	}
	addCheese(){
		this.tugric = this.tugric + 10;
		this.calories = this.calories + 20;
	}
	addSalat(){
		this.tugric = this.tugric + 20;
		this.calories = this.calories + 5;
	}
	addPotato(){
		this.tugric = this.tugric + 15;
		this.calories = this.calories + 10;
	}
	addFlavoring(){
		this.tugric = this.tugric + 15;
		this.calories = this.calories + 0;
	}
	addMayo(){
		this.tugric  = this.tugric + 20;
		this.calories = this.calories + 5;
	}
	calculateCalories(){
		return this.calories  
	}
	calculatePrice(){
		return this.tugric;
	}
}

const hamburger = new Hamburger()
console.log(hamburger);
//маленький гамбургер с начинкой из сыра
hamburger.sizeSmall();
hamburger.addCheese();
console.log(hamburger);
// добавка из майонеза
hamburger.addMayo();
console.log(hamburger);
// спросим сколько там калорий
hamburger.calculateCalories();
console.log('Calories: ' + hamburger.calculateCalories());
// сколько стоит
console.log('Price: ' + hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
hamburger.addFlavoring();
console.log(hamburger);
//А сколько теперь стоит?
console.log('Price with flavoring: ' + hamburger.calculatePrice());
