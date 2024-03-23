// setting services notifications 


const SettingServiceNotiActivity = document.querySelector(`[data-modal-26]`);

function openSettingServices(){
    document.querySelector(`[data-modal-25]`).style.transform = 'translateX(-30%)';
    document.querySelector(`[data-modal-25]`).style.opacity = '0';
    SettingServiceNotiActivity.style.opacity = '1';
    SettingServiceNotiActivity.style.transform = 'none';
    checkTHEME();
    SettingServiceNotiActivity.style.display = 'block';
    document.querySelector(`[activity-content-26]`).scrollTop = 0;


    setTimeout(() =>{
        document.querySelector(`[activity-content-25]`).scrollTop = 0;
    }, 300);


    setTimeout(() =>{
        window.history.pushState({ modal: `modal-26` }, '', `#activity-26`);
        window.history.replaceState({ modal: `modal-26` }, '', window.location.pathname)

    }, 400);

    setTimeout(() =>{
      window.history.pushState({ modal: `modal-26` }, '', `#activity-26`);
  }, 450);
}


function closeSettingServices(){

    SettingServiceNotiActivity.style.transform = 'translateX(30%)';
    SettingServiceNotiActivity.style.opacity = '0';
    document.querySelector(`[data-modal-25]`).style.transform = 'none';
    document.querySelector(`[data-modal-25]`).style.opacity = '1';
    checkTHEME();
    setTimeout(() => {
        SettingServiceNotiActivity.style.display = 'none';
        window.history.replaceState(null, '', window.location.pathname);
    }, 400);
}

// setting services app permissions


const SettingServiceAppPermissionsActivity = document.querySelector(`[data-modal-27]`);

function openSettingServicesAppPermissions(){
    document.querySelector(`[data-modal-25]`).style.transform = 'translateX(-30%)';
    document.querySelector(`[data-modal-25]`).style.opacity = '0';
    SettingServiceAppPermissionsActivity.style.opacity = '1';
    SettingServiceAppPermissionsActivity.style.transform = 'none';
    checkTHEME();
    SettingServiceAppPermissionsActivity.style.display = 'block';
    document.querySelector(`[activity-content-27]`).scrollTop = 0;


    setTimeout(() =>{
        document.querySelector(`[activity-content-25]`).scrollTop = 0;
    }, 300);


    setTimeout(() =>{
        window.history.pushState({ modal: `modal-27` }, '', `#activity-27`);
        window.history.replaceState({ modal: `modal-27` }, '', window.location.pathname)

    }, 400);

    setTimeout(() =>{
      window.history.pushState({ modal: `modal-27` }, '', `#activity-27`);
  }, 450);
}


function closeSettingServicesAppPermissions(){

    SettingServiceAppPermissionsActivity.style.transform = 'translateX(30%)';
    SettingServiceAppPermissionsActivity.style.opacity = '0';
    document.querySelector(`[data-modal-25]`).style.transform = 'none';
    document.querySelector(`[data-modal-25]`).style.opacity = '1';
    checkTHEME();
    setTimeout(() => {
        SettingServiceAppPermissionsActivity.style.display = 'none';
        window.history.replaceState(null, '', window.location.pathname);
    }, 400);
}

// app info storage and cache


const SettingServiceStorageCachesActivity = document.querySelector(`[data-modal-28]`);

function openSettingsServicesStorageCache(){
    document.querySelector(`[data-modal-25]`).style.transform = 'translateX(-30%)';
    document.querySelector(`[data-modal-25]`).style.opacity = '0';
    SettingServiceStorageCachesActivity.style.opacity = '1';
    SettingServiceStorageCachesActivity.style.transform = 'none';
    checkTHEME();
    SettingServiceStorageCachesActivity.style.display = 'block';
    document.querySelector(`[activity-content-28]`).scrollTop = 0;


    setTimeout(() =>{
        document.querySelector(`[activity-content-25]`).scrollTop = 0;
    }, 300);


    setTimeout(() =>{
        window.history.pushState({ modal: `modal-28` }, '', `#activity-28`);
        window.history.replaceState({ modal: `modal-28` }, '', window.location.pathname)

    }, 400);

    setTimeout(() =>{
      window.history.pushState({ modal: `modal-28` }, '', `#activity-28`);
  }, 450);
}


function closeSettingsServicesStorageCache(){

    SettingServiceStorageCachesActivity.style.transform = 'translateX(30%)';
    SettingServiceStorageCachesActivity.style.opacity = '0';
    document.querySelector(`[data-modal-25]`).style.transform = 'none';
    document.querySelector(`[data-modal-25]`).style.opacity = '1';
    checkTHEME();
    setTimeout(() => {
        SettingServiceStorageCachesActivity.style.display = 'none';
        window.history.replaceState(null, '', window.location.pathname);
    }, 400);
}


// app info data usage mobile



const SettingServiceMobileDataActivity = document.querySelector(`[data-modal-29]`);

function openSettingsServicesMobiledata(){
    document.querySelector(`[data-modal-25]`).style.transform = 'translateX(-30%)';
    document.querySelector(`[data-modal-25]`).style.opacity = '0';
    SettingServiceMobileDataActivity.style.opacity = '1';
    SettingServiceMobileDataActivity.style.transform = 'none';
    checkTHEME();
    SettingServiceMobileDataActivity.style.display = 'block';
    document.querySelector(`[activity-content-29]`).scrollTop = 0;


    setTimeout(() =>{
        document.querySelector(`[activity-content-25]`).scrollTop = 0;
    }, 300);


    setTimeout(() =>{
        window.history.pushState({ modal: `modal-29` }, '', `#activity-29`);
        window.history.replaceState({ modal: `modal-29` }, '', window.location.pathname)

    }, 400);

    setTimeout(() =>{
      window.history.pushState({ modal: `modal-29` }, '', `#activity-29`);
  }, 450);
}


