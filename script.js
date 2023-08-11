var images = ["./images/Cityimage.gif","./images/flower.gif", "./images/Gamergirl.gif", "./images/scifilab.gif"];
var currentImage = 0;
var background = document.getElementById("background");

function changeBackground() {
  currentImage = (currentImage + 1) % images.length;
  background.classList.add('fade-out');

  setTimeout(function() {
    background.style.backgroundImage = "url('" + images[currentImage] + "')";
    background.classList.remove('fade-out');
  }, 500);
}

setInterval(changeBackground, 5000);