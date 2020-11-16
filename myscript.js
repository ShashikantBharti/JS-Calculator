// UI Elements
let keypress = document.querySelector('.keypad');
let display = document.querySelector('.display');
let temp = '';
let opr = '';
let result = '';
// Click Event on calculator Keys
keypress.addEventListener('click',function(e){
	debugger;
	if(e.target.className === 'num') { // Block if number key is pressed.
		temp += e.target.innerText; // Append number to temp variable.
		display.innerText = temp; // Display temp in calculator display.
	} else if(e.target.className === 'opr'  && temp !== '') { // Block if any operator is pressed.
		if(opr !== '') { // Block if operator is empty.
		result = calculate(opr);
		display.innerText = result; // Display Result
		}
		opr = e.target.innerText; // Store new operator
		if(result == '') { 
			result = temp;
		}
		temp = '';
	} else if(e.target.className === 'eval') {
		result = calculate(opr);
		display.innerText = result;
		temp = '';
		opr = '';
	} else{
		temp = '';
		result = '';
		opr = '';
		display.innerText = '';
	}
	function calculate(opr) {
		switch(opr) {
			case '+':  return parseFloat(result) + parseFloat(temp);
			case '-':  return parseFloat(result) - parseFloat(temp);
			case '*':  return parseFloat(result) * parseFloat(temp);
			case '/':  return parseFloat(result) / parseFloat(temp);
			default : return '0';
		}
	}
	// console.log(temp);
	// console.log(opr);
	// console.log(result);
});
