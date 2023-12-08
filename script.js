var prevBtn = document.querySelector("[data-prev]");
var nextBtn = document.querySelector("[data-next]");
var carouselBtn = document.querySelectorAll(".carousel__btn");
const carouselContainer = document.querySelector(".carousel__img-container");
const carouselList 		= document.querySelector(".carousel__img-list");
const carouselImg 		= document.querySelectorAll(".carousel__img-container .carousel__img");
const carouselDots		= document.querySelectorAll(".carousel__nav-list .carousel__dot");

var moveBy = 0;
var currentPosition = 0;
checkPosition(currentPosition, carouselImg);
dotsPosition(currentPosition, carouselDots);

// ============== Navigate with button

function prevSwipe() {
	moveBy += 41.001;
	currentPosition -= 1;
	carouselList.style.transform = `translateX(${moveBy}rem)`;

	checkPosition(currentPosition, carouselImg);
	dotsPosition(currentPosition, carouselDots);
}


function nextSwipe() {
	moveBy -= 41.001;
	currentPosition += 1;
	carouselList.style.transform = `translateX(${moveBy}rem)`;

	checkPosition(currentPosition, carouselImg);
	dotsPosition(currentPosition, carouselDots);
}


// ============== Navigate with dots

carouselDots.forEach(dots => {
	dots.addEventListener('click', () => {
		if ([...carouselDots].indexOf(dots) != currentPosition) {
			removeDotsClass(carouselDots);
			dots.classList.add("current");

			var targetDots 	= currentPosition = [...carouselDots].indexOf(dots);
			    moveBy		= (41.001 * (targetDots)) * -1;
			carouselList.style.transform = `translateX(${moveBy}rem)`;
			checkPosition(currentPosition, carouselImg);
		}
	});
})


// ============== Support function

function removeDotsClass(carouselDots) {
	carouselDots.forEach(item => {
		item.classList.remove("current");
	});
}

function dotsPosition(curPos, carouselDots) {
	removeDotsClass(carouselDots);
	carouselDots[curPos].classList.add("current");
	return
}

function checkPosition(curPos, carouselImg) {
	carouselBtn.forEach(button => { button.classList.remove('disabled') });
	prevBtn.disabled = nextBtn.disabled = false;

	let isFirst = true;

	if (curPos == 0) isFirst = true;
	else if (curPos == carouselImg.length-1) isFirst = false;
	else {
		carouselBtn.forEach(button => { button.classList.remove('disabled') });
		prevBtn.disabled = nextBtn.disabled = false;
		return
	}

	if (isFirst) {
		prevBtn.disabled = true;
		prevBtn.classList.add('disabled');
		return
	} else if (!isFirst) {
		nextBtn.disabled = true;
		nextBtn.classList.add('disabled');
		return
	}
}