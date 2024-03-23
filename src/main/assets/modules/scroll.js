// Personalization
function changeColorOnScroll1() {
    var container = document.getElementById('headUser-1');
    var scrollY = container.scrollTop;
  
    if (scrollY >= 50) {
      document.getElementById('head-1').style.backgroundColor = 'var(--Surface-Container)'; 
      document.getElementById('head-1').style.transition = ''; 


      container.removeEventListener('scroll', changeColorOnScroll1); 
      checkSearchScroll()

    } else {

    }
  }
  
  document.getElementById('headUser-1').addEventListener('scroll', changeColorOnScroll1);
  
  

  function changeColorOnScroll1A() {
    var container = document.getElementById('headUser-1');
    var scrollY = container.scrollTop;
  
    if (scrollY <= 50) {
      document.getElementById('head-1').style.backgroundColor = ''; 
      document.getElementById('head-1').style.transition = 'background-color 0.2s ease-in'; 

      ActivityColor();
      container.addEventListener('scroll', changeColorOnScroll1); 

    } else {
 
    }
  }
  
  document.getElementById('headUser-1').addEventListener('scroll', changeColorOnScroll1A);


//   notifications

function changeColorOnScroll2() {
    var container = document.getElementById('headUser-2');
    var scrollY = container.scrollTop;
  
    if (scrollY >= 50) {
      document.getElementById('head-2').style.backgroundColor = 'var(--Surface-Container)'; 
      document.getElementById('head-2').style.transition = ''; 

      document.getElementById('headUser-2').style.scrollSnapType = 'x'; 
      container.removeEventListener('scroll', changeColorOnScroll2); 
      checkSearchScroll()

    } else {

    }
  }
  
  document.getElementById('headUser-2').addEventListener('scroll', changeColorOnScroll2);
  
  

  function changeColorOnScroll2A() {
    var container = document.getElementById('headUser-2');
    var scrollY = container.scrollTop;
  
    if (scrollY <= 50) {
      document.getElementById('head-2').style.backgroundColor = ''; 
      document.getElementById('head-2').style.transition = 'background-color 0.2s ease-in'; 

      ActivityColor();
      container.addEventListener('scroll', changeColorOnScroll2); 
      if(scrollY <= 20); {
        document.getElementById('headUser-2').style.scrollSnapType = ''; 

      }

    } else{
        
    }
  }
  
  document.getElementById('headUser-2').addEventListener('scroll', changeColorOnScroll2A);


//   battery

function changeColorOnScroll3() {
    var container = document.getElementById('headUser-3');
    var scrollY = container.scrollTop;
  
    if (scrollY >= 50) {
      document.getElementById('head-3').style.backgroundColor = 'var(--Surface-Container)'; 
      document.getElementById('head-3').style.transition = ''; 

      document.getElementById('headUser-3').style.scrollSnapType = 'x'; 
      container.removeEventListener('scroll', changeColorOnScroll3); 
      checkSearchScroll()

    } else {

    }
  }
  
  document.getElementById('headUser-3').addEventListener('scroll', changeColorOnScroll3);
  
  

  function changeColorOnScroll3A() {
    var container = document.getElementById('headUser-3');
    var scrollY = container.scrollTop;
  
    if (scrollY <= 50) {
      document.getElementById('head-3').style.backgroundColor = ''; 
      document.getElementById('head-3').style.transition = 'background-color 0.2s ease-in'; 

      ActivityColor();
      container.addEventListener('scroll', changeColorOnScroll3); 
      if(scrollY <= 20); {
        document.getElementById('headUser-3').style.scrollSnapType = ''; 

      }

    } else{
        
    }
  }
  
  document.getElementById('headUser-3').addEventListener('scroll', changeColorOnScroll3A);




  // Sound and vibrations

  
function changeColorOnScroll4() {
  var container = document.getElementById('headUser-4');
  var scrollY = container.scrollTop;

  if (scrollY >= 50) {
    document.getElementById('head-4').style.backgroundColor = 'var(--Surface-Container)'; 
    document.getElementById('head-4').style.transition = ''; 

    document.getElementById('headUser-4').style.scrollSnapType = 'x'; 
    container.removeEventListener('scroll', changeColorOnScroll4); 
    checkSearchScroll()

  } else {

  }
}

