
const hidesidebar = document.querySelector('.sidebar_button');
/* hidesidebar.innerHTML = "&#xe5e1;"; */
const sidebar = document.querySelector('.sidebar');
let hidden = false;
const endloop = false;


const sidebarmoveoffscreen = [
  { transform: 'translateX(0px)', easing: 'ease-in-out'},
  { transform: 'translateX(-300px)'}
];
const sidebarmoveonscreen = [
  { transform: 'translateX(-300px)', easing: 'ease-in-out'},
  { transform: 'translateX(0px)' }
];


const rotatecw = [
  { transform: 'rotate(0deg)', easing: 'ease-in-out'},
  { transform: 'rotate(180deg)' }
];
const rotateccw = [
  { transform: 'rotate(180deg)', easing: 'ease-in-out'},
  { transform: 'rotate(0deg)' }
];

const sidebarmoveTiming = {
  duration: 250, /*500 ms*/
  iterations: 1,
  fill: 'forwards'
}

hidesidebar.addEventListener('click', (event) => {
    if (!hidden) {
        hidesidebar.animate(rotateccw, sidebarmoveTiming);
        sidebar.animate(sidebarmoveoffscreen, sidebarmoveTiming);
		hidden = true;
    } else {
        	
        sidebar.animate(sidebarmoveonscreen, sidebarmoveTiming);
		hidden = false;
    }
})


/* this is for the dark theme mode button */
/* let root = document.querySelectorAll(':root'); */
/* ################################################################### */
/* uncomment this if i can figure out how to specify the css file fuck */
/* ################################################################### */

/* let themebutton = document.querySelector('#themebutton');
let darktheme = true; */
/* themebutton.addEventListener('click', (event) => {
	if (darktheme) {
		root.style.setProperty('--deer-dark', '#F3F3F3');
		root.style.setProperty('--deer-bright', '#14151B');
		root.style.setProperty('--deer-sidebar', '##ebebeb');
		themebutton.innerHTML = "&#xe51c;";
		darktheme = false;
	} else {
		root.style.setProperty('--deer-dark', '#212232');
		root.style.setProperty('--deer-bright', '#FAF9E5');
		root.style.setProperty('--deer-sidebar', '#363852');
		themebutton.innerHTML = "&#xe3aa;";
		darktheme = true;
	}
}) */
