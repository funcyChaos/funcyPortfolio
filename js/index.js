document.getElementById('logo_box').addEventListener('contextmenu', event=>event.preventDefault());

const	nav_button			= document.getElementById('nav_button');
const	nav_menu				= document.getElementById('nav_menu');
let		nav_display			= false;

const left_arrow 			= document.getElementById('left_arrow');
const right_arrow 		= document.getElementById('right_arrow');
const bubbles 				= document.getElementById('bubbles').children;
let		currentSlideNum = 1;

nav_button.addEventListener('click', ()=>{
	if(!nav_display){
		nav_menu.style.display = 'flex';
		nav_display						 = true;
	}else{
		nav_menu.style.display = 'none';
		nav_display						 = false;
	}
});

left_arrow.addEventListener('click', ()=>{changeSlide('--')});
right_arrow.addEventListener('click', ()=>{changeSlide('++')});
for(let i = 0; i < bubbles.length; i++){
	bubbles[i].addEventListener('click', ()=>{changeSlide(i)})
}

function changeSlide(slideNum){
	let		newSlide;
	let		newBubble;
	const transition 		= 100;
	const currentSlide	= document.getElementById(`slide_${currentSlideNum}`);
	const currentBubble	= document.getElementById(`bubble_${currentSlideNum}`);
	if((slideNum + 1) === currentSlideNum)return;
	
	switch (slideNum){
		case '++':
			if((currentSlideNum + 1) > 4)return;
			newSlide				= document.getElementById(`slide_${++currentSlideNum}`);
			newBubble				= document.getElementById(`bubble_${currentSlideNum}`);
			break;
		case '--':
			if((currentSlideNum - 1) < 1)return;
			newSlide				= document.getElementById(`slide_${--currentSlideNum}`);
			newBubble				= document.getElementById(`bubble_${currentSlideNum}`);
			break;
		default:
			newSlide				= document.getElementById(`slide_${++slideNum}`);
			newBubble				= document.getElementById(`bubble_${slideNum}`);
			currentSlideNum	= slideNum
			break;
	}
	
	currentSlide.style.opacity = 0;
		
	setTimeout(() => {
		currentSlide.style.display = 'none';
		newSlide.style.display = 'block';
		
		currentBubble.style.color = '#777';
		newBubble.style.color = 'white';

		setTimeout(() => {
			newSlide.style.opacity = 1;
		}, transition);
	}, transition);

}