document.getElementById('headUser-4').addEventListener('scroll', changeColorOnScroll4);



function changeColorOnScroll4A() {
  var container = document.getElementById('headUser-4');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    document.getElementById('head-4').style.backgroundColor = ''; 
    document.getElementById('head-4').style.transition = 'background-color 0.2s ease-in'; 

    ActivityColor();
    container.addEventListener('scroll', changeColorOnScroll4); 
    if(scrollY <= 20); {
      document.getElementById('headUser-4').style.scrollSnapType = ''; 

    }

  } else{
      
  }
}

document.getElementById('headUser-4').addEventListener('scroll', changeColorOnScroll4A);


// display settings


function changeColorOnScroll5() {
  var container = document.getElementById('headUser-5');
  var scrollY = container.scrollTop;

  if (scrollY >= 50) {
    document.getElementById('head-5').style.backgroundColor = 'var(--Surface-Container)'; 
    document.getElementById('head-5').style.transition = ''; 

    document.getElementById('headUser-5').style.scrollSnapType = 'x'; 
    container.removeEventListener('scroll', changeColorOnScroll5); 
    checkSearchScroll()

  } else {

  }
}

document.getElementById('headUser-5').addEventListener('scroll', changeColorOnScroll5);



function changeColorOnScroll5A() {
  var container = document.getElementById('headUser-5');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    document.getElementById('head-5').style.backgroundColor = ''; 
    document.getElementById('head-5').style.transition = 'background-color 0.2s ease-in'; 

    ActivityColor();
    container.addEventListener('scroll', changeColorOnScroll5); 
    if(scrollY <= 20); {
      document.getElementById('headUser-5').style.scrollSnapType = ''; 

    }

  } else{
      
  }
}

document.getElementById('headUser-5').addEventListener('scroll', changeColorOnScroll5A);



// ScreenSaver-Settings

function changeColorOnScroll6() {
  var container = document.getElementById('headUser-6');
  var scrollY = container.scrollTop;

  if (scrollY >= 50) {
    document.getElementById('head-6').style.backgroundColor = 'var(--Surface-Container)'; 
    document.getElementById('head-6').style.transition = ''; 

    document.getElementById('headUser-6').style.scrollSnapType = 'x'; 
    container.removeEventListener('scroll', changeColorOnScroll6); 
    checkSearchScroll()

  } else {

  }
}

document.getElementById('headUser-6').addEventListener('scroll', changeColorOnScroll6);



function changeColorOnScroll6A() {
  var container = document.getElementById('headUser-6');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    document.getElementById('head-6').style.backgroundColor = ''; 
    document.getElementById('head-6').style.transition = 'background-color 0.2s ease-in'; 

    ActivityColor();
    container.addEventListener('scroll', changeColorOnScroll6); 
    if(scrollY <= 20); {
      document.getElementById('headUser-6').style.scrollSnapType = ''; 

    }

  } else{
      
  }
}

document.getElementById('headUser-6').addEventListener('scroll', changeColorOnScroll6A);


// storage-settings

function changeColorOnScroll7() {
  var container = document.getElementById('headUser-7');
  var scrollY = container.scrollTop;

  if (scrollY >= 50) {
    document.getElementById('head-7').style.backgroundColor = 'var(--Surface-Container)'; 
    document.getElementById('head-7').style.transition = ''; 

    document.getElementById('headUser-7').style.scrollSnapType = 'x'; 
    container.removeEventListener('scroll', changeColorOnScroll7); 
    checkSearchScroll()

  } else {

  }
}

document.getElementById('headUser-7').addEventListener('scroll', changeColorOnScroll7);



function changeColorOnScroll7A() {
  var container = document.getElementById('headUser-7');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    document.getElementById('head-7').style.backgroundColor = ''; 
    document.getElementById('head-7').style.transition = 'background-color 0.2s ease-in'; 

    ActivityColor();
    container.addEventListener('scroll', changeColorOnScroll7); 
    if(scrollY <= 20); {
      document.getElementById('headUser-7').style.scrollSnapType = ''; 

    }

  } else{
      
  }
}

document.getElementById('headUser-7').addEventListener('scroll', changeColorOnScroll7A);


// earthquake alerts main

