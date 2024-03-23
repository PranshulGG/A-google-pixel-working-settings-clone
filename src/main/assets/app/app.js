// if ('getBattery' in navigator) {
//     navigator.getBattery().then(function(battery) {
//         function updateBatteryStatus() {
//             var batteryPercentage = Math.floor(battery.level * 100) + "%";
//             document.getElementById("battery_perc").textContent = batteryPercentage;
//         }

//         updateBatteryStatus();

//         battery.addEventListener('levelchange', updateBatteryStatus);
//     });
// } else {
//     document.getElementById("battery_perc").textContent = "Battery information not available";
// }

function updateBatteryPercentage() {
    var batteryPercentage = window.BatteryInterface.getBatteryPercentage();

        var batteryBar = document.getElementById("battery-level");
        var batteryPercText = document.getElementById("battery_perc");

        var batteryIcon = document.getElementById("battery-icon");

        batteryBar.style.width = batteryPercentage + "%";
        batteryPercText.innerText = batteryPercentage + "%";
        document.getElementById('showBarPerc').innerHTML = batteryPercentage;

        if (batteryPercentage == 100) {
            batteryIcon.innerHTML = "battery_full";
        } else if (batteryPercentage >= 80) {
            batteryIcon.innerHTML = "battery_6_bar";
        } else if (batteryPercentage >= 60) {
            batteryIcon.innerHTML = "battery_5_bar";
        } else if (batteryPercentage >= 40) {
            batteryIcon.innerHTML = "battery_4_bar";
        } else if (batteryPercentage >= 20) {
            batteryIcon.innerHTML = "battery_2_bar";
        } else {
            batteryIcon.innerHTML = "battery_1_bar";
        }
    }
    updateBatteryPercentage();

    setInterval(updateBatteryPercentage, 60000);

// const Items = document.querySelectorAll('.items');

// function disableButtons() {
//     Items.forEach(function(item) {
//         item.style.pointerEvents = 'none';

//   });
// }

// function enableButtons() {
//     Items.forEach(function(item) {
//         item.style.pointerEvents = 'auto';
//       });
// }

// document.getElementById('scroll').addEventListener('scroll', function() {
//     disableButtons();
  
//     clearTimeout(document.getElementById('scroll').scrollTimer);
  
//     document.getElementById('scroll').scrollTimer = setTimeout(function() {
//       enableButtons();
//     }, 500); 
//   });

  function showTab(tabId) {
    var tabs = document.querySelectorAll('.deviceCustomTab');
    tabs.forEach(function(tab) {
        tab.style.display = 'none';
    });

    var selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }
}


// bottom-sheet-home

const mainSheet = document.getElementById('bottom-sheet');


function OpenSheet1(){
    sheetcolorInverted();
    mainSheet.style.display = 'flex';
}

window.addEventListener("click", function(event) {
    if (event.target == mainSheet) {
        document.querySelector('.home_screen_sheet_content').style.transform = 'translateY(100%)'
        document.querySelector('.home_screen_sheet_content').style.opacity = '0';

        mainSheet.style.opacity = '0';

    setTimeout(() =>{
        document.querySelector('.home_screen_sheet_content').style.transform = ''
        document.querySelector('.home_screen_sheet_content').style.opacity = '';
        mainSheet.style.display = 'none';
        mainSheet.style.opacity = '';


    }, 300);
        checkSearchScroll();
    }
  });

  // bottom-sheet-lock

const mainSheetLock = document.getElementById('bottom-sheet_lockscreen');


function OpenSheet2(){
    sheetcolorInverted();
    mainSheetLock.style.display = 'flex';
}

window.addEventListener("click", function(event) {
    if (event.target == mainSheetLock) {
        document.querySelector('.home_screen_sheet_content').style.transform = 'translateY(100%)'
        document.querySelector('.home_screen_sheet_content').style.opacity = '0';

        mainSheetLock.style.opacity = '0';

    setTimeout(() =>{
        document.querySelector('.home_screen_sheet_content').style.transform = ''
        document.querySelector('.home_screen_sheet_content').style.opacity = '';
        mainSheetLock.style.display = 'none';
        mainSheetLock.style.opacity = '';


    }, 300);
        checkSearchScroll();
    }
  });



