const rotateccw = [
  { transform: 'rotate(0deg)', easing: 'ease-in-out'},
  { transform: 'rotate(-180deg)' }
];
const rotatecw = [
  { transform: 'rotate(-180deg)', easing: 'ease-in-out'},
  { transform: 'rotate(0deg)' }
];

const rotateTiming = {
  duration: 500, /*500 ms*/
  iterations: 1,
  fill: 'forwards'
}

const sidebar = document.querySelector(".sidebar");
const sidebarButton = document.querySelector('.sidebar_button');

// sidebar toggle button
document.querySelector(".sidebar_button").addEventListener("click", () => {
	if (sidebar.classList.contains("hidden")) {
		
		sidebarButton.animate(rotatecw, rotateTiming);
		sidebar.classList.remove("hidden");
	} else {
		sidebarButton.animate(rotateccw, rotateTiming);
		sidebar.classList.add("hidden");
	}
});