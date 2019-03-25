// Iterating through 7 buttons having class 'drum'
for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {
	document.querySelectorAll('.drum')[i].addEventListener('click', function(){

		// Taking the letters 'onClick' from 'index.html' i.e 'w, a, s, d, j, k, l'
		var buttonInnerHTML = this.innerHTML;

		makeSound(buttonInnerHTML);	

		buttonAnimation(buttonInnerHTML);	
	});
}

// Listening to keypresses from keyboard. 
// Note - 'keypress' is deprecated
document.addEventListener('keydown', function(e){

	// Check the available properties of the 'keydown' event
	// console.log(e);

	// tapping the 'key' property from the 'keydown' event
	makeSound(e.key);

	buttonAnimation(e.key);
});

function makeSound(key){

	// Audio() is a built-in method 
	switch(key){
		case 'w' : 	var audio = new Audio('sounds/crash.mp3');
					audio.play();
					break;
		case 'a' :  var audio = new Audio('sounds/kick-bass.mp3');
					audio.play();
					break;
		case 's' :  var audio = new Audio('sounds/snare.mp3');
					audio.play();
					break;
		case 'd' :  var audio = new Audio('sounds/tom-1.mp3');
					audio.play();
					break;
		case 'j' :  var audio = new Audio('sounds/tom-2.mp3');
					audio.play();
					break;
		case 'k' :  var audio = new Audio('sounds/tom-3.mp3');
					audio.play();
					break;
		case 'l' :  var audio = new Audio('sounds/tom-4.mp3');
					audio.play();
					break;
		default  :  console.log('Key not present.');
	}
}

function buttonAnimation(currentKey){
	var activeButton = document.querySelector('.' + currentKey);

	// adding 'pressed' class from 'styles.css'
	activeButton.classList.add('pressed');

	// keeping 'pressed' class from 1s
	setTimeout(() => {
	  activeButton.classList.remove('pressed');
	}, 100)
}