function changeColorOnScroll9() {
  var container = document.getElementById('headUser-9');
  var scrollY = container.scrollTop;

  if (scrollY >= 50) {
    document.getElementById('head-9').style.backgroundColor = 'var(--Surface-Container)'; 
    document.getElementById('head-9').style.transition = ''; 

    document.getElementById('headUser-9').style.scrollSnapType = 'x'; 
    container.removeEventListener('scroll', changeColorOnScroll9); 
    checkSearchScroll()

  } else {

  }
}

document.getElementById('headUser-9').addEventListener('scroll', changeColorOnScroll9);



function changeColorOnScroll9A() {
  var container = document.getElementById('headUser-9');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    document.getElementById('head-9').style.backgroundColor = ''; 
    document.getElementById('head-9').style.transition = 'background-color 0.2s ease-in'; 

    ActivityColor();
    container.addEventListener('scroll', changeColorOnScroll9); 
    if(scrollY <= 20); {
      document.getElementById('headUser-9').style.scrollSnapType = ''; 

    }

  } else{
      
  }
}

document.getElementById('headUser-9').addEventListener('scroll', changeColorOnScroll9A);


// accessibility screen

function changeColorOnScroll10() {
  var container = document.getElementById('headUser-10');
  var scrollY = container.scrollTop;

  if (scrollY >= 50) {
    document.getElementById('head-10').style.backgroundColor = 'var(--Surface-Container)'; 
    document.getElementById('head-10').style.transition = ''; 

    document.getElementById('headUser-10').style.scrollSnapType = 'x'; 
    container.removeEventListener('scroll', changeColorOnScroll10); 
    checkSearchScroll()

  } else {

  }
}

document.getElementById('headUser-10').addEventListener('scroll', changeColorOnScroll10);



function changeColorOnScroll10A() {
  var container = document.getElementById('headUser-10');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    document.getElementById('head-10').style.backgroundColor = ''; 
    document.getElementById('head-10').style.transition = 'background-color 0.2s ease-in'; 

    ActivityColor();
    container.addEventListener('scroll', changeColorOnScroll10); 
    if(scrollY <= 20); {
      document.getElementById('headUser-10').style.scrollSnapType = ''; 

    }

  } else{
      
  }
}

document.getElementById('headUser-10').addEventListener('scroll', changeColorOnScroll10A);


// location 


function changeColorOnScroll11() {
  var container = document.getElementById('headUser-11');
  var scrollY = container.scrollTop;

  if (scrollY >= 50) {
    document.getElementById('head-11').style.backgroundColor = 'var(--Surface-Container)'; 
    document.getElementById('head-11').style.transition = ''; 

    document.getElementById('headUser-11').style.scrollSnapType = 'x'; 
    container.removeEventListener('scroll', changeColorOnScroll11); 
    checkSearchScroll()

  } else {

  }
}

document.getElementById('headUser-11').addEventListener('scroll', changeColorOnScroll11);



function changeColorOnScroll11A() {
  var container = document.getElementById('headUser-11');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    document.getElementById('head-11').style.backgroundColor = ''; 
    document.getElementById('head-11').style.transition = 'background-color 0.2s ease-in'; 

    ActivityColor();
    container.addEventListener('scroll', changeColorOnScroll11); 
    if(scrollY <= 20); {
      document.getElementById('headUser-11').style.scrollSnapType = ''; 

    }

  } else{
      
  }
}

document.getElementById('headUser-11').addEventListener('scroll', changeColorOnScroll11A)



// security and privacy scroll


function changeColorOnScroll12() {
  var container = document.getElementById('headUser-13');
  var scrollY = container.scrollTop;

  if (scrollY >= 50) {
    document.getElementById('head-13').style.backgroundColor = 'var(--Surface-Container)'; 
    document.getElementById('head-13').style.transition = ''; 

    document.getElementById('headUser-13').style.scrollSnapType = 'x'; 
    container.removeEventListener('scroll', changeColorOnScroll12); 
    checkSearchScroll()

  } else {

  }
}

document.getElementById('headUser-13').addEventListener('scroll', changeColorOnScroll12);



