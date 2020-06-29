// Project Animation function



function updateProjectsJs() {
    const panelOne = document.getElementById('panelOne')
    const panelTwo = document.getElementById('panelTwo')
    const panelThree = document.getElementById('panelThree')
    
    panelOne.addEventListener('click', openOne);
    panelTwo.addEventListener('click', openTwo);
    panelThree.addEventListener('click', openThree);

    //make a button to run the toggleOff function
    
}
            
function openOne() {
    toggleOff();
    panelOne.classList.toggle('open')
    panelTwo.classList.toggle('close')
    panelThree.classList.toggle('close')
}

function openTwo() {
    toggleOff();
    panelOne.classList.toggle('close')
    panelTwo.classList.toggle('open')
    panelThree.classList.toggle('close')
}

function openThree() {
    toggleOff();
    panelOne.classList.toggle('close')
    panelTwo.classList.toggle('close')
    panelThree.classList.toggle('open')
}

function toggleOff() {
    const panels = [panelOne, panelTwo, panelThree]
    console.log(panels)
    panels.forEach(panel => {
        panel.classList = 'panel';
   });
    
}