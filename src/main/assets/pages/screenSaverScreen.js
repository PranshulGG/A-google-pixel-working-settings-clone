
document.addEventListener("DOMContentLoaded", function() {
    const clock = document.getElementById('clock');
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
  
    function updateTime() {
      const now = new Date();
      const hours = now.getHours() % 12 || 12; 
      const minutes = ('0' + now.getMinutes()).slice(-2);
      const seconds = ('0' + now.getSeconds()).slice(-2);
      const ampm = now.getHours() >= 12 ? 'Pm' : 'Am';
      const month = now.toLocaleString('default', { month: 'short' });
      const date = now.getDate();
      const year = now.getFullYear();
  
      timeElement.textContent = `${hours}:${minutes} ${ampm}`;
      dateElement.textContent = `${month} ${date}`;
    }
  
    function hideClock() {
      clock.classList.add('fade-out');
      setTimeout(function() {
        moveClock();
        clock.classList.remove('fade-out');
      }, 1000);
    }
  
    function moveClock() {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const randomX = Math.floor(Math.random() * (screenWidth - 200)); 
      const randomY = Math.floor(Math.random() * (screenHeight - 100));
  
      clock.style.top = randomY + 'px';
      clock.style.left = randomX + 'px';
    }
  
    updateTime();
    setInterval(updateTime, 1000);
    setInterval(hideClock, 3000);
  
  
    document.body.addEventListener('touchstart', () =>{
      sendThemeToAndroid('Goback');
    });
  
    function sendThemeToAndroid(theme) {
  
      AndroidInterface.updateStatusBarColor(theme);
  };
  });
  