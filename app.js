const form = document.querySelector('#memeform');
const memeContainer = document.querySelector('#meme-container');
function success() {
	if (document.querySelectorAll('input').value === '') {
		document.querySelector('button').disabled = true;
	} else {
		document.querySelector('button').disabled = false;
	}
}
function isValidHttpUrl(string) {
	let url;
	try {
		url = new URL(string);
	} catch (_) {
		return false;
	}
	return url.protocol === 'http:' || url.protocol === 'https:';
}

form.addEventListener('submit', function (e) {
	e.preventDefault();

	//CREATE MEME CONTAINER:
	let memeDiv = document.createElement('div');
	memeDiv.classList.add('meme-div');

	//INSERT IMAGE:
	const imgUrl = document.querySelector('#img-url');
	let img = document.createElement('img');
	if (isValidHttpUrl(imgUrl.value)) {
		img.src = imgUrl.value;
		img.classList.add('meme-img');
		memeDiv.appendChild(img);
		imgUrl.value = '';
	} else {
		alert('Invalid URL');
	}

	// INSERT TOP TEXT:
	const topText = document.querySelector('#top-text');
	let topdiv = document.createElement('div');
	topdiv.innerText = topText.value;
	topdiv.classList.add('top-style');
	memeDiv.appendChild(topdiv);
	topText.value = '';

	// INSERT BOTTOM TEXT:
	const bottomText = document.querySelector('#bottom-text');
	let bottomdiv = document.createElement('div');
	bottomdiv.innerText = bottomText.value;
	bottomdiv.classList.add('bottom-style');
	memeDiv.appendChild(bottomdiv);
	bottomText.value = '';

	// DELETE FUNCTION:
	let deleteBtn = document.createElement('button');
	deleteBtn.innerText = 'X';
	deleteBtn.classList.add('delete-button');
	memeDiv.appendChild(deleteBtn);

	memeContainer.appendChild(memeDiv);

	deleteBtn.addEventListener('click', function (e) {
		memeDiv.remove();
	});
	document.querySelector('button').disabled = true;
});
