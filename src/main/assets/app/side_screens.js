// languages

const languagesActivity = document.querySelector(`[data-modal-18]`);

function openLanguages(){
    document.querySelector(`[data-modal-17]`).style.transform = 'translateX(-30%)';
    document.querySelector(`[data-modal-17]`).style.opacity = '0';
    languagesActivity.style.opacity = '1';
    languagesActivity.style.transform = 'none';
    checkTHEME();
    languagesActivity.style.display = 'block';
    document.querySelector(`[activity-content-18]`).scrollTop = 0;


    setTimeout(() =>{
        document.querySelector(`[activity-content-17]`).scrollTop = 0;
    }, 300);


    setTimeout(() =>{
        window.history.pushState({ modal: `modal-18` }, '', `#activity-18`);
        window.history.replaceState({ modal: `modal-18` }, '', window.location.pathname)

    }, 400);

    setTimeout(() =>{
      window.history.pushState({ modal: `modal-18` }, '', `#activity-18`);
  }, 450);
}


function closeLanguages(){

    languagesActivity.style.transform = 'translateX(30%)';
    languagesActivity.style.opacity = '0';
    document.querySelector(`[data-modal-17]`).style.transform = 'none';
    document.querySelector(`[data-modal-17]`).style.opacity = '1';
    checkTHEME();
    setTimeout(() => {
        languagesActivity.style.display = 'none';
        window.history.replaceState(null, '', window.location.pathname);
    }, 400);
}


// keyboard screen


const keyboardActivity = document.querySelector(`[data-modal-19]`);

function openKeyboardSettings(){
    document.querySelector(`[data-modal-17]`).style.transform = 'translateX(-30%)';
    document.querySelector(`[data-modal-17]`).style.opacity = '0';
    keyboardActivity.style.opacity = '1';
    keyboardActivity.style.transform = 'none';
    checkTHEME();
    keyboardActivity.style.display = 'block';
    document.querySelector(`[activity-content-18]`).scrollTop = 0;


    setTimeout(() =>{
        document.querySelector(`[activity-content-17]`).scrollTop = 0;
    }, 300);


    setTimeout(() =>{
        window.history.pushState({ modal: `modal-19` }, '', `#activity-19`);
        window.history.replaceState({ modal: `modal-19` }, '', window.location.pathname)

    }, 400);

    setTimeout(() =>{
      window.history.pushState({ modal: `modal-19` }, '', `#activity-19`);
  }, 450);
}


function closeKeyboardSettings(){

    keyboardActivity.style.transform = 'translateX(30%)';
    keyboardActivity.style.opacity = '0';
    document.querySelector(`[data-modal-17]`).style.transform = 'none';
    document.querySelector(`[data-modal-17]`).style.opacity = '1';
    checkTHEME();
    setTimeout(() => {
        keyboardActivity.style.display = 'none';
        window.history.replaceState(null, '', window.location.pathname);
    }, 400);
}


// live-translate

const liveTranslateActivity = document.querySelector(`[data-modal-20]`);

function openLiveTranslate(){
    document.querySelector(`[data-modal-17]`).style.transform = 'translateX(-30%)';
    document.querySelector(`[data-modal-17]`).style.opacity = '0';
    liveTranslateActivity.style.opacity = '1';
    liveTranslateActivity.style.transform = 'none';
    checkTHEME();
    liveTranslateActivity.style.display = 'block';
    document.querySelector(`[activity-content-20]`).scrollTop = 0;


    setTimeout(() =>{
        document.querySelector(`[activity-content-17]`).scrollTop = 0;
    }, 300);


    setTimeout(() =>{
        window.history.pushState({ modal: `modal-20` }, '', `#activity-20`);
        window.history.replaceState({ modal: `modal-20` }, '', window.location.pathname)

    }, 400);

    setTimeout(() =>{
      window.history.pushState({ modal: `modal-20` }, '', `#activity-20`);
  }, 450);
}


function closeLiveTranslate(){

    liveTranslateActivity.style.transform = 'translateX(30%)';
    liveTranslateActivity.style.opacity = '0';
    document.querySelector(`[data-modal-17]`).style.transform = 'none';
    document.querySelector(`[data-modal-17]`).style.opacity = '1';
    checkTHEME();
    setTimeout(() => {
        liveTranslateActivity.style.display = 'none';
        window.history.replaceState(null, '', window.location.pathname);
    }, 400);
}

// add- a language

const addLanguageActivity = document.querySelector(`[data-modal-21]`);

