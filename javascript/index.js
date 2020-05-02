//  ******** About Me Gallery ********* 
const image0 = "./resources/Head Shot.JPG"
const img0Lab = "Full Stack Software Developer/on-the-journey"
const img0BD = "./resources/Code.JPG"
const image1 = "./resources/Navigator.JPG"
const img1Lab = "Ship's Navigator"
const img1BD = "./resources/Deck of the Lady.JPG"
const image2 = "./resources/Man and Goats.JPG"
const img2Lab = "Mountaineer"
const img2BD = "./resources/Lookout Tower.JPG"

//  ******** Paragraph Populator ********
const info0 = "Software Development has always been something I have been interested in. This journey has been unlike any other journey I have had, I am able to bring the same mentality to challenges faced but the solutions and problem solving tactics are completely new. Development is so rewarding, I find it a great outlet for my creativity and logical practice."
const info1 = "Between 2012 and 2016, I spent nearly all my time crewing aboard Tall Ships. These maritime adventures saw me from coast to coast and from B.C. Canada to San Diego and back. These years came with a plethora of new skills and exciting times, but most notably it defined my abilities to work on a team. There are few environments I have found that forge such bonds. And yeah, I climbed the rigging every day."
const info2 = "Growing up in Western Washington, the mountains and the sound became daily reminders of the natural beauty in the world. Albeit I didn't truly grow to appreciate them until I left. However, it was not before establishing an attitude of 'Get up and Go!' when it came to adventure." 

function setInital() {
        document.getElementById('photo').src = image0;
        document.getElementById('photoLabel').innerHTML = img0Lab;
        document.getElementById('photoBackDrop').src = img0BD;
        document.getElementById('infoText').innerHTML = info0;
}

setInital()

//  ******** Function ********
var currentImage = image0;

document.querySelector('#change').addEventListener('click', nextImage);

function nextImage() {
    if (currentImage == image0) {
        currentImage = image1;
        document.getElementById('photo').src = image1;
        document.getElementById('photoLabel').innerHTML = img1Lab;
        document.getElementById('photoBackDrop').src = img1BD;
        document.getElementById('infoText').innerHTML = info1;
    }
    else if (currentImage == image1) {
        currentImage = image2; 
        document.getElementById('photo').src = image2;
        document.getElementById('photoLabel').innerHTML = img2Lab;
        document.getElementById('photoBackDrop').src = img2BD;
        document.getElementById('infoText').innerHTML = info2;
    }
    else if (currentImage == image2) {
        currentImage = image0;
        document.getElementById('photo').src = image0;
        document.getElementById('photoLabel').innerHTML = img0Lab;
        document.getElementById('photoBackDrop').src = img0BD;
        document.getElementById('infoText').innerHTML = info0;
    }
}

//  ******** Hover Animation Listeners/Functions ********

const mousedImg = document.querySelector('.portrait')

function toggleClass() {
    this.classList.toggle('fadeAway');
    this.classList.toggle('fadeBack');
}

mousedImg.addEventListener('mouseover', toggleClass);