//   grid_type



document.addEventListener("DOMContentLoaded", function() {
    const gridOptions = document.querySelectorAll('.grid_option');
    const selectedOption = localStorage.getItem('selectedOption');

    if (selectedOption) {
        const selectedGrid = document.querySelector(selectedOption);
        if (selectedGrid) {
            selectedGrid.classList.add('selected');
            updateSelectedGridText(selectedGrid.dataset.grid);
        }
    }

    gridOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            gridOptions.forEach(function(opt) {
                opt.classList.remove('selected');
            });

            this.classList.add('selected');
            const selectedGridText = this.dataset.grid.replace('grid_', ''); 
            updateSelectedGridText(selectedGridText);

            localStorage.setItem('selectedOption', '[data-grid="' + selectedGridText + '"]');
        });
    });

    function updateSelectedGridText(text) {
        const selectedGridTextElement = document.getElementById('selectedGridText');
        selectedGridTextElement.textContent = text;
    }
});

// select-timout

document.addEventListener("DOMContentLoaded", function(event) {
    const savedValue = localStorage.getItem('selectedSilenceAfter');
    if (savedValue) {
        const radio = document.querySelector(`input[value="${savedValue}"]`);
        if (radio) {
            radio.checked = true;
            document.getElementById('silence_after_text').textContent = savedValue;
        }
    }
});

function checkRadio(index) {
    const radios = document.getElementsByName('silenceAfter');
    const silenceAfterText = document.getElementById('silence_after_text');
    closeSilenceAfterDialog();
    radios.forEach((radio, i) => {
        if (i === index) {
            radio.checked = true;
            silenceAfterText.textContent = radio.value;
            localStorage.setItem('selectedSilenceAfter', radio.value);
        } else {
            radio.checked = false;
        }
    });
}

const silenceAfterModal = document.getElementById('silenceAfter');
var checkCOLORSSCROll = document.getElementById('headUser-5');


function openSilenceAfterDialog(){

    var scrollY = checkCOLORSSCROll.scrollTop;
  
    if (scrollY >= 50) {
    
        dialogcolorInverted();
  
    } else {
    dialogcolor();

    }

  
    silenceAfterModal.style.display = 'flex';

}

function closeSilenceAfterDialog(){
    silenceAfterModal.style.opacity = '0';

    var scrollY = checkCOLORSSCROll.scrollTop;
  
    if (scrollY >= 50) {
    
        checkSearchScroll();
  
    } else {
        checkTHEME();


    }

    setTimeout(() =>{
        silenceAfterModal.style.display = 'none';
        silenceAfterModal.style.opacity = '1';

    }, 300);
    
}


window.addEventListener("click", function(event) {
    if (event.target == silenceAfterModal) {
        closeSilenceAfterDialog();
        
    }
  });


const screenSaverActivity = document.querySelector(`[data-modal-7]`);

function openScreenSaverSettings(){
    document.querySelector(`[data-modal-6]`).style.transform = 'translateX(-30%)';
    document.querySelector(`[data-modal-6]`).style.opacity = '0';
    screenSaverActivity.style.opacity = '1';
    screenSaverActivity.style.transform = 'none';
    checkTHEME();
    screenSaverActivity.style.display = 'block';
    document.querySelector(`[activity-content-7]`).scrollTop = 0;


    setTimeout(() =>{
        document.querySelector(`[activity-content-6]`).scrollTop = 0;
    }, 300);


    setTimeout(() =>{
        window.history.pushState({ modal: `modal-7` }, '', `#activity-7`);
        window.history.replaceState({ modal: `modal-7` }, '', window.location.pathname)

    }, 400);

    setTimeout(() =>{
      window.history.pushState({ modal: `modal-7` }, '', `#activity-7`);
  }, 450);
}


