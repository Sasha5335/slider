const input = document.querySelector('#display')
const buttons = document.querySelectorAll('.button');
let str = '';

for (var i = 0; i < buttons.length; i++) {
	addEvent(buttons[i]);
}

function addEvent(button) {
	button.addEventListener('click', event);


	function event() {
		let type = button.getAttribute('data-type');
		if (type === '=') {
			str = eval(str);
			display.value = str;
			return;
		} else if (type === 'C') {
			str = '';
		} else {
			str += type;
			console.log(str)
		}
		display.value = str;
	}
}