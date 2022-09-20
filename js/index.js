document.getElementById('logo_left').addEventListener('contextmenu', event=>event.preventDefault());

const slide1 = document.getElementById('slide_1');
const slide2 = document.getElementById('slide_2');
const timer = 125;

slide1.addEventListener('transitionstart', ()=>{

	setTimeout(() => {
		
		slide1.style.display = 'none';
		slide2.style.display = 'grid';

		setTimeout(() => {
			
			slide2.style.opacity = 1;
		}, timer);
	}, timer);
	
});



setTimeout(() => {
	
	slide1.style.opacity = 0;
}, 2000);