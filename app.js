initSlider(['text 1', 'text 2', 'text 3'], '.slider');

function initSlider(arr, selector) {
	let parent = document.querySelector(selector);

	let elem = parent.querySelector('.elem');
	let prev = parent.querySelector('.prev');
	let next = parent.querySelector('.next');

	let i = 0;
	elem.innerHTML = arr[i];

	next.addEventListener('click', function () {
		i++
		if (i == arr.length) {
			i = 0;
		}
		elem.innerHTML = arr[i];
	})
	prev.addEventListener('click', function () {
		i--
		if (i == -1) {
			i = arr.length - 1;
		}
		elem.innerHTML = arr[i];
	})
}