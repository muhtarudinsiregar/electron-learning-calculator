var keys = document.querySelectorAll('#calculator p');

for (var i = 0; i < keys.length; i++) {
	keys[i].onclick = function (e) {
		var key = document.querySelector('.screen');
		var btnVal = this.innerHTML;
		key.innerHTML += btnVal;

		if (btnVal === 'C') {
			key.innerHTML = '';
		}

		e.preventDefault();
	}
}