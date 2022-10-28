class SuperMath{
	constructor(){

	}
	sum(){
		return this.x + this.y
	}
	sub(){
		return	this.x - this.y
	}
	mult(){
		return	this.x * this.y
	}
	div(){
		return	this.x / this.y
	}
	pres(){
		return	this.x % this.y
	}
	input(){
		
		this.x = 	+prompt('input a number:','');
		this.y	= +prompt('input a number:','');
		this.znak  = prompt('input a znak','')
		}
	checkZnak(){
		this.res = 0;
		//this.input();
		//if(this.znak === '+' || this.znak === '-' || this.znak === '*' || this.znak === '/' || this.znak === '%')
		switch(this.znak ){
			case '+':
				this.res  = this.sum();
				break;
				case '-':
					this.res  = this.sub();
				break;
				case '*':
					this.res  = this.mult();
				break;
				case '/':
					this.res  = this.div();
				break;
				case '%':
					this.res  = this.pres();
				break;
				default:
					this.res  = alert('znak is not defined')
				break;
		}
	}
	
	check(obj){
		this.obj = obj;
		let check  = confirm('Хотите ли вы подтвердить действие znaka c Х и У?');
		if(check === true ){
			return this.checkZnak();
		}else{
			this.input();
			return this.checkZnak();
		}
	}
}
const superMath = new SuperMath();
superMath.input()
superMath.check([superMath.x,superMath.y,superMath.znak]);
//superMath.check([2,3,'+']);
console.log(superMath)
