function typeEffect(element, speed) {
	var text = element.innerHTML;
	element.innerHTML = "";
	
	var i = 0;
	var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}


// application
// var speed = 55;
// var title = document.querySelector('.title-animate');
// var subtitle = document.querySelector('.subtitle-animate');
// var p = document.querySelector('.animate');
// var btn = document.querySelector('.btn-contact');
// var delay = title.innerHTML.length * speed + speed;

// // type affect to header
// typeEffect(title, speed);


// // type affect to body
// setTimeout(function(){
//   if (subtitle) {
//     subtitle.style.opacity = "1";
//     typeEffect(subtitle, speed);
//   }
//   p.style.opacity = "1";
//   p.style.left = "0";
//   btn.style.opacity = "1";
//   btn.style.left = "0";
// }, delay);