function openAddLanguage(){
    document.querySelector(`[data-modal-20]`).style.transform = 'translateX(-30%)';
    document.querySelector(`[data-modal-20]`).style.opacity = '0';
    addLanguageActivity.style.opacity = '1';
    addLanguageActivity.style.transform = 'none';
    checkTHEME();
    addLanguageActivity.style.display = 'block';
    document.querySelector(`[activity-content-21]`).scrollTop = 0;


    setTimeout(() =>{
        document.querySelector(`[activity-content-20]`).scrollTop = 0;
    }, 300);


    setTimeout(() =>{
        window.history.pushState({ modal: `modal-21` }, '', `#activity-21`);
        window.history.replaceState({ modal: `modal-21` }, '', window.location.pathname)

    }, 400);

    setTimeout(() =>{
      window.history.pushState({ modal: `modal-21` }, '', `#activity-21`);
  }, 450);
}


function closeAddLanguage(){

    addLanguageActivity.style.transform = 'translateX(30%)';
    addLanguageActivity.style.opacity = '0';
    document.querySelector(`[data-modal-20]`).style.transform = 'none';
    document.querySelector(`[data-modal-20]`).style.opacity = '1';
    checkTHEME();
    setTimeout(() => {
        addLanguageActivity.style.display = 'none';
        window.history.replaceState(null, '', window.location.pathname);
    }, 400);
}


// date and time

const DateandTimeActivity = document.querySelector(`[data-modal-22]`);

function openDateAndTime(){
    document.querySelector(`[data-modal-17]`).style.transform = 'translateX(-30%)';
    document.querySelector(`[data-modal-17]`).style.opacity = '0';
    DateandTimeActivity.style.opacity = '1';
    DateandTimeActivity.style.transform = 'none';
    checkTHEME();
    DateandTimeActivity.style.display = 'block';
    document.querySelector(`[activity-content-22]`).scrollTop = 0;


    setTimeout(() =>{
        document.querySelector(`[activity-content-17]`).scrollTop = 0;
    }, 300);


    setTimeout(() =>{
        window.history.pushState({ modal: `modal-22` }, '', `#activity-22`);
        window.history.replaceState({ modal: `modal-22` }, '', window.location.pathname)

    }, 400);

    setTimeout(() =>{
      window.history.pushState({ modal: `modal-22` }, '', `#activity-22`);
  }, 450);
}


function closeDateAndTime(){

    DateandTimeActivity.style.transform = 'translateX(30%)';
    DateandTimeActivity.style.opacity = '0';
    document.querySelector(`[data-modal-17]`).style.transform = 'none';
    document.querySelector(`[data-modal-17]`).style.opacity = '1';
    checkTHEME();
    setTimeout(() => {
        DateandTimeActivity.style.display = 'none';
        window.history.replaceState(null, '', window.location.pathname);
    }, 400);
}


// backup screen

const BackupActivity = document.querySelector(`[data-modal-23]`);

function openBackupScreen(){
    document.querySelector(`[data-modal-17]`).style.transform = 'translateX(-30%)';
    document.querySelector(`[data-modal-17]`).style.opacity = '0';
    BackupActivity.style.opacity = '1';
    BackupActivity.style.transform = 'none';
    checkTHEME();
    BackupActivity.style.display = 'block';
    document.querySelector(`[activity-content-23]`).scrollTop = 0;


    setTimeout(() =>{
        document.querySelector(`[activity-content-17]`).scrollTop = 0;
    }, 300);


    setTimeout(() =>{
        window.history.pushState({ modal: `modal-23` }, '', `#activity-23`);
        window.history.replaceState({ modal: `modal-23` }, '', window.location.pathname)

    }, 400);

    setTimeout(() =>{
      window.history.pushState({ modal: `modal-23` }, '', `#activity-23`);
  }, 450);
}


function closeBackupSettings(){

    BackupActivity.style.transform = 'translateX(30%)';
    BackupActivity.style.opacity = '0';
    document.querySelector(`[data-modal-17]`).style.transform = 'none';
    document.querySelector(`[data-modal-17]`).style.opacity = '1';
    checkTHEME();
    setTimeout(() => {
        BackupActivity.style.display = 'none';
        window.history.replaceState(null, '', window.location.pathname);
    }, 400);
}


// rules screen

const RulesActivity = document.querySelector(`[data-modal-24]`);

function openRules(){
    document.querySelector(`[data-modal-17]`).style.transform = 'translateX(-30%)';
    document.querySelector(`[data-modal-17]`).style.opacity = '0';
    RulesActivity.style.opacity = '1';
    RulesActivity.style.transform = 'none';
    checkTHEME();
    RulesActivity.style.display = 'block';
    document.querySelector(`[activity-content-24]`).scrollTop = 0;


    setTimeout(() =>{
        document.querySelector(`[activity-content-17]`).scrollTop = 0;
    }, 300);


    setTimeout(() =>{
        window.history.pushState({ modal: `modal-24` }, '', `#activity-24`);
        window.history.replaceState({ modal: `modal-24` }, '', window.location.pathname)

    }, 400);

    setTimeout(() =>{
      window.history.pushState({ modal: `modal-24` }, '', `#activity-24`);
  }, 450);
}


