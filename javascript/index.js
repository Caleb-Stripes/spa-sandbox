const image1 = "./resources/Navigator.JPG";
const img1Lab = "Ship's Navigator"
const image2 = "./resources/Man and Goats.JPG";
const img2Lab = "Mountaineer"


var currentImage = image1;

document.querySelector('#change').addEventListener('click', next);

var currentIndex = 1;
function next() {
    if (currentImage == image1) {
        currentImage = image2; 
        document.getElementById('photo').src = image2;
        document.getElementById('photoLabel').innerHTML = img2Lab;
    } else {
        currentImage = image1;
        document.getElementById('photo').src = image1;
        document.getElementById('photoLabel').innerHTML = img1Lab;
}
}


