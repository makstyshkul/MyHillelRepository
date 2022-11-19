
const body = document.querySelector('body');


	const array = ['<img src="images/1.jpg" alt="">','<img src="images/2.jpg" alt="">','<img src="images/3.jpg" alt="">','<img src="images/4.jpg" alt="">',
	'<img src="images/5.jpg" alt="">','<img src="images/6.jpg" alt="">','<img src="images/7.jpg" alt="">','<img src="images/8.jpg" alt="">',
	'<img src="images/9.jpg" alt="">'];
	
		let arrayItem = array[Math.floor(Math.random() * array.length)];
		
		body.innerHTML = arrayItem;