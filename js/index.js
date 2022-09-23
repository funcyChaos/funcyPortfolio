document.getElementById('logo_left').addEventListener('contextmenu', event=>event.preventDefault());

const left_arrow = document.getElementById('left_arrow');
const right_arrow = document.getElementById('right_arrow');
const bubbles 		= document.getElementById('bubbles').children;
let		currentSlideNum = 1;

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
	
	currentSlide.style.opacity = 0;

	switch (slideNum){
		case '++':
			newSlide	= document.getElementById(`slide_${++currentSlideNum}`);
			newBubble	= document.getElementById(`bubble_${currentSlideNum}`);
			break;
		case '--':
			newSlide	= document.getElementById(`slide_${--currentSlideNum}`);
			newBubble	= document.getElementById(`bubble_${currentSlideNum}`);
			break;
		default:
			newSlide				= document.getElementById(`slide_${++slideNum}`);
			newBubble				= document.getElementById(`bubble_${slideNum}`);
			currentSlideNum	= slideNum
			break;
	}
	
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