function changeColorOnScroll12A() {
  var container = document.getElementById('headUser-13');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    document.getElementById('head-13').style.backgroundColor = ''; 
    document.getElementById('head-13').style.transition = 'background-color 0.2s ease-in'; 

    ActivityColor();
    container.addEventListener('scroll', changeColorOnScroll12); 
    if(scrollY <= 20); {
      document.getElementById('headUser-13').style.scrollSnapType = ''; 

    }

  } else{
      
  }
}

document.getElementById('headUser-13').addEventListener('scroll', changeColorOnScroll12A)


// digital wellbeing

function changeColorOnScroll13() {
  var container = document.getElementById('headUser-15');
  var scrollY = container.scrollTop;

  if (scrollY >= 50) {
    document.getElementById('head-15').style.backgroundColor = 'var(--Surface-Container)'; 
    document.getElementById('head-15').style.transition = ''; 

    document.getElementById('headUser-15').style.scrollSnapType = 'x'; 
    container.removeEventListener('scroll', changeColorOnScroll13); 
    checkSearchScroll()

  } else {

  }
}

document.getElementById('headUser-15').addEventListener('scroll', changeColorOnScroll13);



function changeColorOnScroll13A() {
  var container = document.getElementById('headUser-15');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    document.getElementById('head-15').style.backgroundColor = ''; 
    document.getElementById('head-15').style.transition = 'background-color 0.2s ease-in'; 

    ActivityColor();
    container.addEventListener('scroll', changeColorOnScroll13); 
    if(scrollY <= 20); {
      document.getElementById('headUser-15').style.scrollSnapType = ''; 

    }

  } else{
      
  }
}

document.getElementById('headUser-15').addEventListener('scroll', changeColorOnScroll13A)


// system

function changeColorOnScroll14() {
  var container = document.getElementById('headUser-16');
  var scrollY = container.scrollTop;

  if (scrollY >= 50) {
    document.getElementById('head-16').style.backgroundColor = 'var(--Surface-Container)'; 
    document.getElementById('head-16').style.transition = ''; 

    document.getElementById('headUser-16').style.scrollSnapType = 'x'; 
    container.removeEventListener('scroll', changeColorOnScroll14); 
    checkSearchScroll()

  } else {

  }
}

document.getElementById('headUser-16').addEventListener('scroll', changeColorOnScroll14);



function changeColorOnScroll14A() {
  var container = document.getElementById('headUser-16');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    document.getElementById('head-16').style.backgroundColor = ''; 
    document.getElementById('head-16').style.transition = 'background-color 0.2s ease-in'; 

    ActivityColor();
    container.addEventListener('scroll', changeColorOnScroll14); 
    if(scrollY <= 20); {
      document.getElementById('headUser-16').style.scrollSnapType = ''; 

    }

  } else{
      
  }
}

document.getElementById('headUser-16').addEventListener('scroll', changeColorOnScroll14A)



// live-translate

function changeColorOnScroll15() {
  var container = document.getElementById('headUser-19');
  var scrollY = container.scrollTop;

  if (scrollY >= 50) {
    document.getElementById('head-19').style.backgroundColor = 'var(--Surface-Container)'; 
    document.getElementById('head-19').style.transition = ''; 

    document.getElementById('headUser-19').style.scrollSnapType = 'x'; 
    container.removeEventListener('scroll', changeColorOnScroll15); 
    checkSearchScroll()

  } else {

  }
}

document.getElementById('headUser-19').addEventListener('scroll', changeColorOnScroll15);



function changeColorOnScroll15A() {
  var container = document.getElementById('headUser-19');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    document.getElementById('head-19').style.backgroundColor = ''; 
    document.getElementById('head-19').style.transition = 'background-color 0.2s ease-in'; 

    ActivityColor();
    container.addEventListener('scroll', changeColorOnScroll15); 
    if(scrollY <= 20); {
      document.getElementById('headUser-19').style.scrollSnapType = ''; 

    }

  } else{
      
  }
}

document.getElementById('headUser-19').addEventListener('scroll', changeColorOnScroll15A)


// add language-screen


function changeColorOnScroll16() {
  var container = document.getElementById('headUser-20');
  var scrollY = container.scrollTop;

  if (scrollY >= 50) {
    document.getElementById('head-20').style.backgroundColor = 'var(--Surface-Container)'; 
    document.getElementById('head-20').style.transition = ''; 

    document.getElementById('headUser-20').style.scrollSnapType = 'x'; 
    container.removeEventListener('scroll', changeColorOnScroll16); 
    checkSearchScroll()

  } else {

  }
}

