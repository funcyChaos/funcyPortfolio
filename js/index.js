document.getElementById('logo_box').addEventListener('contextmenu', event=>event.preventDefault());

// const	nav_button			= document.getElementById('nav_button');
// const	nav_menu				= document.getElementById('nav_menu');
// const title_box				= document.getElementById('title_box');
// let		nav_display			= false;
const menu_btn	= document.getElementById('menu_btn');
// const title_box	= document.getElementById('title_box');
const menu_box	= document.getElementById('menu_box');
const skils_box	= document.getElementById('skills_box');


// const left_arrow 			= document.getElementById('left_arrow');
// const right_arrow 		= document.getElementById('right_arrow');
// const bubbles 				= document.getElementById('bubbles').children;
// let		currentSlideNum = 1;

menu_btn.addEventListener('click', ()=>{
	if(!menu_box.disp){
		menu_box.style.display	= 'flex';
		menu_box.disp						= true;
	}else{
		menu_box.style.display	= 'none';
		menu_box.disp						= false;
	}
});

document.getElementById('btn_sklz').addEventListener('click',()=>{
	document.getElementById('home_box').style.display = 'none';
	skils_box.style.display	= 'flex';
});

// nav_button.addEventListener('click', ()=>{
// 	if(!nav_display){
// 		nav_menu.style.display	= 'flex';
// 		// title_box.style.display	= 'none'
// 		nav_display							= true;
// 	}else{
// 		nav_menu.style.display	= 'none';
// 		// title_box.style.display	= 'flex'
// 		nav_display							= false;
// 	}
// });

// left_arrow.addEventListener('click', ()=>{changeSlide('--')});
// right_arrow.addEventListener('click', ()=>{changeSlide('++')});
// for(let i = 0; i < bubbles.length; i++){
// 	bubbles[i].addEventListener('click', ()=>{changeSlide(i)})
// }

// function changeSlide(slideNum){
// 	let		newSlide;
// 	let		newBubble;
// 	const transition 		= 100;
// 	const currentSlide	= document.getElementById(`slide_${currentSlideNum}`);
// 	const currentBubble	= document.getElementById(`bubble_${currentSlideNum}`);
// 	if((slideNum + 1) === currentSlideNum)return;
	
// 	switch (slideNum){
// 		case '++':
// 			if((currentSlideNum + 1) > 4)return;
// 			newSlide				= document.getElementById(`slide_${++currentSlideNum}`);
// 			newBubble				= document.getElementById(`bubble_${currentSlideNum}`);
// 			break;
// 		case '--':
// 			if((currentSlideNum - 1) < 1)return;
// 			newSlide				= document.getElementById(`slide_${--currentSlideNum}`);
// 			newBubble				= document.getElementById(`bubble_${currentSlideNum}`);
// 			break;
// 		default:
// 			newSlide				= document.getElementById(`slide_${++slideNum}`);
// 			newBubble				= document.getElementById(`bubble_${slideNum}`);
// 			currentSlideNum	= slideNum
// 			break;
// 	}
	
// 	currentSlide.style.opacity = 0;
		
// 	setTimeout(() => {
// 		currentSlide.style.display = 'none';
// 		newSlide.style.display = 'block';
		
// 		currentBubble.style.color = '#777';
// 		newBubble.style.color = 'white';

// 		setTimeout(() => {
// 			newSlide.style.opacity = 1;
// 		}, transition);
// 	}, transition);

// }