function closeSettingsServicesMobiledata(){

    SettingServiceMobileDataActivity.style.transform = 'translateX(30%)';
    SettingServiceMobileDataActivity.style.opacity = '0';
    document.querySelector(`[data-modal-25]`).style.transform = 'none';
    document.querySelector(`[data-modal-25]`).style.opacity = '1';
    checkTHEME();
    setTimeout(() => {
        SettingServiceMobileDataActivity.style.display = 'none';
        window.history.replaceState(null, '', window.location.pathname);
    }, 400);
}


// settings services screen time


const SettingServiceScreenTimeActivity = document.querySelector(`[data-modal-30]`);

function openSettingsServicesScreenTime(){
    document.querySelector(`[data-modal-25]`).style.transform = 'translateX(-30%)';
    document.querySelector(`[data-modal-25]`).style.opacity = '0';
    SettingServiceScreenTimeActivity.style.opacity = '1';
    SettingServiceScreenTimeActivity.style.transform = 'none';
    checkTHEME();
    SettingServiceScreenTimeActivity.style.display = 'block';
    document.querySelector(`[activity-content-30]`).scrollTop = 0;


    setTimeout(() =>{
        document.querySelector(`[activity-content-25]`).scrollTop = 0;
    }, 300);


    setTimeout(() =>{
        window.history.pushState({ modal: `modal-30` }, '', `#activity-30`);
        window.history.replaceState({ modal: `modal-30` }, '', window.location.pathname)

    }, 400);

    setTimeout(() =>{
      window.history.pushState({ modal: `modal-30` }, '', `#activity-30`);
  }, 450);
}


function closeSettingsServicesScreenTime(){

    SettingServiceScreenTimeActivity.style.transform = 'translateX(30%)';
    SettingServiceScreenTimeActivity.style.opacity = '0';
    document.querySelector(`[data-modal-25]`).style.transform = 'none';
    document.querySelector(`[data-modal-25]`).style.opacity = '1';
    checkTHEME();
    setTimeout(() => {
        SettingServiceScreenTimeActivity.style.display = 'none';
        window.history.replaceState(null, '', window.location.pathname);
    }, 400);
}


// settings services app battery usage


const SettingServiceBatteryUsageActivity = document.querySelector(`[data-modal-31]`);

function openSettingsServicesBatteryUsage(){
    document.querySelector(`[data-modal-25]`).style.transform = 'translateX(-30%)';
    document.querySelector(`[data-modal-25]`).style.opacity = '0';
    SettingServiceBatteryUsageActivity.style.opacity = '1';
    SettingServiceBatteryUsageActivity.style.transform = 'none';
    checkTHEME();
    SettingServiceBatteryUsageActivity.style.display = 'block';
    document.querySelector(`[activity-content-31]`).scrollTop = 0;


    setTimeout(() =>{
        document.querySelector(`[activity-content-25]`).scrollTop = 0;
    }, 300);


    setTimeout(() =>{
        window.history.pushState({ modal: `modal-31` }, '', `#activity-31`);
        window.history.replaceState({ modal: `modal-31` }, '', window.location.pathname)

    }, 400);

    setTimeout(() =>{
      window.history.pushState({ modal: `modal-31` }, '', `#activity-31`);
  }, 450);
}


function closeSettingsServicesBatteryUsage(){

    SettingServiceBatteryUsageActivity.style.transform = 'translateX(30%)';
    SettingServiceBatteryUsageActivity.style.opacity = '0';
    document.querySelector(`[data-modal-25]`).style.transform = 'none';
    document.querySelector(`[data-modal-25]`).style.opacity = '1';
    checkTHEME();
    setTimeout(() => {
        SettingServiceBatteryUsageActivity.style.display = 'none';
        window.history.replaceState(null, '', window.location.pathname);
    }, 400);
}



//settings service apen by default

const SettingServiceOpenByDefaultActivity = document.querySelector(`[data-modal-32]`);

function openSettingsServicesOpenByDefault(){
    document.querySelector(`[data-modal-25]`).style.transform = 'translateX(-30%)';
    document.querySelector(`[data-modal-25]`).style.opacity = '0';
    SettingServiceOpenByDefaultActivity.style.opacity = '1';
    SettingServiceOpenByDefaultActivity.style.transform = 'none';
    checkTHEME();
    SettingServiceOpenByDefaultActivity.style.display = 'block';
    document.querySelector(`[activity-content-32]`).scrollTop = 0;


    setTimeout(() =>{
        document.querySelector(`[activity-content-25]`).scrollTop = 0;
    }, 300);


    setTimeout(() =>{
        window.history.pushState({ modal: `modal-32` }, '', `#activity-32`);
        window.history.replaceState({ modal: `modal-32` }, '', window.location.pathname)

    }, 400);

    setTimeout(() =>{
      window.history.pushState({ modal: `modal-32` }, '', `#activity-32`);
  }, 450);
}


function closeSettingsServicesOpenByDefault(){

    SettingServiceOpenByDefaultActivity.style.transform = 'translateX(30%)';
    SettingServiceOpenByDefaultActivity.style.opacity = '0';
    document.querySelector(`[data-modal-25]`).style.transform = 'none';
    document.querySelector(`[data-modal-25]`).style.opacity = '1';
    checkTHEME();
    setTimeout(() => {
        SettingServiceOpenByDefaultActivity.style.display = 'none';
        window.history.replaceState(null, '', window.location.pathname);
    }, 400);
}