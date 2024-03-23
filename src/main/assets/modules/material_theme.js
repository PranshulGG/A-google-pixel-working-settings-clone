const toggleSwitch = document.getElementById('toggledark');
const colorCheckbox = document.getElementById('togglecolor');
const textToUpdate = document.getElementById('themeName');

const currentTheme = localStorage.getItem('theme') || 'light';
const currentColorTheme = localStorage.getItem('color-theme') || 'Material You (pop_blue_default)';

const colorThemes = ['Material You (Berry pop blue 44)', 'Material You (Raisin purple 100)', 'Material You (Olive pop green 49)', 'Material You (Forest green 33)', 'Material You (Chestnut cool red 122)', 'Material You (Raspberry pink P99)', 'Material You (Hint orange 33)', 'Material You (Deep charcoal 83)'];

function setTheme(theme, color) {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-color-theme', color);
    localStorage.setItem('theme', theme);
    localStorage.setItem('color-theme', color);
    updateTextContent(color);
}

function getRandomColorTheme() {
    const randomIndex = Math.floor(Math.random() * colorThemes.length);
     checkTHEME();
    return colorThemes[randomIndex];

}

toggleSwitch.addEventListener('change', () => {
    const selectedTheme = toggleSwitch.checked ? 'dark' : 'light';
    const selectedColor = colorCheckbox.checked ? getRandomColorTheme() : 'Material You (pop_blue_default)';
    setTheme(selectedTheme, selectedColor);
     checkSearchScroll();
     displayDarkSwitch()
});



colorCheckbox.addEventListener('change', () => {
    const selectedTheme = toggleSwitch.checked ? 'dark' : 'light';
  const selectedColor = colorCheckbox.checked ?  getRandomColorTheme() : 'Material You (pop_blue_default)';
    setTheme(selectedTheme, selectedColor);
    checkSearchScroll();
    displayDarkSwitch()

});

 colorCheckbox.addEventListener('change', function() {
     if (!colorCheckbox.checked) {
         onlyCHECK();
     }
 });

setTheme(currentTheme, currentColorTheme);


 function checkTHEME(){

     const currentTheme = localStorage.getItem('theme');
     const currentColorTheme = localStorage.getItem('color-theme');

     if (currentTheme === 'dark') {

         if (currentColorTheme === 'Material You (Berry pop blue 44)') {
             sendThemeToAndroid('blue-dark');
         } else if (currentColorTheme === 'Material You (Raisin purple 100)') {
             sendThemeToAndroid('purple-dark');
         } else if (currentColorTheme === 'Material You (Olive pop green 49)') {
             sendThemeToAndroid('yellow-dark');

         } else if (currentColorTheme === 'Material You (Forest green 33)') {
             sendThemeToAndroid('green-dark');

         } else if (currentColorTheme === 'Material You (Chestnut cool red 122)') {
           sendThemeToAndroid('red-dark');
         } else if (currentColorTheme === 'Material You (Raspberry pink P99)') {
             sendThemeToAndroid('pink-dark');
            } else if (currentColorTheme === 'Material You (Deep charcoal 83)') {
                sendThemeToAndroid('charcol-dark');

            } else if (currentColorTheme === 'Material You (Hint orange 33)') {
                sendThemeToAndroid('orange-dark');

         } else if (currentColorTheme === 'Material You (pop_blue_default)'){
             sendThemeToAndroid('blue-dark');

         }

     } else if (currentTheme === 'light') {

         if (currentColorTheme === 'Material You (Berry pop blue 44)') {
             sendThemeToAndroid('blue-light');
         } else if (currentColorTheme === 'Material You (Raisin purple 100)') {
             sendThemeToAndroid('purple-light');
         } else if (currentColorTheme === 'Material You (Olive pop green 49)') {
             sendThemeToAndroid('yellow-light');

         } else if (currentColorTheme === 'Material You (Forest green 33)') {
             sendThemeToAndroid('green-light');

         } else if (currentColorTheme === 'Material You (Chestnut cool red 122)') {
             sendThemeToAndroid('red-light');
         } else if (currentColorTheme === 'Material You (Raspberry pink P99)') {
             sendThemeToAndroid('pink-light');
            } else if (currentColorTheme === 'Material You (Deep charcoal 83)') {
                sendThemeToAndroid('charcol-light');

            } else if (currentColorTheme === 'Material You (Hint orange 33)') {
                sendThemeToAndroid('orange-light');
         }
          else if (currentColorTheme === 'Material You (pop_blue_default)'){
             sendThemeToAndroid('blue-light');

         }

     }
 }


 if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
}

function displayDarkSwitch(){

    const currentTheme = localStorage.getItem('theme');


if (currentTheme === 'dark') {
    document.getElementById('display_dark_light').selected = true
}

if(currentTheme === 'light'){
    document.getElementById('display_dark_light').selected = false

}

}
 function onlyCHECK(){

      sendThemeToAndroid('bluesetDef');

 }

 displayDarkSwitch();

if (currentColorTheme === 'Material You (pop_blue_default)') {
      colorCheckbox.checked = false;
} else {
  colorCheckbox.checked = true;
    const newRandomColorTheme = getRandomColorTheme();
    setTheme(currentTheme, newRandomColorTheme);
}




function updateTextContent(color) {

    textToUpdate.textContent = `${color}`;

}



     function sendThemeToAndroid(theme) {

         AndroidInterface.updateStatusBarColor(theme);
     };


     checkTHEME();