function closeScreenSaverSettings(){

    screenSaverActivity.style.transform = 'translateX(30%)';
    screenSaverActivity.style.opacity = '0';
    document.querySelector(`[data-modal-6]`).style.transform = 'none';
    document.querySelector(`[data-modal-6]`).style.opacity = '1';
    checkTHEME();
    setTimeout(() => {
        screenSaverActivity.style.display = 'none';
        window.history.replaceState(null, '', window.location.pathname);
    }, 400);
}

// device menu



var DeviceMenu = document.querySelector('.MenuDevicesStorage');

function openDeviceMenu(){
    DeviceMenu.style.display = 'flex';
    document.querySelector('.overlAy').style.display = 'block';
}

function closeDeviceMenu(){
    document.querySelector('.MenuDevicesStorage').style.height = '0px';
    document.querySelector('.overlAy').style.display = 'none';

    setTimeout(() =>{
        document.querySelector('.MenuDevicesStorage').style.display = 'none';
    document.querySelector('.MenuDevicesStorage').style.height = '';

    }, 300);
}

document.querySelector('.overlAy').addEventListener('click', () =>{
    closeDeviceMenu()
});

function openTab(tabName, tabText) {
    var i, tabContent;

    tabContent = document.getElementsByClassName("DevicetabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "block";

    document.getElementById("selected_device_storage_Text").innerHTML = tabText + '<i class="icon-class-outlined">expand_more</i>';
}



// emergency alerts screen

const emergencyAlertsActivity = document.querySelector(`[data-modal-10]`);

function openemergencyAlerts(){
    document.querySelector(`[data-modal-9]`).style.transform = 'translateX(-30%)';
    document.querySelector(`[data-modal-9]`).style.opacity = '0';
    emergencyAlertsActivity.style.opacity = '1';
    emergencyAlertsActivity.style.transform = 'none';
    checkTHEME();
    emergencyAlertsActivity.style.display = 'block';
    document.querySelector(`[activity-content-10]`).scrollTop = 0;


    setTimeout(() =>{
    }, 300);


    setTimeout(() =>{
        window.history.pushState({ modal: `modal-10` }, '', `#activity-10`);
        window.history.replaceState({ modal: `modal-10` }, '', window.location.pathname)

    }, 400);

    setTimeout(() =>{
      window.history.pushState({ modal: `modal-10` }, '', `#activity-10`);
  }, 450);
}


function closeemergencyAlerts(){

    emergencyAlertsActivity.style.transform = 'translateX(30%)';
    emergencyAlertsActivity.style.opacity = '0';
    document.querySelector(`[data-modal-9]`).style.transform = 'none';
    document.querySelector(`[data-modal-9]`).style.opacity = '1';
    checkTHEME();
    setTimeout(() => {
        emergencyAlertsActivity.style.display = 'none';
        window.history.replaceState(null, '', window.location.pathname);
    }, 400);
}

// location_sheet

const mainSheetlocation = document.getElementById('bottom-sheet_location');


function openGooglelocationSheet(){
    sheetcolorInverted();
    mainSheetlocation.style.display = 'flex';
}

window.addEventListener("click", function(event) {
    if (event.target == mainSheetlocation) {
        document.querySelector('.bottom-sheet-location-content').style.transform = 'translateY(100%)'
        document.querySelector('.bottom-sheet-location-content').style.opacity = '0';

        mainSheetlocation.style.opacity = '0';

    setTimeout(() =>{
        document.querySelector('.bottom-sheet-location-content').style.transform = ''
        document.querySelector('.bottom-sheet-location-content').style.opacity = '';
        mainSheetlocation.style.display = 'none';
        mainSheetlocation.style.opacity = '';


    }, 300);
        checkTHEME();
    }
  });


//   location services pages


const locationServicesActivity = document.querySelector(`[data-modal-13]`);

function openLocationServices(){
    document.querySelector(`[data-modal-12]`).style.transform = 'translateX(-30%)';
    document.querySelector(`[data-modal-12]`).style.opacity = '0';
    locationServicesActivity.style.opacity = '1';
    locationServicesActivity.style.transform = 'none';
    checkTHEME();
    locationServicesActivity.style.display = 'block';
    document.querySelector(`[activity-content-13]`).scrollTop = 0;


    setTimeout(() =>{
        document.querySelector(`[activity-content-12]`).scrollTop = 0;
    }, 300);


    setTimeout(() =>{
        window.history.pushState({ modal: `modal-13` }, '', `#activity-13`);
        window.history.replaceState({ modal: `modal-13` }, '', window.location.pathname)

    }, 400);

    setTimeout(() =>{
      window.history.pushState({ modal: `modal-13` }, '', `#activity-13`);
  }, 450);
}


function closeLocationServices(){

    locationServicesActivity.style.transform = 'translateX(30%)';
    locationServicesActivity.style.opacity = '0';
    document.querySelector(`[data-modal-12]`).style.transform = 'none';
    document.querySelector(`[data-modal-12]`).style.opacity = '1';
    checkTHEME();
    setTimeout(() => {
        locationServicesActivity.style.display = 'none';
        window.history.replaceState(null, '', window.location.pathname);
    }, 400);
}

function toggleDropDownRisk() {
    const borderRiskChange = document.getElementById('border_risk_change');
    const settingsHolderRisk = document.querySelector('.settings_holder_risk');
    const dropDownMenuRisk = document.querySelector('.DropDownMenu_risk');

    const isOpened = dropDownMenuRisk.classList.contains('OPENEDSTATEOFRISKDIV');

    borderRiskChange.classList.toggle('borderChange');
    settingsHolderRisk.classList.toggle('move');

    if (!isOpened) {
        setTimeout(() => {
            dropDownMenuRisk.classList.toggle('OPENEDSTATEOFRISKDIV');
            document.getElementById('expand_error_icon').innerHTML = 'expand_less'
        }, 400);
    } else {
        dropDownMenuRisk.classList.toggle('OPENEDSTATEOFRISKDIV');
        document.getElementById('expand_error_icon').innerHTML = 'expand_more'

    }
}


function closeDialogcolor(){
    var container = document.getElementById('headUser-13');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    checkTHEME();
  } else{
    checkSearchScroll();
  }
}

