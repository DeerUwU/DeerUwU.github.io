const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

let meowmeow = document.querySelector('title');
let testvar2 = document.querySelector('h4');


/*##########################################################*/
const inches_textinput = document.getElementById("input_inches");

inches_textinput.addEventListener("input", () => {
	const inches_input_content = inches_textinput.value;
	const inches_number = parseFloat(inches_input_content);
	const cm_var = document.getElementById("output_cm");
	cm_var.textContent = (inches_number * 2.54).toFixed(2);
})


/*##########################################################*/
const counter = async () => {
	for (let step = 0; step < 250+1; step++) {
	// Runs 25 times, with values of step 0 through 4.
		testvar2.textContent = step;
		await sleep(1000);
	}
}
counter()
/*##########################################################*/



/*############## this loops the page title ##################*/
let loop_end = false;
let page_title = "";
let sleep_delay = 400

const meow_title = async () => {
	while (loop_end !== true) {
		meowmeow.textContent = "meow-meow-meow-";
		await sleep(sleep_delay);
		meowmeow.textContent = "eow-meow-meow-m";
		await sleep(sleep_delay);
		meowmeow.textContent = "ow-meow-meow-me";
		await sleep(sleep_delay);
		meowmeow.textContent = "w-meow-meow-meo";
		await sleep(sleep_delay);
		meowmeow.textContent = "-meow-meow-meow";
		await sleep(sleep_delay);
	}
}
meow_title()
/*##########################################################*/