function closeRules(){

    RulesActivity.style.transform = 'translateX(30%)';
    RulesActivity.style.opacity = '0';
    document.querySelector(`[data-modal-17]`).style.transform = 'none';
    document.querySelector(`[data-modal-17]`).style.opacity = '1';
    checkTHEME();
    setTimeout(() => {
        RulesActivity.style.display = 'none';
        window.history.replaceState(null, '', window.location.pathname);
    }, 400);
}


// app info

const AppInfoActivity = document.querySelector(`[data-modal-25]`);

function openAppInfo(){
    document.querySelector(`[data-modal-24]`).style.transform = 'translateX(-30%)';
    document.querySelector(`[data-modal-24]`).style.opacity = '0';
    AppInfoActivity.style.opacity = '1';
    AppInfoActivity.style.transform = 'none';
    checkTHEME();
    AppInfoActivity.style.display = 'block';
    document.querySelector(`[activity-content-25]`).scrollTop = 0;


    setTimeout(() =>{
        document.querySelector(`[activity-content-24]`).scrollTop = 0;
    }, 300);


    setTimeout(() =>{
        window.history.pushState({ modal: `modal-25` }, '', `#activity-25`);
        window.history.replaceState({ modal: `modal-25` }, '', window.location.pathname)

    }, 400);

    setTimeout(() =>{
      window.history.pushState({ modal: `modal-25` }, '', `#activity-25`);
  }, 450);
}


function closeAppInfo(){

    AppInfoActivity.style.transform = 'translateX(30%)';
    AppInfoActivity.style.opacity = '0';
    document.querySelector(`[data-modal-24]`).style.transform = 'none';
    document.querySelector(`[data-modal-24]`).style.opacity = '1';
    checkTHEME();
    setTimeout(() => {
        AppInfoActivity.style.display = 'none';
        window.history.replaceState(null, '', window.location.pathname);
    }, 400);
}


// display size and text

const DisplaySizeAndTextActivity = document.querySelector(`[data-modal-35]`);

function openDisplaySizeAndText(){
    document.querySelector(`[data-modal-6]`).style.transform = 'translateX(-30%)';
    document.querySelector(`[data-modal-6]`).style.opacity = '0';
    DisplaySizeAndTextActivity.style.opacity = '1';
    DisplaySizeAndTextActivity.style.transform = 'none';
    checkTHEME();
    DisplaySizeAndTextActivity.style.display = 'block';
    document.querySelector(`[activity-content-35]`).scrollTop = 0;


    setTimeout(() =>{
        document.querySelector(`[activity-content-6]`).scrollTop = 0;
    }, 300);


    setTimeout(() =>{
        window.history.pushState({ modal: `modal-35` }, '', `#activity-35`);
        window.history.replaceState({ modal: `modal-35` }, '', window.location.pathname)

    }, 400);

    setTimeout(() =>{
      window.history.pushState({ modal: `modal-35` }, '', `#activity-35`);
  }, 450);
}


function closeDisplaySizeAndText(){

    DisplaySizeAndTextActivity.style.transform = 'translateX(30%)';
    DisplaySizeAndTextActivity.style.opacity = '0';
    document.querySelector(`[data-modal-6]`).style.transform = 'none';
    document.querySelector(`[data-modal-6]`).style.opacity = '1';
    checkTHEME();
    setTimeout(() => {
        DisplaySizeAndTextActivity.style.display = 'none';
        window.history.replaceState(null, '', window.location.pathname);
    }, 400);
}


// set lock screen

const SetLockScreenActivity = document.querySelector(`[data-modal-36`);

function openSetLock(){
    document.querySelector(`[data-modal-14]`).style.transform = 'translateX(-30%)';
    document.querySelector(`[data-modal-14]`).style.opacity = '0';
    SetLockScreenActivity.style.opacity = '1';
    SetLockScreenActivity.style.transform = 'none';
    checkTHEME();
    SetLockScreenActivity.style.display = 'block';
    document.querySelector(`[activity-content-36]`).scrollTop = 0;


    setTimeout(() =>{
        document.querySelector(`[activity-content-14]`).scrollTop = 0;
    }, 300);


    setTimeout(() =>{
        window.history.pushState({ modal: `modal-36` }, '', `#activity-36`);
        window.history.replaceState({ modal: `modal-36` }, '', window.location.pathname)

    }, 400);

    setTimeout(() =>{
      window.history.pushState({ modal: `modal-36` }, '', `#activity-36`);
  }, 450);
}


function closeSetLock(){

    SetLockScreenActivity.style.transform = 'translateX(30%)';
    SetLockScreenActivity.style.opacity = '0';
    document.querySelector(`[data-modal-14]`).style.transform = 'none';
    document.querySelector(`[data-modal-14]`).style.opacity = '1';
    checkTHEME();
    setTimeout(() => {
        SetLockScreenActivity.style.display = 'none';
        window.history.replaceState(null, '', window.location.pathname);
    }, 400);
}   
 