function checkOpenDialogColor(){
    var container = document.getElementById('headUser-13');
    var scrollY = container.scrollTop;
  
    if (scrollY <= 50) {
      dialogcolor()
    } else{
      dialogcolorInverted();
    }
}


function updateValues() {
    var specificDiv = document.getElementById('WellbeingDiv');
    if (window.getComputedStyle(specificDiv).display === 'block') {
        var progressBar = document.getElementById('progressBar');
        var usedCountWellbeing = document.getElementById('used_count_wellbeing');

        var randomValue = Math.random();
        progressBar.setAttribute('value', randomValue.toFixed(2)); 

        var randomHours = Math.floor(Math.random() * 24);
        var randomMinutes = Math.floor(Math.random() * 60);
        usedCountWellbeing.textContent = randomHours + ' hr, ' + randomMinutes + ' min';
    }
}

updateValues();

setInterval(updateValues, 3000);




function checkGRIDBOXES(){
    const gridContainer = document.querySelector('.language-feature-icon');
    const items = gridContainer.children;
    
    if (items.length === 1) {
        gridContainer.style.gridTemplateColumns = 'repeat(3, 1fr)'
      items[0].style.gridColumn = '2 / 3'; 
    }
      else if(items.length === 2){

        gridContainer.style.gridTemplateColumns = 'repeat(2, 1fr)'
        items[0].style.gridColumn = '2 / 1'; 



    } else if(items.length === 3){
        gridContainer.style.gridTemplateColumns = 'repeat(3, 1fr)'
      items[0].style.gridColumn = ''; 
} else if(items.length === 4){
    gridContainer.style.gridTemplateColumns = 'repeat(2, 1fr)'
  items[0].style.gridColumn = ''; 

}
}


  const CameraFeature = document.getElementById('Camera_feature_language');
  const MessagingFeature = document.getElementById('Messaging_feature_language');
  const CaptionFeature = document.getElementById('Caption_feature_language');
  const InterpreterFeature = document.getElementById('Interpreter_feature_language');

  function changetitle(title){
    checkGRIDBOXES()
    if (title === "Chinese (Simplified)") {
        document.getElementById('top_language_name').style.fontSize = '30px';
    } else{
        document.getElementById('top_language_name').style.fontSize = '';


    }
    document.getElementById('top_language_name').innerHTML = title;
}


