// ******** nav functions ********
const myProjectBody = '<div> Hello </div>'

function displayProjects() {
    document.getElementById('pageCss').href = './styles/projects.css'
    document.getElementById('pageJs').src = './javascript/projects.css'
    document.getElementById('body').innerHTML = myProjectBody;
}

document.getElementById('myProjects').addEventListener('click', displayProjects)


// ******** nav to about me ********
const aboutMeBody = `
<header>The Lives of Caleb Stripes</header>
    
<!-- image dom -->
<div id="photoBox">
    <img id="photo" class="portrait fadeBack" src="./resources/Head Shot.JPG" alt="">
    <label id="photoLabel" for=""></label>
    <img id="photoBackDrop" src="./resources/Code.JPG" alt="">
</div>

<div id="buttonBox">
    <button id="change" class="button">{click}</button>
    <img src="./resources/Star.JPG" class="star" alt="">
</div>

<div id="caption">
    <p id="infoText"></p>
</div>
`

function displayAboutMe() {
    document.getElementById('pageCss').href = './styles/about-me.css';
    document.getElementById('pageJs').src = './javascript/about-me.js';
    document.getElementById('body').innerHTML = aboutMeBody;
}

document.getElementById('aboutMe').addEventListener('click', displayAboutMe);