document.getElementById('headUser-20').addEventListener('scroll', changeColorOnScroll16);



function changeColorOnScroll16A() {
  var container = document.getElementById('headUser-20');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    document.getElementById('head-20').style.backgroundColor = ''; 
    document.getElementById('head-20').style.transition = 'background-color 0.2s ease-in'; 

    ActivityColor();
    container.addEventListener('scroll', changeColorOnScroll16); 
    if(scrollY <= 20); {
      document.getElementById('headUser-20').style.scrollSnapType = ''; 

    }

  } else{
      
  }
}

document.getElementById('headUser-20').addEventListener('scroll', changeColorOnScroll16A)



// date and time screen

function changeColorOnScroll17() {
  var container = document.getElementById('headUser-21');
  var scrollY = container.scrollTop;

  if (scrollY >= 50) {
    document.getElementById('head-21').style.backgroundColor = 'var(--Surface-Container)'; 
    document.getElementById('head-21').style.transition = ''; 

    document.getElementById('headUser-21').style.scrollSnapType = 'x'; 
    container.removeEventListener('scroll', changeColorOnScroll17); 
    checkSearchScroll()

  } else {

  }
}

document.getElementById('headUser-21').addEventListener('scroll', changeColorOnScroll17);



function changeColorOnScroll17A() {
  var container = document.getElementById('headUser-21');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    document.getElementById('head-21').style.backgroundColor = ''; 
    document.getElementById('head-21').style.transition = 'background-color 0.2s ease-in'; 

    ActivityColor();
    container.addEventListener('scroll', changeColorOnScroll17); 
    if(scrollY <= 20); {
      document.getElementById('headUser-21').style.scrollSnapType = ''; 

    }

  } else{
      
  }
}

document.getElementById('headUser-21').addEventListener('scroll', changeColorOnScroll17A)


// backup screen

function changeColorOnScroll18() {
  var container = document.getElementById('headUser-22');
  var scrollY = container.scrollTop;

  if (scrollY >= 50) {
    document.getElementById('head-22').style.backgroundColor = 'var(--Surface-Container)'; 
    document.getElementById('head-22').style.transition = ''; 

    document.getElementById('headUser-22').style.scrollSnapType = 'x'; 
    container.removeEventListener('scroll', changeColorOnScroll18); 
    checkSearchScroll()

  } else {

  }
}

document.getElementById('headUser-22').addEventListener('scroll', changeColorOnScroll18);



function changeColorOnScroll18A() {
  var container = document.getElementById('headUser-22');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    document.getElementById('head-22').style.backgroundColor = ''; 
    document.getElementById('head-22').style.transition = 'background-color 0.2s ease-in'; 

    ActivityColor();
    container.addEventListener('scroll', changeColorOnScroll18); 
    if(scrollY <= 20); {
      document.getElementById('headUser-22').style.scrollSnapType = ''; 

    }

  } else{
      
  }
}

document.getElementById('headUser-22').addEventListener('scroll', changeColorOnScroll18A)



// rules


function changeColorOnScroll19() {
  var container = document.getElementById('headUser-23');
  var scrollY = container.scrollTop;

  if (scrollY >= 50) {
    document.getElementById('head-23').style.backgroundColor = 'var(--Surface-Container)'; 
    document.getElementById('head-23').style.transition = ''; 

    document.getElementById('headUser-23').style.scrollSnapType = 'x'; 
    container.removeEventListener('scroll', changeColorOnScroll19); 
    checkSearchScroll()

  } else {

  }
}

document.getElementById('headUser-23').addEventListener('scroll', changeColorOnScroll19);



function changeColorOnScroll19A() {
  var container = document.getElementById('headUser-23');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    document.getElementById('head-23').style.backgroundColor = ''; 
    document.getElementById('head-23').style.transition = 'background-color 0.2s ease-in'; 

    ActivityColor();
    container.addEventListener('scroll', changeColorOnScroll19); 
    if(scrollY <= 20); {
      document.getElementById('headUser-23').style.scrollSnapType = ''; 

    }

  } else{
      
  }
}

