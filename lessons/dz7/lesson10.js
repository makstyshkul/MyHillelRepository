
const body = document.querySelector('body');
const divInfo = document.createElement('div');
divInfo.innerText = 'text text text';

const inputRef = document.querySelector('input');

	inputRef.onfocus = function (){
		body.append(divInfo);
		}
		
		inputRef.onblur = function(){
			divInfo.remove('');
		}