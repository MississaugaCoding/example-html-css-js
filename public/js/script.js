// get button element 
var btn = document.getElementById('btnColour');

// set up an event listener on button element 
// this means whenever user clicks the button, 
// call the function applyColour() 
btn.addEventListener('click', applyColour);

// function to change the colour of our paragraph text
function applyColour() {
    // get the comb-box element
    var sel = document.getElementById('selColour');
    var col = sel.value; // get the selected value
    
    // get the paragraph element
    var par = document.getElementById('myText');
    par.style.color = col;   // style paragraph text colour
}


/*
	Calculator script
*/

/*	
	- This is our real time function - the only function to be called
	- Variables has to be created first!
*/
var executeCalculator =  function(){
	//declare our values
	var startValue = document.getElementById('startingValue').value; //default is 0
	var rateValue = document.getElementById('rateValue').value; //default is 0 

	//convert to number first
	startValue = Number(startValue);
	rateValue = Number(rateValue);

	//calculate method will ONLY deal with our arithmetic operations
	var result = calculate(startValue, rateValue);
	//show the result
	document.getElementById('result').innerHTML = result;
}

//referenced in executeCalculator()
function calculate(value, rate){
	var ratePercentage = rate/100; 
	var result = value + (value * ratePercentage);

	//2 decimal places, toFixed() only works on Number type.
	result = result.toFixed(2); //override variable

	return result;
}

//Event Listener: Change
document.getElementById('startingValue')
		.addEventListener('change', executeCalculator);

document.getElementById('rateValue')
		.addEventListener('change', executeCalculator);