document.getElementById('headUser-23').addEventListener('scroll', changeColorOnScroll19A)


// app info

function changeColorOnScroll20() {
  var container = document.getElementById('headUser-24');
  var scrollY = container.scrollTop;

  if (scrollY >= 50) {
    document.getElementById('head-24').style.backgroundColor = 'var(--Surface-Container)'; 
    document.getElementById('head-24').style.transition = ''; 

    document.getElementById('headUser-24').style.scrollSnapType = 'x'; 
    container.removeEventListener('scroll', changeColorOnScroll20); 
    checkSearchScroll()

  } else {

  }
}

document.getElementById('headUser-24').addEventListener('scroll', changeColorOnScroll20);



function changeColorOnScroll20A() {
  var container = document.getElementById('headUser-24');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    document.getElementById('head-24').style.backgroundColor = ''; 
    document.getElementById('head-24').style.transition = 'background-color 0.2s ease-in'; 

    ActivityColor();
    container.addEventListener('scroll', changeColorOnScroll20); 
    if(scrollY <= 20); {
      document.getElementById('headUser-24').style.scrollSnapType = ''; 

    }

  } else{
      
  }
}

document.getElementById('headUser-24').addEventListener('scroll', changeColorOnScroll20A)


// setting services app permissions


function changeColorOnScroll21() {
  var container = document.getElementById('headUser-26');
  var scrollY = container.scrollTop;

  if (scrollY >= 50) {
    document.getElementById('head-26').style.backgroundColor = 'var(--Surface-Container)'; 
    document.getElementById('head-26').style.transition = ''; 

    document.getElementById('headUser-26').style.scrollSnapType = 'x'; 
    container.removeEventListener('scroll', changeColorOnScroll21); 
    checkSearchScroll()

  } else {

  }
}

document.getElementById('headUser-26').addEventListener('scroll', changeColorOnScroll21);



function changeColorOnScroll21A() {
  var container = document.getElementById('headUser-26');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    document.getElementById('head-26').style.backgroundColor = ''; 
    document.getElementById('head-26').style.transition = 'background-color 0.2s ease-in'; 

    ActivityColor();
    container.addEventListener('scroll', changeColorOnScroll21); 
    if(scrollY <= 20); {
      document.getElementById('headUser-26').style.scrollSnapType = ''; 

    }

  } else{
      
  }
}

document.getElementById('headUser-26').addEventListener('scroll', changeColorOnScroll21A)



// app info storage and cache


function changeColorOnScroll22() {
  var container = document.getElementById('headUser-27');
  var scrollY = container.scrollTop;

  if (scrollY >= 50) {
    document.getElementById('head-27').style.backgroundColor = 'var(--Surface-Container)'; 
    document.getElementById('head-27').style.transition = ''; 

    document.getElementById('headUser-27').style.scrollSnapType = 'x'; 
    container.removeEventListener('scroll', changeColorOnScroll22); 
    checkSearchScroll()

  } else {

  }
}

document.getElementById('headUser-27').addEventListener('scroll', changeColorOnScroll22);



function changeColorOnScroll22A() {
  var container = document.getElementById('headUser-27');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    document.getElementById('head-27').style.backgroundColor = ''; 
    document.getElementById('head-27').style.transition = 'background-color 0.2s ease-in'; 

    ActivityColor();
    container.addEventListener('scroll', changeColorOnScroll22); 
    if(scrollY <= 20); {
      document.getElementById('headUser-27').style.scrollSnapType = ''; 

    }

  } else{
      
  }
}

document.getElementById('headUser-27').addEventListener('scroll', changeColorOnScroll22A)


// wellbeing dashboard

function changeColorOnScroll23() {
  var container = document.getElementById('headUser-32');
  var scrollY = container.scrollTop;

  if (scrollY >= 50) {
    document.getElementById('head-32').style.backgroundColor = 'var(--Surface-Container)'; 
    document.getElementById('head-32').style.transition = ''; 

    document.getElementById('headUser-32').style.scrollSnapType = 'x'; 
    container.removeEventListener('scroll', changeColorOnScroll23); 
    checkSearchScroll()

  } else {

  }
}