function closeAddLanguageDialogcolor(){
    var container = document.getElementById('headUser-20');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    checkTHEME();
  } else{
    checkSearchScroll();
  }
}

function checkOpenAddLanguageDialogColor(){
    var container = document.getElementById('headUser-20');
    var scrollY = container.scrollTop;
  
    if (scrollY <= 50) {
      dialogcolor()
    } else{
      dialogcolorInverted();
    }
}


function createMessagingFeature(){

    const appender = document.querySelector('.language-feature-icon');

    const MainDiv = document.createElement('div')
     MainDiv.classList.add('language-feature-Icon-item-cover')
     MainDiv.id = 'Messaging_feature_language';
     const InnerIconHolderMessage = document.createElement('div');
     const IconItem = document.createElement('i')
     InnerIconHolderMessage.classList.add('language-feature-Icon-item');
     IconItem.classList.add('icon-class-outlined');
     const labelElement = document.createElement('p')
     labelElement.innerHTML = 'Messaging';
    IconItem.innerHTML = 'chat'

     MainDiv.appendChild(InnerIconHolderMessage);
     InnerIconHolderMessage.appendChild(IconItem);
     MainDiv.appendChild(labelElement)


     appender.appendChild(MainDiv)

     checkGRIDBOXES(); 

}


checkGRIDBOXES(); 




function removeMessagingFeature() {
    const mainDivToRemove = document.getElementById('Messaging_feature_language');
    if (mainDivToRemove) {
        mainDivToRemove.remove();
        checkGRIDBOXES(); 
    } else {
    }
}


// caption -feature


function createCaptionFeature(){

    const appender = document.querySelector('.language-feature-icon');

    const MainDiv = document.createElement('div')
     MainDiv.classList.add('language-feature-Icon-item-cover')
     MainDiv.id = 'Caption_feature_language';
     const InnerIconHolderCaption = document.createElement('div');
     const IconItem = document.createElement('i')
     InnerIconHolderCaption.classList.add('language-feature-Icon-item');
     IconItem.classList.add('icon-class-outlined');
     const labelElement = document.createElement('p')
     labelElement.innerHTML = 'Live Caption';
    IconItem.innerHTML = 'subtitles'

     MainDiv.appendChild(InnerIconHolderCaption);
     InnerIconHolderCaption.appendChild(IconItem);
     MainDiv.appendChild(labelElement)

     appender.appendChild(MainDiv)
     checkGRIDBOXES(); 
}



function removeCaptionFeature() {
    const mainDivToRemove = document.getElementById('Caption_feature_language');
    if (mainDivToRemove) {
        mainDivToRemove.remove();
        checkGRIDBOXES(); 
    } else {
    }
}



// InterpreterFeature

function createInterpreterFeature(){

    const appender = document.querySelector('.language-feature-icon');

    const MainDiv = document.createElement('div')
     MainDiv.classList.add('language-feature-Icon-item-cover')
     MainDiv.id = 'Interpreter_feature_language';
     const InnerIconHolderInterpreter = document.createElement('div');
     const IconItem = document.createElement('i')
     InnerIconHolderInterpreter.classList.add('language-feature-Icon-item');
     IconItem.classList.add('icon-class-outlined');
     const labelElement = document.createElement('p')
     labelElement.innerHTML = 'Interpreter';
    IconItem.innerHTML = 'interpreter_mode';

     MainDiv.appendChild(InnerIconHolderInterpreter);
     InnerIconHolderInterpreter.appendChild(IconItem);
     MainDiv.appendChild(labelElement);

     appender.appendChild(MainDiv);
     checkGRIDBOXES(); 
}



