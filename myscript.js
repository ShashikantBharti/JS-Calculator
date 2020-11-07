let keypress = document.querySelector('.keypad');
let display = document.querySelector('.display');
let temp = '';
let opr = '';
let result = '';
keypress.addEventListener('click',function(e){
	if(e.target.className === 'num') {
		temp += e.target.innerText;
		display.innerText = temp;
	} else if(e.target.className === 'opr') {
		if(opr !== '') {
			switch(opr) {
			case '+': result = parseInt(result) + parseInt(temp); break;
			case '-': result = parseInt(result) - parseInt(temp); break;
			case '*': result = parseInt(result) * parseInt(temp); break;
			case '/': result = parseInt(result) / parseInt(temp); break;
			}
		display.innerText = result;
		}
		opr = e.target.innerText;
		if(result == '') {
			result = temp;
		}
		temp = '';
	} else if(e.target.className === 'eval') {
		switch(opr) {
			case '+': result = parseInt(result) + parseInt(temp); break;
			case '-': result = parseInt(result) - parseInt(temp); break;
			case '*': result = parseInt(result) * parseInt(temp); break;
			case '/': result = parseInt(result) / parseInt(temp); break;
		}
		display.innerText = result;
	} else{
		temp = '';
		result = '';
		opr = '';
		display.innerText = '';
	}
	// console.log(temp);
	// console.log(opr);
	// console.log(result);
});