document.getElementById('headUser-32').addEventListener('scroll', changeColorOnScroll23);



function changeColorOnScroll23A() {
  var container = document.getElementById('headUser-32');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    document.getElementById('head-32').style.backgroundColor = ''; 
    document.getElementById('head-32').style.transition = 'background-color 0.2s ease-in'; 

    ActivityColor();
    container.addEventListener('scroll', changeColorOnScroll23); 
    if(scrollY <= 20); {
      document.getElementById('headUser-32').style.scrollSnapType = ''; 

    }

  } else{
      
  }
}

document.getElementById('headUser-32').addEventListener('scroll', changeColorOnScroll23A)


// wellbeing focus mode

function changeColorOnScroll24() {
  var container = document.getElementById('headUser-33');
  var scrollY = container.scrollTop;

  if (scrollY >= 50) {
    document.getElementById('head-33').style.backgroundColor = 'var(--Surface-Container)'; 
    document.getElementById('head-33').style.transition = ''; 

    document.getElementById('headUser-33').style.scrollSnapType = 'x'; 
    container.removeEventListener('scroll', changeColorOnScroll24); 
    checkSearchScroll()

  } else {

  }
}

document.getElementById('headUser-33').addEventListener('scroll', changeColorOnScroll24);



function changeColorOnScroll24A() {
  var container = document.getElementById('headUser-33');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    document.getElementById('head-33').style.backgroundColor = ''; 
    document.getElementById('head-33').style.transition = 'background-color 0.2s ease-in'; 

    ActivityColor();
    container.addEventListener('scroll', changeColorOnScroll24); 
    if(scrollY <= 20); {
      document.getElementById('headUser-33').style.scrollSnapType = ''; 

    }

  } else{
      
  }
}

document.getElementById('headUser-33').addEventListener('scroll', changeColorOnScroll24A)


// display text and size

function changeColorOnScroll25() {
  var container = document.getElementById('headUser-34');
  var scrollY = container.scrollTop;

  if (scrollY >= 50) {
    document.getElementById('head-34').style.backgroundColor = 'var(--Surface-Container)'; 
    document.getElementById('head-34').style.transition = ''; 

    document.getElementById('headUser-34').style.scrollSnapType = 'x'; 
    container.removeEventListener('scroll', changeColorOnScroll25); 
    checkSearchScroll()

  } else {

  }
}

document.getElementById('headUser-34').addEventListener('scroll', changeColorOnScroll25);



function changeColorOnScroll25A() {
  var container = document.getElementById('headUser-34');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    document.getElementById('head-34').style.backgroundColor = ''; 
    document.getElementById('head-34').style.transition = 'background-color 0.2s ease-in'; 

    ActivityColor();
    container.addEventListener('scroll', changeColorOnScroll25); 
    if(scrollY <= 20); {
      document.getElementById('headUser-34').style.scrollSnapType = ''; 

    }

  } else{
      
  }
}

document.getElementById('headUser-34').addEventListener('scroll', changeColorOnScroll25A)


// about phone

function changeColorOnScroll26() {
  var container = document.getElementById('headUser-36');
  var scrollY = container.scrollTop;

  if (scrollY >= 50) {
    document.getElementById('head-36').style.backgroundColor = 'var(--Surface-Container)'; 
    document.getElementById('head-36').style.transition = ''; 

    document.getElementById('headUser-36').style.scrollSnapType = 'x'; 
    container.removeEventListener('scroll', changeColorOnScroll26); 
    checkSearchScroll()

  } else {

  }
}

document.getElementById('headUser-36').addEventListener('scroll', changeColorOnScroll26);



function changeColorOnScroll26A() {
  var container = document.getElementById('headUser-36');
  var scrollY = container.scrollTop;

  if (scrollY <= 50) {
    document.getElementById('head-36').style.backgroundColor = ''; 
    document.getElementById('head-36').style.transition = 'background-color 0.2s ease-in'; 

    ActivityColor();
    container.addEventListener('scroll', changeColorOnScroll26); 
    if(scrollY <= 20); {
      document.getElementById('headUser-36').style.scrollSnapType = ''; 

    }

  } else{
      
  }
}

document.getElementById('headUser-36').addEventListener('scroll', changeColorOnScroll26A)