// ******** nav to about me ********
function aboutMeClick() {
    document.getElementById('body').innerHTML = ""
    
    let header = document.createElement('header')
    header.innerHTML = "Caleb Stripes"
    document.getElementById('body').append(header)
    
    let photoBox = document.createElement('div')
    photoBox.id = 'photoBox'
    document.getElementById('body').append(photoBox)
    
    let photo = document.createElement('img')
    photo.id = 'photo'
    photo.classList.add('portrait', 'fadeBack')
    photo.src = './resources/Head Shot.JPG'
    document.getElementById('photoBox').append(photo)
    const mousedImg = document.querySelector('.portrait')
    mousedImg.addEventListener('mouseover', toggleClass);
    
    let photoLabel = document.createElement('label')
    photoLabel.id = 'photoLabel'
    photoLabel.innerHTML = 'Full Stack Software Developer'
    document.getElementById('photoBox').append(photoLabel)
    
    let photoBackDrop = document.createElement('img')
    photoBackDrop.id = 'photoBackDrop'
    photoBackDrop.src = './resources/Code.JPG'
    document.getElementById('photoBox').append(photoBackDrop)

    let buttonBox = document.createElement('div')
    buttonBox.id = 'buttonBox'
    document.getElementById('body').append(buttonBox)

    let change = document.createElement('button')
    change.id = 'change'
    change.classList.add('button')
    change.innerHTML = '{click}'
    document.getElementById('buttonBox').append(change)
    const clickBtn = document.querySelector('.button')
    clickBtn.addEventListener('mouseover', mouseButton)
    clickBtn.addEventListener('mouseout', mouseButton)
    document.querySelector('#change').addEventListener('click', nextImage);

    let myStar = document.createElement('img')
    myStar.classList.add('star')
    myStar.src = './resources/Star.JPG'
    document.getElementById('buttonBox').append(myStar)

    let caption = document.createElement('div')
    caption.id = 'caption'
    document.getElementById('body').append(caption)

    let infoText = document.createElement('p')
    infoText.id = 'infoText'
    infoText.innerHTML = 'Software Development has always been something I have been interested in. This journey has been unlike any other journey I have had, I am able to bring the same mentality to challenges faced but the solutions and problem solving tactics are completely new. Development is so rewarding, I find it a great outlet for my creativity and logical practice.'
    document.getElementById('caption').append(infoText)
}

// ******** nav to my projects ********

function myProjectsClick() {
    document.getElementById('body').innerHTML = ""
}