function removeInterpreterFeature() {
    const mainDivToRemove = document.getElementById('Interpreter_feature_language');
    if (mainDivToRemove) {
        mainDivToRemove.remove();
        checkGRIDBOXES(); 

    } else {
    }
}



// fetch real time

function showTimeInSettings() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12; 
    const minutes = ('0' + now.getMinutes()).slice(-2);
    const seconds = ('0' + now.getSeconds()).slice(-2);
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    const month = now.toLocaleString('default', { month: 'short' });
    const date = now.getDate();
    const year = now.getFullYear();

    document.getElementById('show_real_time').textContent = `${hours}:${minutes} ${ampm}`;
    document.getElementById('show_real_date').textContent = `${month} ${date}, ${year}`
    
   
  }

  showTimeInSettings();

  setInterval(() => {
    showTimeInSettings();
  }, 1000);


  function closeDialogColorLetAppRun(){
    var container = document.getElementById('headUser-23');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    checkTHEME();
  } else{
    checkSearchScroll();
  }
}

function checkDialogColorLetAppRun(){
    var container = document.getElementById('headUser-23');
    var scrollY = container.scrollTop;
  
    if (scrollY <= 50) {
      dialogcolor()
    } else{
      dialogcolorInverted();
    }
}


// app info

function closeDialogColorAppInfo(){
    var container = document.getElementById('headUser-24');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    checkTHEME();
  } else{
    checkSearchScroll();
  }
}

function checkDialogColorAppInfo(){
    var container = document.getElementById('headUser-24');
    var scrollY = container.scrollTop;
  
    if (scrollY <= 50) {
      dialogcolor()
    } else{
      dialogcolorInverted();
    }
}


// app info storage and cache


function closeDialogColorStorageAndCache(){
    var container = document.getElementById('headUser-27');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    checkTHEME();
  } else{
    checkSearchScroll();
  }
}

function checkDialogColorStorageAndCache(){
    var container = document.getElementById('headUser-27');
    var scrollY = container.scrollTop;
  
    if (scrollY <= 50) {
      dialogcolor()
    } else{
      dialogcolorInverted();
    }
}

// clear-cache

function clearCache(){
    document.querySelector('.clear_cache_btn').disabled = true;

    setTimeout(() =>{
        document.getElementById('cache_ripple').remove();
        ShowSnack('Cache was cleared', 3000, 5)
    }, 600);

    document.getElementById('cache_value').innerHTML = '0.0 B';

    setTimeout(() =>{
    document.querySelector('.clear_cache_btn').disabled = false;
    document.getElementById('cache_value').innerHTML = '267 kB';
    const createRemoveRipple = document.createElement('md-ripple')
    document.querySelector('.clear_cache_btn').appendChild(createRemoveRipple);

    if(createError){
        print(`Error creating ripple ${unit_value_cache}`)
    } else{
    Ripple()
    }

    }, 20000);

}

// clear app data

function clearDataApp(){
    const appSizeText = document.querySelector('.app_size_text');
    const userDataSizeText = document.querySelector('.user_data_size_text');
    const TotalAppSizeText = document.querySelector('.total_app_size_text');

    appSizeText.innerText = '0.0 B'
    userDataSizeText.innerText = '0.0 B'
    TotalAppSizeText.innerText = '0.0 B'

    document.querySelector('.clear_data_Storage_btn').disabled = true;


    setTimeout(() =>{
        document.getElementById('clear_data_storage_btn_ripple').remove();
        ShowSnack('Storage was cleared', 3000, 5);
    }, 600);

    const TextString = toString();

    setTimeout(() =>{
       const removedClearDataBtnRipple = document.createElement('md-ripple')
    document.querySelector('.clear_data_Storage_btn').disabled = false;

       document.querySelector('.clear_data_Storage_btn').appendChild(removedClearDataBtnRipple);

       appSizeText.innerText = '4.10 kB'
       userDataSizeText.innerText = '6.02 MB'
       TotalAppSizeText.innerText = '6.31 MB'
    //    Math.random(number)
        // TextString



    }, 20000);


    
}


