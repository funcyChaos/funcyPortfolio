const logo					=	document.getElementById('logo_box');
const menu_btn			= document.getElementById('menu_btn');
const menu_items		= document.getElementById('menu_box').children;

const home_box			= document.getElementById('home_box')
const skills_box		= document.getElementById('skills_box');
const port_box			= document.getElementById('port_box');
const about_box			= document.getElementById('about_box');
let		current_page	= home_box;

router(window.location.hash);
logo.addEventListener('contextmenu', event=>event.preventDefault());
logo.addEventListener('click',()=>window.location.hash = '');

menu_btn.addEventListener('click', ()=>{
	if(menu_box.dataset.disp == 'false'){
		menu_box.style.display	= 'flex';
		menu_box.dataset.disp		= true;
	}else{
		menu_box.style.display	= 'none';
		menu_box.dataset.disp		= false;
	}
});

for(const item of menu_items){
	item.addEventListener('click', ()=>{
		window.location.hash	= item.dataset.hash;
	});
}

window.addEventListener('hashchange',()=>{
	console.log(window.location.hash);
	router(window.location.hash);
});

function router(hash){
	let new_box;
	switch(hash){
		case '#skills':
			current_page.style.display	= 'none';
			new_box	= skills_box;
			break;
		case '#portfolio':
			current_page.style.display	= 'none';
			new_box	= port_box;
			break;
		case '#about-me':
			current_page.style.display	= 'none';
			new_box	= about_box;
			break;
		default:
			current_page.style.display	= 'none';
			new_box	= home_box;
			break;
	}
	new_box.style.display	= 'flex'
	current_page					= new_box
}