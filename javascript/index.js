// ******** nav to about me ********
function aboutMeClick() {
    document.getElementById('pageCss').href = './styles/about-me.css'
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

    setInital()
}

// ******** nav to my projects ********

function myProjectsClick() {
    document.getElementById('pageCss').href = './styles/projects.css'
    document.getElementById('body').innerHTML = ""
    // console.log('fired')

    let panels = document.createElement('div')
    panels.className = 'panels'
    body.append(panels)

    // ******** Panel One ********
    let panelOne = document.createElement('div')
    panelOne.id = 'panelOne'
    panelOne.className = 'panel'
    panels.append(panelOne)

    let panelOneContent = document.createElement('div')
    panelOneContent.className = 'content'
    panelOne.append(panelOneContent)
    let panelOneContentTitle = document.createElement('p')
    panelOneContentTitle.className = 'title'
    panelOneContentTitle.innerHTML = 'ProJo'
    panelOneContent.append(panelOneContentTitle)
    let panelOneContentDescription = document.createElement('p')
    panelOneContentDescription.className = 'description'
    panelOneContentDescription.innerHTML = 'An application created to allow anyone to generate, customize and print invoices. So that even contractors, self employed and temps can get paid professionally.'
    panelOneContent.append(panelOneContentDescription)    

    // ******** Panel Two ********
    let panelTwo = document.createElement('div')
    panelTwo.id = 'panelTwo'
    panelTwo.className = 'panel'
    panels.append(panelTwo)

    let panelTwoContent = document.createElement('div')
    panelTwoContent.className = 'content'
    panelTwo.append(panelTwoContent)
    let panelTwoContentTitle = document.createElement('p')
    panelTwoContentTitle.className = 'title'
    panelTwoContentTitle.innerHTML = 'Pets Amok'
    panelTwoContent.append(panelTwoContentTitle)
    let panelTwoContentDescription = document.createElement('p')
    panelTwoContentDescription.className = 'description'
    panelTwoContentDescription.innerHTML = 'A virtual simulation of an animal shelter, complete with cyclical game loops, variable manipulation and ROBOTIC PETS!!!'
    panelTwoContent.append(panelTwoContentDescription)

    // ******** Panel Three ********
    let panelThree = document.createElement('div')
    panelThree.id = 'panelThree'
    panelThree.className = 'panel'
    panels.append(panelThree)

    let panelThreeContent = document.createElement('div')
    panelThreeContent.className = 'content'
    panelThree.append(panelThreeContent)
    let panelThreeContentTitle = document.createElement('p')
    panelThreeContentTitle.className = 'title'
    panelThreeContentTitle.innerHTML = 'Route Finder'
    panelThreeContent.append(panelThreeContentTitle)
    let panelThreeContentDescription = document.createElement('p')
    panelThreeContentDescription.className = 'description'
    panelThreeContentDescription.innerHTML = 'A full stack piece of software used to categorize and index climbing routes by location, difficulty, user rating and name. Uses Java to establish back-end repositories with sorting and searching methods. A Spring framework with a RESTful API, to a front-end written in html, css and javascript. Invisioning a solution similar to that of Mountain Project'
    panelThreeContent.append(panelThreeContentDescription)

    // ******** Panel Four ********
    let panelFour = document.createElement('div')
    panelFour.id = 'panelFour'
    panels.append(panelFour)

    // ******** Function to update JS ********
    updateProjectsJs()
}

// ******** nav to my skills *********

function mySkillsClick() {
    document.getElementById('pageCss').href = './styles/skills.css'
    document.getElementById('body').innerHTML = ""

    let message = document.createElement('p')
    message.innerHTML = 'Currently Undergoing Skill Construction'

    body.append(message)
}