// time chart dates

function updateText() {
    var scrollPosition = document.querySelector('.scroll_chart').scrollLeft;
    var divWidth = document.querySelector('.screen_time_chart').clientWidth;
    var currentDiv = Math.floor(scrollPosition / divWidth);
    var today = new Date();
    var currentDate = new Date(today.getTime() - (currentDiv * 10 * 24 * 60 * 60 * 1000)); // for 10 days gap
    var formattedDate = formatDate(currentDate, today);

    document.getElementById("chart_date_text").innerText = formattedDate;
    document.getElementById('chart_time').innerHTML = formattedDate

}

function formatDate(date, today) {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); 
    var yyyy = date.getFullYear();
    
    if (date.toDateString() === today.toDateString()) {
        return "Today";
    } else {
        return mm + '/' + dd + '/' + yyyy;
    }
}




const scrollLeftBtn = document.getElementById('scrollLeftBtn');
const scrollRightBtn = document.getElementById('scrollRightBtn');
const scrollChart = document.querySelector('.scroll_chart');

function toggleScrollButtons() {
  if (scrollChart.scrollWidth <= scrollChart.clientWidth) {
    scrollLeftBtn.style.display = 'none';
    scrollRightBtn.style.display = 'none';
  } else {
    scrollLeftBtn.style.display = 'block';
    scrollRightBtn.style.display = 'block';
  }
}

scrollLeftBtn.addEventListener('click', function() {
  scrollChart.scrollBy({ left: -1, behavior: 'smooth' });
});

scrollRightBtn.addEventListener('click', function() {
  scrollChart.scrollBy({ left: 1, behavior: 'smooth' });
});

toggleScrollButtons();


window.addEventListener('resize', toggleScrollButtons);


// menu

function openScreenTimeFirstMenu(){
    document.querySelector('.menu_one_screen_time').style.display = 'flex';
    document.querySelector('.menu_overlay_screen_time').style.display = 'block';
    document.querySelector('.menu_one_screen_time').style.opacity = '1';

}

function closeScreenTimeFirstMenu(){
    document.querySelector('.menu_one_screen_time').style.opacity = '0';
    

    setTimeout(() => {
        document.querySelector('.menu_one_screen_time').style.display = 'none';
        document.querySelector('.menu_overlay_screen_time').style.display = 'none';

    }, 300);

}

// 2

function openScreenTimeSecondMenu(){
    document.querySelector('.menu_two_screen_time').style.display = 'flex';
    document.querySelector('.menu_overlay_screen_time_2').style.display = 'block';
    document.querySelector('.menu_two_screen_time').style.opacity = '1';

}

function closeScreenTimeSecondMenu(){
    document.querySelector('.menu_two_screen_time').style.opacity = '0';
    

    setTimeout(() => {
        document.querySelector('.menu_two_screen_time').style.display = 'none';
        document.querySelector('.menu_overlay_screen_time_2').style.display = 'none';

    }, 300);

}

// 3

function openDashBoardFirstMenu(){
    document.querySelector('.screen_time_menu_dash_board').style.display = 'flex';
    document.querySelector('.dash_board_overlay').style.display = 'block';
    document.querySelector('.screen_time_menu_dash_board').style.opacity = '1';

}

function closeDashBoardFirstMenu(){
    document.querySelector('.screen_time_menu_dash_board').style.opacity = '0';
    

    setTimeout(() => {
        document.querySelector('.screen_time_menu_dash_board').style.display = 'none';
        document.querySelector('.dash_board_overlay').style.display = 'none';

    }, 300);

}


// dash board

function closeDashBoardScrollDialog(){
    var container = document.getElementById('headUser-32');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    checkTHEME();
  } else{
    checkSearchScroll();
  }
}

function CheckDashBoardScrollDialog(){
    var container = document.getElementById('headUser-32');
    var scrollY = container.scrollTop;
  
    if (scrollY <= 50) {
      dialogcolor()
    } else{
      dialogcolorInverted();
    }
}


