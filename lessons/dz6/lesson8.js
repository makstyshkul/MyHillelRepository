	class CoffeeRecept {

		#coast = 0;  
		#sugar = 0;
		volume = 0;
		coffee = 0;
	
		constructor(){
		// this.volume = volume;
		// this.coffee = volume;
	
		// this.#coast = coast;
		}
	
		setSugar(value = 0){
		this.#sugar = this.#sugar + value;
		this.#coast = this.#coast + value * 5;
		}
	
		addSugar(){
		this.#sugar = this.#sugar + 1;
		this.#coast = this.#coast + 5;
		}
	
		get coast(){
		return this.#coast;
		}
	
		getSugar(){
		return this.#sugar;
		}
	
		cookingEspresso(mult = 1) {
		this.coffee = this.coffee + 15 * mult;
		this.#coast = this.#coast + 20 * mult;
		this.volume = this.volume;
		}
	
		getInfo() {
		return {
			coffee : this.coffee,
			volume: this.volume,
			coast: this.#coast,
			sugar: this.#sugar,
		}
		}
	}
	class EspressoRecept extends CoffeeRecept{
		constructor(){
		super();
		this.cookingEspresso();
		}
	}
	
	
	const espresso = new EspressoRecept(20, 5);
	espresso.addSugar();
	
	
	console.log(espresso.getInfo());
	
	class AmericanoRecept extends CoffeeRecept {
		constructor(water){
		super();
		this.cookingEspresso();
		this.water = water;
		this.volume = this.volume + water;
		}
	
		getInfo(){
		const result = super.getInfo();
		return {
			...result,
			water: this.water
		}
		}
	
		addWater(water){
		this.water = this.water + water;
		this.volume = this.volume + water;
		}
	}
	
	const americano = new AmericanoRecept(30);
	console.log(americano)
	
	americano.cookingEspresso(2);
	americano.addWater(400);
	americano.cookingEspresso();
	
	console.log(americano.getInfo())
	
	class LatteRecept extends CoffeeRecept{
		constructor(milk){
		super(20);
	
		this.volume = this.volume + milk;
		this.coffee = this.coffee;
		this.milk = milk;
		}
	}
	
	class DoubleLatteRecept {
		constructor(){
		const firstLatte = new LatteRecept(50);
		const secondLatte = new LatteRecept(50);
	
		this.volume = firstLatte.volume + secondLatte.volume;
		this.coffee = firstLatte.coffee + secondLatte.coffee;
		this.milk = firstLatte.milk + secondLatte.milk;
		}
	}

// DZ

	class Cup{
		constructor(size,volume,coffee){
			this.size = size
			this.volume = volume
			this.coffee = coffee
		}
		static checkVolume(volume,size){
			this.volume = volume
			this.size = size
			if(this.size === Cup.sizes.smallSize && this.volume > Cup.sizes.smallSize ){
				this.volume = undefined
				alert('Объём не может быть больше чем стакан,yкажите правильный объём');
			}
			if(this.size === Cup.sizes.mediumSize && this.volume > this.sizes.mediumSize){
				this.volume = undefined
				alert('Объём не может быть больше чем стакан,yкажите правильный объём');
			}
			if(this.volume > this.sizes.bigSize){
				this.volume = undefined
				alert('Объём не может быть больше чем стакан,yкажите правильный объём');
			}
			return this.volume
		}
		static sizes = {
		smallSize : 100,
		mediumSize : 250,
		bigSize : 500
		};
		
	}

const cup = new Cup(Cup.sizes.smallSize,Cup.checkVolume(50,Cup.sizes.smallSize),20)
console.log(cup)

class TwoCups {
	constructor(volume,coffee){
	const mainCup = new Cup(Cup.sizes.smallSize,Cup.checkVolume(75,Cup.sizes.smallSize),20)
	const secondaryCup = new Cup()
	secondaryCup.volume = volume;
	secondaryCup.coffee = coffee;
	mainCup.volume  = mainCup.volume - volume;
	mainCup.coffee  = mainCup.coffee - coffee;
	secondaryCup.size = mainCup.size;

	return mainCup , secondaryCup
	}
}
const twoCups = new TwoCups(25,10);
console.log(twoCups)