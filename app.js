var productsCountEl = document.getElementById("products-count");

// console.log(productsCountEl)


var addToCartButtons = document.querySelectorAll(".add-to-cart");

// console.log(addToCartButtons)


for(var i = 0;i<addToCartButtons.length;i++) {
	addToCartButtons[i].addEventListener("click",function() {
		var prevProductsCount = +productsCountEl.textContent
		productsCountEl.textContent = prevProductsCount + 1
	})
}


var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);
 
function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
function preSlide() {
    slides[currentSlide].className = 'slide';
    if (currentSlide == 0) { currentSlide = 4; } else {
    	currentSlide = (currentSlide-1)%slides.length;
    }
    slides[currentSlide].className = 'slide showing';
}

// toogle like state

var likeButtons = document.querySelectorAll(".bgimg");

for(var i=0;i<likeButtons.length;i++) {
    likeButtons[i].addEventListener("click",function() {
     if(this.classList.contains("liked")) {
        this.classList.remove("liked")
     } else {
        this.classList.add("liked")
     }

    })
}