function showHiddenApp(){
    document.querySelector('.hidden_app_list').classList.toggle('openAppList');
    document.querySelector('.showAllAppsToggle').classList.toggle('hideShowMoreBtn');
}




const scrollView = document.querySelector('.preview-scroll-view');


const sections = document.querySelectorAll('.scrollSnaping');
const scrollIndicators = document.getElementById('scroll-indicators');


sections.forEach((section, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.onclick = () => {
    section.scrollIntoView({ behavior: 'smooth' });
  };
  scrollIndicators.appendChild(dot);
});


const updateActiveIndicator = () => {
  const scrollPosition = Math.round(scrollView.scrollLeft / scrollView.offsetWidth);
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index === scrollPosition) {
      dot.style.backgroundColor = 'var(--Primary)'; 
    } else {
      dot.style.backgroundColor = 'var(--Secondary-Container)'; 
    }
  });
};


scrollView.addEventListener('scroll', updateActiveIndicator);

updateActiveIndicator();

function resetValuesDisplaySizeText() {
    var slider1 = document.getElementById('font_size_display_Settings');
    var slider2 = document.getElementById('display_size_display_Settings');

    if (slider1 && slider2) {
        slider1.value = 25;
        slider2.value = 20; 
    } else {
        console.error('Sliders not found!');
    }
    var switchElement = document.getElementById('bold_text_display_settings');
    var switchElement2 = document.getElementById('high_contrast_text_display_settings');

    if (switchElement && switchElement2) {
        switchElement.selected = false
        switchElement2.selected = false

    } else {
        console.error('Switch element not found!');
    }
}


// dialogs 




function changeDeviceName() {
    const newDeviceName = document.getElementById('device_name_change').value;
    const nameDeviceAbout = document.getElementById('name_device_about');

    if (newDeviceName.trim() === '') {
        nameDeviceAbout.innerHTML = "Infinix HOT 10";
        document.getElementById('copy_device_name').setAttribute('data-copy', 'Infinix HOT 10')
        document.getElementById('device_name_menu').innerHTML = 'Infinix HOT 10';
        ShowSnack("You can't leave the input empty", 3000, 5);
    } else {
        nameDeviceAbout.innerHTML = newDeviceName;
        document.getElementById('copy_device_name').setAttribute('data-copy', newDeviceName)
        document.getElementById('device_name_menu').innerHTML = newDeviceName;

    }
}



function openDialog(dialogId, ColorValueActivity){
    var dialogMDC = document.querySelector('[data-dialog="' + dialogId + '"]');
    const ColorChecker = document.querySelector(`[activity-content-${ColorValueActivity}]`);

    dialogMDC.show();


        var scrollY = ColorChecker.scrollTop;
  
        if (scrollY <= 50) {
          dialogcolor()
    
        } else{
          dialogcolorInverted();
        }
    

  

}



function closeDialog(dialogCloseID, ColorValueActivityClose){
    var dialogMDC = document.querySelector('[data-dialog="' + dialogCloseID + '"]');
    const ColorChecker = document.querySelector(`[activity-content-${ColorValueActivityClose}]`);

    dialogMDC.close();

    dialogMDC.addEventListener('close', () =>{
        var scrollY = ColorChecker.scrollTop;
  
        if (scrollY <= 50) {
            checkTHEME();
        } else{
            checkSearchScroll();
        }
    
    });


}



document.addEventListener('click', function(event) {

    if (event.target.hasAttribute('DialogClose')) {
        var dialogCloseID = event.target.getAttribute('DialogClose');
        var ColorValueActivityClose = event.target.getAttribute('activity');
        closeDialog(dialogCloseID, ColorValueActivityClose);
    }
});

function updateUpTime() {
    var currentTime = new Date().getTime();
    
    var elapsedTime = currentTime - startTime;
    
    var hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    var minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    
    document.getElementById("up_time").innerHTML = hours + ":" + minutes + ":" + seconds;
  }

  var startTime = new Date().getTime();

  setInterval(updateUpTime, 1000);