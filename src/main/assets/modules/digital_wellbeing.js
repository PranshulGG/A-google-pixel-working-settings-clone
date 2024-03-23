
// wellbeing dash board

const WellbeingDashBoardActivity = document.querySelector(`[data-modal-33]`);

function openDashBoard(){
    document.querySelector(`[data-modal-16]`).style.transform = 'translateX(-30%)';
    document.querySelector(`[data-modal-16]`).style.opacity = '0';
    WellbeingDashBoardActivity.style.opacity = '1';
    WellbeingDashBoardActivity.style.transform = 'none';
    checkTHEME();
    WellbeingDashBoardActivity.style.display = 'block';
    document.querySelector(`[activity-content-33]`).scrollTop = 0;


    setTimeout(() =>{
        document.querySelector(`[activity-content-16]`).scrollTop = 0;
    }, 300);


    setTimeout(() =>{
        window.history.pushState({ modal: `modal-33` }, '', `#activity-33`);
        window.history.replaceState({ modal: `modal-33` }, '', window.location.pathname)

    }, 400);

    setTimeout(() =>{
      window.history.pushState({ modal: `modal-33` }, '', `#activity-33`);
  }, 450);
}


function closeWellbeingDashBoard(){

    WellbeingDashBoardActivity.style.transform = 'translateX(30%)';
    WellbeingDashBoardActivity.style.opacity = '0';
    document.querySelector(`[data-modal-16]`).style.transform = 'none';
    document.querySelector(`[data-modal-16]`).style.opacity = '1';
    checkTHEME();
    setTimeout(() => {
        WellbeingDashBoardActivity.style.display = 'none';
        window.history.replaceState(null, '', window.location.pathname);
    }, 400);
}


// wellbeing focus mode

const WellbeingFocusModeActivity = document.querySelector(`[data-modal-34]`);

function openWellbeingFocusMode(){
    document.querySelector(`[data-modal-16]`).style.transform = 'translateX(-30%)';
    document.querySelector(`[data-modal-16]`).style.opacity = '0';
    WellbeingFocusModeActivity.style.opacity = '1';
    WellbeingFocusModeActivity.style.transform = 'none';
    checkTHEME();
    WellbeingFocusModeActivity.style.display = 'block';
    document.querySelector(`[activity-content-34]`).scrollTop = 0;


    setTimeout(() =>{
        document.querySelector(`[activity-content-16]`).scrollTop = 0;
    }, 300);


    setTimeout(() =>{
        window.history.pushState({ modal: `modal-34` }, '', `#activity-34`);
        window.history.replaceState({ modal: `modal-34` }, '', window.location.pathname)

    }, 400);

    setTimeout(() =>{
      window.history.pushState({ modal: `modal-34` }, '', `#activity-34`);
  }, 450);
}


function closeWellbeingFocusMode(){

    WellbeingFocusModeActivity.style.transform = 'translateX(30%)';
    WellbeingFocusModeActivity.style.opacity = '0';
    document.querySelector(`[data-modal-16]`).style.transform = 'none';
    document.querySelector(`[data-modal-16]`).style.opacity = '1';
    checkTHEME();
    setTimeout(() => {
        WellbeingFocusModeActivity.style.display = 'none';
        window.history.replaceState(null, '', window.location.pathname);
    }, 400);
}

